var lookup = require('index.js'),
    assert = require('chai').assert,
    array = [];

array = [
    {id: 23, name: 'Red'},
    {id: 45, name: 'Blue'},
    {id: 17, name: 'Green'}
];

describe('lookupObject', function () {
    it('should create a lookup object', function () {
        var lookupObject = lookup(array, 'name');
        assert.equal(lookupObject.Red.id, 23);
    });
});