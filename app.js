var nconf = require('nconf');

nconf.argv()
    .env()
    .file({
        file: 'config.json'
    });