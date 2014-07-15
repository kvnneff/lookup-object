lookupObject ![Build Status](https://travis-ci.org/staygrimm/lookupObject.svg?branch=master)
=====================

Create a lookup object from a given array and key.

----------


Example
--------

    var lookup = require('lookup-object'),
        lookupObject = {},
        colors = [];
        
    colors = [
        {id: 23, name: 'Red'},
        {id: 45, name: 'Blue'},
        {id: 17, name: 'Green'}
    ];
    
    lookupObject = lookup(colors, 'name');
    
    /**
    *   lookupObject: 
    *       {
    *           Red: {
    *               id: 23,
    *               name: 'Red',
    *               lookupIndex: 0
    *           },
    *           Blue: {
    *               id: 45,
    *               name: 'Blue',
    *               lookupIndex: 1
    *           },
    *           Green: {
    *               id: 17,
    *               name: 'Green',
    *               lookupIndex: 2
    *           }
    *       }
    */

Run tests
---
    npm install .
    npm test

License
---
(The MIT License)

Copyright (c) 2013 River Grimm river.grimm@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


  [1]: http://stackoverflow.com/a/4760279
