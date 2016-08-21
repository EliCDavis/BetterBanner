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
        'template': '<div ng-hide="preview.currentelyOpenedLink"><h1>Welcome to your BetterBanner</h1><h1>If you are missing anything, <a href="https://my.msstate.edu/web/home-community">click here to return to regular Banner</a>.</h1></div><iframe ng-show="preview.currentelyOpenedLink" flex src="{{preview.currentelyOpenedLink}}"></iframe>',
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
