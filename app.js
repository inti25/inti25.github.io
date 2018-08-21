var app = angular.module("myApp", []);
app.directive('ngRepeatFinishRender',['$timeout', '$parse', function ($timeout, $parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinishRender');
                    if(!!attr.ngRepeatFinishRender){
                        setTimeout(function () {
                            $parse(attr.ngRepeatFinishRender)(scope);
                        },50);
                    }
                });
            }
        }
    }
}])
