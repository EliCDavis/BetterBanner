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


module.exports = MycoursesDirective;


function MycoursesDirective() {
    return {
        'restrict': 'E',
        'template': '<div style="margin:5px;" layout="row" layout-align="center center"><md-button class="md-primary md-raised" ng-repeat="link in myCourses.courses" ng-click="openLink(link.url)" ng-bind="link.name"></md-button></div>',
        'controllerAs': 'myCourses',
        'controller': /*@ngInject*/ function (MyCourses) {
            
            var self = this;
            
            self.courses = MyCourses.getCourses();
            
        }
    };
}
