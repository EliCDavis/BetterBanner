/*
 * The MIT License
 *
 * Copyright 2016 Eli.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var ourStylesheetHref = "inject.css";
var bodyNode = document.getElementsByTagName("BODY")[0];

// Remove that nasty fucking DOM
while (bodyNode.firstChild) {
    bodyNode.removeChild(bodyNode.firstChild);
}

// Remove Those Horrendus Styles Sheets
Array.prototype.forEach.call(document.querySelectorAll('style,[rel="stylesheet"],[type="text/css"]'), function (element) {
    try {
        if (ourStylesheetHref !== element.href) {
            element.parentNode.removeChild(element);
        }
    } catch (err) {
    }
});

// Now let's add back what we want
bodyNode.innerHTML = ''+require('../InjectHtmlKey');

// Let's set up the angular app now!
var angular = require('angular');

require('angular-material');

var app = angular.module('Better Banner', ['ngMaterial']);

require('./directives');
//require('./controllers');

angular.bootstrap(document, ['Better Banner']);
