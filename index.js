'use strict';

/**
 * Create a lookup object with given array and key
 * @param  {Array} array Array of objects
 * @param  {String} key  Property to use as lookup key
 * @return {Object}       Returns lookup object
 */
module.exports = function lookupObj(array, key) {
    var length = array.length,
        obj = {},
        i = 0;

    for (i; i < length; i++) {
        obj[array[i][key]] = array[i];
        obj[array[i][key]].lookupIndex = i;
    }

    return obj
};