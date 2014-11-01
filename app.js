var nconf = require('nconf');

nconf
    .argv()
    .env()
    .file({
        file: 'config.json'
    });

console.log('k: ', nconf.get('k'));
console.log('database: ', nconf.get('database'));
console.log('database.host: ', nconf.get('database').host);