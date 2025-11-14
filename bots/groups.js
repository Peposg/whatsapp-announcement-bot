const qrcode = require('qrcode-terminal');
const readline = require('readline');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

function getUserInput(query) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => {
    rl.question(query, answer => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
  console.log('Scan the QR code with WhatsApp on your phone.');
});

client.on('ready', async () => {
  console.log('Client is ready! Fetching group list...');
  const chats = await client.getChats();
  const groupChats = chats.filter(chat => chat.isGroup);

  if (groupChats.length === 0) {
    console.log('No groups found in your account.');
    return;
  }

  console.log('Groups available:');
  groupChats.forEach((group, idx) => {
    console.log(`${idx + 1}. ${group.name}`);
  });

  // Select mode
  const mode = await getUserInput(
    '\nSend to: 1) one group; 2) multiple groups; 3) ALL groups.\nType 1, 2, or 3: '
  );
  let selectedGroups = [];

  if (mode === '1') {
    const idInput = await getUserInput('Enter group id (number from list above): ');
    const groupId = parseInt(idInput);
    if (isNaN(groupId) || groupId < 1 || groupId > groupChats.length) {
      console.log('Invalid group ID.');
      return;
    }
    selectedGroups = [groupChats[groupId - 1]];
  } else if (mode === '2') {
    const idsInput = await getUserInput('Enter group ids (comma-separated numbers, e.g. 1,3,5): ');
    const ids = idsInput
      .split(',')
      .map(id => parseInt(id.trim()))
      .filter(num => !isNaN(num) && num >= 1 && num <= groupChats.length);
    if (!ids.length) {
      console.log('No valid group IDs entered.');
      return;
    }
    selectedGroups = ids.map(id => groupChats[id - 1]);
  } else if (mode === '3') {
    // -- BEGIN DOUBLE CONFIRMATION --
    const firstConfirm = await getUserInput('Are you sure you want to send this message to ALL groups? (yes/no): ');
    if (firstConfirm.toLowerCase() !== 'yes') {
      console.log('Broadcast cancelled.');
      return;
    }
    const secondConfirm = await getUserInput('Type CONFIRM (in all caps) to continue: ');
    if (secondConfirm !== 'CONFIRM') {
      console.log('Broadcast cancelled.');
      return;
    }
    // -- END DOUBLE CONFIRMATION --
    selectedGroups = groupChats;
  } else {
    console.log('Invalid mode. Exiting.');
    return;
  }

  const message = await getUserInput('Enter your message: ');
  for (const group of selectedGroups) {
    await client.sendMessage(group.id._serialized, message);
    console.log(`Message sent to group: ${group.name}`);
  }
  console.log('All done!');
});

client.initialize();
