/* 
 * The MIT License
 *
 * Copyright 2016 Eli Davis.
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


module.exports = Mycourses;

/**
 * Mycourses service takes care of loading in user saved courses from chrome storage
 * and providing anyone who has the need for it.
 * 
 * So this will interface with chrome storage, not the directives.
 * 
 * Subscriptions?
 * My hacked together solution to not wanting to include Rx in fear of bloating dependencies.
 * 
 * @ngInject
 */
function Mycourses() {

    var self = this;
    
    /**
     * Array of functions which will be called whenever new course information is
     * recieved
     */
    var _subscriptions = [];

    /**
     * For new subscribers this object will be pushed to them immediately.
     */
    var _lastCourseObject = [];


    chrome.storage.sync.get('MyCourses', function(classes) {
        console.log('Settings loaded', classes);
        _pushCoursesToSubscribers(classes.MyCourses);
        _lastCourseObject = classes.MyCourses || [];
    });

    var _syncChangesToChrome = function(newChanges) {
        chrome.storage.sync.set({'MyCourses': newChanges}, function() {
            console.log('Settings saved');
        });
    };


    self.getSetCourses = function() {
        return _lastCourseObject;
    };


    self.subscribeToCourses = function (cb) {
        _subscriptions.push(cb);
        cb(_lastCourseObject);
    };
    
    
    self.setCourses = function(newCourseData) {
        _syncChangesToChrome(newCourseData);
        _pushCoursesToSubscribers(newCourseData);
        _lastCourseObject = newCourseData;
    };
    
    
    var _pushCoursesToSubscribers = function(data) {
        _subscriptions.forEach(function(subscriber) {
            subscriber(data);
        });
    };
    
}
