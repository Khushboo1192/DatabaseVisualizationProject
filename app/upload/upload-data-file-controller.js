(function(){
    angular.module('TimeWaste')
.controller('UploadFileController',['Upload','$scope', '$state', '$http',
                                    function(Upload,$scope,$state,$http){
      $scope.user = JSON.parse(localStorage['User-Data']) || undefined;
                                
                $scope.$watch(function(){
                    return $scope.file
                    
                }, function (){
                   $scope.upload($scope.file); 
                });
                                
                                                
                $scope.upload = function (file) {
                    if (file){
                        Upload.upload({
                            url: '/api/upload/uploadDataFile',
                            method: 'POST',
                            data: {userId: $scope.user._id},
                            file: file
                        }).progress(function(evt){
                            console.log("firing");
                        }).success(function(data){
                            
                        }).error(function(error){
                            console.log(error);
                        })
                    }
                };
                }]);
}());
