# whatsapp-announcement-bot

A simple but powerful open-source WhatsApp automation tool for quickly sending announcements to one, multiple, or all of your WhatsApp groups and private chats from the command line.

***

## Features

- **Send announcements to:**
  - a single group
  - selected groups
  - all WhatsApp groups you're a member of
  - individual contacts (private chat)
- **Interactive CLI:** Choose your broadcast targets and type your message live
- **Easy setup:** Just scan a QR code—no API keys, no business verification needed
- **Fast & flexible:** Built with Node.js and `whatsapp-web.js` for maximum compatibility
- **Easily extendable:** Integrate with scripts or automation systems, e.g., fetch email or news and broadcast to WhatsApp

***

## Tech Stack
- **Node.js**
- **whatsapp-web.js** library
- **Command-line interface (CLI)**

***

## 🖥️ Setup & Usage

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/whatsapp-announcement-bot.git
    cd whatsapp-announcement-bot
    ```
2. **Install dependencies**
    ```bash
    npm install
    ```
3. **Run the bot**
    ```bash
    node bot.js
    # (or whatever your main script file is)
    ```
4. **Scan the QR code**
    - When prompted, scan the QR code with your WhatsApp mobile app under: Settings → Linked Devices → Link a Device
5. **Follow CLI prompts** to quickly:
    - See your group list (auto-fetched)
    - Choose to send to one group, several, or all
    - Enter your custom announcement message
    - (For private chats, enter their numbers in international format, like 919876543210@c.us)

***

## ⚡️ Advanced
- **Integrate with Python or other scripts:**
  - Automate your bot to send parsed content from sources like email (e.g., parse emails and run this bot to share updates)
- **Send to private chats:**
  - Enter recipient numbers in format: `countrycode+number@c.us` (e.g., `919876543210@c.us` for India)
- **Mass group messaging:**
  - Select 'ALL' in CLI for a group-wide broadcast

***

## Notes
- **Your WhatsApp account must be an active member of the groups you wish to message**
- **Group names are case-sensitive**—ensure you use the exact names shown in your app
- **This bot runs locally and uses WhatsApp Web's authentication (QR code scanning)**
- **Don't use for spam or unsolicited messaging—respect WhatsApp's Terms of Service**

***

## 🛠️ Contributing
Pull requests and suggestions are welcomed! Please open issues for bugs or feature requests.

***

## 🙌 Credits
- Inspired by open-source WhatsApp automation projects and the amazing [`whatsapp-web.js`](https://github.com/pedroslopez/whatsapp-web.js) community.

[1](https://github.com/topics/whatsapp-bot)
[2](https://github.com/aydinnyunus/WhatsappBOT)
[3](https://github.com/nexoslabs/bot-whatsapp-template)
[4](https://github.com/pkjmesra/whatsapp-bot)
[5](https://github.com/totigm/whatsapp-bot-template)
[6](https://dev.to/whapicloud/running-whatsapp-bot-on-nodejs-199e)
[7](https://github.com/daveebbelaar/python-whatsapp-bot)
[8](https://github.com/ekatraone/Ekatra-WhatsApp-Bot)
[9](https://pypi.org/project/python-whatsapp-bot/)
[10](https://github.com/lyfe00011/levanter)
