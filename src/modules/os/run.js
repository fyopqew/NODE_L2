const { getOSInfo, checkMemory, executeIfAdmin } = require('./index');

executeIfAdmin(getOSInfo);

console.log("Свободной памяти больше 4GB:", checkMemory() ? "Да" : "Нет");