
module.exports = IframeOnLoad;

//http://stackoverflow.com/questions/15882326/angular-onload-function-on-an-iframe

function IframeOnLoad() {
    return {
        scope: {
            callBack: '&iframeOnload'
        },
        link: function (scope, element, attrs) {
            element.on('load', function () {
                return scope.callBack();
            });
        }
    };
}