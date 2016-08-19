(function(){
    angular.module('TimeWaste',['ui.router','ngFileUpload'])
            .config(function($stateProvider){
            $stateProvider
                .state('signUp',{
                url: "/signup",
                templateUrl:"app/signup/signup.html",
                controller: "SignupController"
            })
              .state('editProfile', {
                url: "/edit-profile",
                templateUrl: "app/profile/edit-profile-view.html",
                controller: "EditProfileController"
            }) 
               .state('visualizeGraph',{
                url:"/visualize-graph",
                templateUrl:"/app/visualize/visualize.html",
                controller: "VisualizeGraphController" 
            })
               .state('uploadDataFile',{
                url:"/upload-file",
                templateUrl:"app/upload/upload-data-file-view.html",
                controller:"UploadFileController"
            })
              .state('#',{
               url:"/home",
               templateUrl:"app/main/main.html"    
            }) 
              .state('staticDataGraph',{
               url:"/data-graph",
               templateUrl:"/app/static-visualize/static-data-visualize.html",
               controller: "StaticDataVisualizeController" 
            })
            
        })
}()); 