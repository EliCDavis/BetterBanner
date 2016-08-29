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


module.exports = BannerPreviewDirective;

function BannerPreviewDirective() {
    return {
        'restrict': 'E',
        'template': '<bb-my-courses-listing></bb-my-courses-listing>\
                    <div flex layout="column" ng-hide="preview.currentelyOpenedLink">\
                        <div flex="20"></div>\
                        <center>\
                            <h1>Welcome to your Better Banner!</h1>\
                            <h3>Thank you for choosing the <i>bloatware-free</i> version of Banner. Our goal is to reduce the number of steps it takes you to get to the items you actually need! </h3>\
							<p> **If you face any issues with this extension, navigate over to the sidebar menu to revert back to the original version of Banner.</p>\
							<footer>Hacked by: <a href="https://github.com/EliCDavis">Eli Davis</a> and <a href="https://github.com/hawkins">Josh Hawkins</a></footer>\
                        </center>\
                        <div flex></div>\
                    </div>\
                    <iframe style="border-style: none;"  md-whiteframe="13" ng-show="preview.currentelyOpenedLink" flex src="{{preview.currentelyOpenedLink}}"></iframe>',
        'controllerAs': 'preview',
        'controller': /*@ngInject*/ function ($sce, $rootScope) {

            var self = this;

            self.currentelyOpenedLink = "";

            $rootScope.openLink = function (link){
                if(link) {
                    self.currentelyOpenedLink = $sce.trustAsResourceUrl(link);
                }
            };
        }
    };
}
