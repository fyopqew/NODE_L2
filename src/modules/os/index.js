const os = require('os');
require('dotenv').config();

function getOSInfo() {
    console.log("Операционная система:", os.platform());
    console.log("Свободная память (MB):", os.freemem() / 1024 / 1024);
    console.log("Главная директория:", os.homedir());
    console.log("Имя ПК:", os.hostname());
    console.log("Сетевой интерфейс:", os.networkInterfaces());
}

function checkMemory() {
    const freeMemoryGB = os.freemem() / 1024 / 1024 / 1024;
    return freeMemoryGB > 4;
}

function executeIfAdmin(func) {
    if (process.env.MODE === 'admin') {
        func();
    } else {
        console.log("Доступ запрещен. Требуется режим администратора.");
    }
}

module.exports = { getOSInfo, checkMemory, executeIfAdmin };
