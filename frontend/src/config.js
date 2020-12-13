const servercfg = require('../../backend/config');

module.exports = {
    SERVER: `http://${servercfg.ADDRESS}:${servercfg.PORT}`,
    PROMPTS_TXT: "prompts.txt"
};