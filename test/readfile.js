exports.readproperty = function(test) {

    var nconf = require('nconf');

    nconf.file({
        file: 'config.json'
    });

    test.equal(nconf.get('timeout'), 60);
    test.done();
}