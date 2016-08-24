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
        'template': '<div style="margin:5px;" layout="row" layout-align="center center"><md-button class="md-primary md-raised" ng-click="myCourses.openMyCoursesSettings()"><i class="material-icons" style="vertical-align:middle;">settings</i></md-button><md-button class="md-primary md-raised" ng-repeat="link in myCourses.courses" ng-click="openLink(link.url)" ng-bind="link.name"></md-button></div>',
        'controllerAs': 'myCourses',
        'controller': /*@ngInject*/ function (MyCourses, $mdDialog) {
            
            var self = this;
            
            self.courses = null;
            
            MyCourses.subscribeToCourses(function(courses) {
                self.courses = courses;
            });
            
            self.openMyCoursesSettings = function() {
                $mdDialog.show({
                    controller: /*@ngInject*/function($scope, $mdDialog){
                        
                        $scope.decipheredClasses = [];
                        
                        $scope.IframeLoaded = function(){
                            
                            var iframe = document.getElementById('hiddenMycourses');
                            
                            var tableBody = iframe.contentWindow.document.getElementById('coursesTable').getElementsByTagName('TBODY')[0];
                            
                            var foundClasses = [];
                            
                            for(var i = 0; i < tableBody.children.length; i ++) {
                                var link = tableBody.children[i].getElementsByTagName('TD')[0].getElementsByTagName('A')[0];
                                foundClasses.push({
                                    name: link.innerText.replace(/\s*\(.*\)/,''),
                                    url: link.href
                                });
                            }
                            
                            $scope.decipheredClasses = foundClasses;
                            $scope.$apply();
                            
                        };
                        
                        $scope.saveChanges = function() {
                            $mdDialog.hide();
                        };
                        
                        $scope.discardChanges = function() {
                            $mdDialog.hide();
                        };
                        
                    },
                    template:   "<iframe style='display:none;' iframe-onload='IframeLoaded()' id='hiddenMycourses' src='https://my.msstate.edu/web/home-community/classroom'></iframe>\
                                <div style='min-width:600px;min-height:300px;max-height:600px;' layout='column' layout-margin flex>\
                                    <div layout='row'>\
                                        <md-button ng-click='saveChanges()'>Save</md-button>\
                                        <md-button ng-click='discardChanges()'>Cancel</md-button>\
                                    </div>\
                                    <div layout='row' flex>\
                                        <div flex='70'>\
                                            <h3>MyCourses</h3>\
                                            <div><span ng-if='decipheredClasses.length === 0'>Loading.....</span>\
                                                <md-list-item ng-repeat='class in decipheredClasses'>\
                                                    <md-button ng-bind='class.name'></md-button>\
                                                </md-list-item>\
                                            </div>\
                                        </div>\
                                        <div flex><h3>Selected Courses</h3></div>\
                                    </div>\
                                </div>",
                    clickOutsideToClose: false
                });
            };
            
        }
    };
}
