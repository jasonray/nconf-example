exports.readSimpleProperty = function(test) {

    var nconf = require('nconf');

    nconf.file({
        file: 'config.json'
    });

    test.equal(nconf.get('timeout'), 60);
    test.done();
}

exports.readComplexProperty = function(test) {

    var nconf = require('nconf');

    nconf.file({
        file: 'config.json'
    });

    test.equal(nconf.get("database").host, "127.0.0.1");

    test.done();
}