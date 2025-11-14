const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ]
  }
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
  console.log('Scan the QR code with WhatsApp on your phone.');
});

client.on('ready', async () => {
  console.log('Client is ready!');
  // Array of recipient numbers
  const chatIds = ['cc1234567890@c.us'];
  const message = 'Hello, this is a message from your bot! If you got this message, that means this works :)';

  for (const chatId of chatIds) {
    await client.sendMessage(chatId, message);
    console.log(`Message sent to private chat: ${chatId}`);
  }
});

client.initialize();


//surh uahz blbu ubzy <- app password