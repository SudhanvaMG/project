(function() {
    'use strict';
    angular.module('ngSeedApp.controllers')
        .controller('homeController', [
                '$scope', '$http',

                function($scope, $http) {
                    $scope.title = "this is wriking";
                    $scope.data = '';
                    $scope.test = function() {
                        var user = $('#username').val();
                        $scope.test = 'hello';
                        var da = { 'dat': "working" };
                        $http({
                                method: 'POST',
                                url: 'http://fec7deee.ngrok.io/',
                                data: da
                            })
                            .success(
                                function(res) {
                                    console.log(res);
                                }
                            )
                            .error(
                                function(err) {
                                    console.log(err);
                                }
                            )
                    }
                }
            ],


        );

}());