const fs = require('fs');
const chalk = require('chalk');

/* ==== SETTINGS ==== */
global.prefa = [',', '!', '.', '#', '&'];
global.autoRecording = true; // auto recording
global.autoTyping = true; // auto typing
global.autorecordtype = true; // auto typing + recording
global.autoread = true; // auto read messages
global.autobio = false; // auto update bio
global.chatbot = true; // Enable text chatbot
global.emojiReact = false; // Default: enabled
global.ownernomer = "254758261142";
global.ownername = "𝚚𝚞𝚎𝚎𝚗-𝚛𝚞𝚟𝚊 𝙰𝙸";
global.ownernumber = '254758261142;
// Add country codes to block (e.g., +1, +91, +44)
global.blockedCountryCodes = ["+92", "91", "+62"]; // Blocks US & UK numbers

/* ==== QUEEN RUVA AI BETA CONTROL ==== */
global.ytname = "YT: https://www.youtube.com/@iconic-tech";
global.socialm = "GitHub: https://github.com/kineboii";
global.location = "zimbabwe/bulawayo";
global.ownername = "iconic tech";
global.botname = "ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ";

global.packname = "ʀᴏʙᴏᴛɪᴄ";
global.author = "ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɪᴄᴏɴɪᴄ";

global.themeemoji = "🤖";
global.wm = "ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ";

global.link = "https://chat.whatsapp.com/LyFPHDvc5vMCglUFjv7Rlp";

global.typemenu = "\u0076\u0031";

// Global Texts
global.xbugtex = {
    xtxt: "queen ʀᴜᴠᴀ 👨‍💻",
};

// Reply Messages
global.mess = {
    done: "✅ Task completed successfully!",
    prem: "🔒 Premium feature - upgrade to access this!",
    admin: "⛔ Admin privileges required",
    botAdmin: "🤖 Please make me admin to use this feature",
    owner: "🚫 Owner-only command detected",
    group: "💬 This command works in groups only",
    private: "📩 Please use this in private chat with me",
    wait: "⏳ Processing your request...",
    error: "❌ Oops! Something went wrong",
};

// Watch file changes
global.thumb = fs.readFileSync("./QueenMedia/ruva.jpg");

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Updated '${__filename}'`));
    delete require.cache[file];
    require(file);
});

// Module exports
module.exports = {
    // Security settings
    security: {
        antiSpam: true,
        maxMessages: 10, // Messages per 10 seconds
        blockDuration: 300 // 5 minutes in seconds
    },
    
    // Anti-link and messages
    antilinkMessage: "⚠️ Group link sharing is restricted!",
    mess: {
        owner: "⛔ Owner access required!",
        wait: "⏳ Processing your request...",
        done: "✅ Task completed successfully!",
    }
};
