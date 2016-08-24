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
        'template': '<center style="margin-bottom: 0px;"><h1 style="margin-bottom:0px;">Banner</h1><h4 style="margin-top:0px;"><a href="https://my.msstate.edu/web/home-community">Actual Banner</a></h4></center><div layout="column" flex style="overflow:auto;margin-top:0px;"><md-button ng-repeat="link in banner.links" ng-click="openLink(link.link)" ng-bind="link.name"></md-button></div>',
        'controllerAs': 'banner',
        'controller': /*@ngInject*/ function ($scope) {

            var self = this;

            self.links = bannerLinks;


        }
    };
}
