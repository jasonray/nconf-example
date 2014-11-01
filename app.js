var config = require('./config');

console.log('k: ', config.get('k'));
console.log('database: ', config.get('database'));
console.log('database.host: ', config.get('database').host);