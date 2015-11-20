angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {

    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MusicsCtrl',function($scope, Music){

 /* musicService.getMusics().then(function(musics){
    $scope.musics = musics;
  });
*/
$scope.musics = Music.query();

})


.controller('MusicCtrl', function($scope, $stateParams, Music, Wake, $ionicModal, 
  $timeout, $location, $ionicPopup, $rootScope) {
    $scope.music = Music.get({musicId: $stateParams.musicId});

    $scope.data={};

    // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/wake.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeWake = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.wake = function() {

    $scope.modal.show();
  };


  $scope.doWake = function() {
    //console.log('Doing login', $scope.loginData);
    var theWake = new Wake({waker_name : $scope.data.wakername,
          wakee_name : $scope.data.wakeename});

    theWake.$save();

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
   /* $timeout(function() {
      $scope.closeLogin();
    }, 1000);*/
  };




/*  // Perform the login action when the user submits the login form
  $scope.doWake = function() {
    //console.log('Doing login', $scope.loginData);
    var user_session = new Wake({ user: $scope.data });
  user_session.$save(
    function(data){
      window.localStorage['waker_name'] = data.wakername;
      window.localStorage['wakee_name'] = data.wakeename;
      $location.path('/tab/dash');
    },
    function(err){
      var error = err["data"]["error"] || err.data.join('. ')
      var confirmPopup = $ionicPopup.alert({
        title: 'An error occured',
        template: error
      });
    }
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  */

});
