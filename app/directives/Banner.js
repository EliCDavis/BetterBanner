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

var bannerLinks = require('../Links').banner;

module.exports = BannerDirective;



function BannerDirective() {
    return {
        'restrict': 'E',
        'template': '<center style="margin-bottom: 0px;">\
                        <h2 ng-bind="banner.greeting" style="margin-bottom:0px;">Better Banner</h2>\
                        <h4 style="margin-top:0px;"><a href="https://my.msstate.edu/web/home-community">Click here to go back to original banner style.</a></h4>\
                    </center>\
                    <div layout-align="space-between center" layout="column" flex style="overflow:auto;margin-top:0px;">\
                        <md-button style="white-space: normal;" ng-repeat="link in banner.links" ng-click="openLink(link.link)" ng-bind="link.name"></md-button>\
                    </div>',
        'controllerAs': 'banner',
        'controller': /*@ngInject*/ function (currentStudentData) {

            var self = this;
			
			// Personal Greeting Function
			self.Greeting = function() {
				var currentTime = new Date();
				var hours = currentTime.getHours();
				
				if (hours < 6) {
					self.greeting = "Why are you still up, " + currentStudentData.name + "?";
				}
				else if (hours >= 6 & hours < 12) {
					self.greeting = "Good morning, " + currentStudentData.name + "!";
				}
				
				else if (hours >= 12 & hours < 18) {
					self.greeting = "Good afternoon, " + currentStudentData.name + "!";
				}
				
				else if (hours >= 18 & hours < 21) {
					self.greeting = "Good evening, " + currentStudentData.name + "!";
				}
				
				else {
					self.greeting = "You should really be getting ready for bed, " + currentStudentData.name + "!";
				}
			}
			
			self.Greeting();

            self.links = bannerLinks;

        }
    };
}
