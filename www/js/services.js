angular.module('starter.services', ['ngResource'])

.factory('musicService', function(/*$http*/$resource) {
	/*return {
		getMusics: function(){
			return $http.get('http://chillup.herokuapp.com/musics.json''http://jsonplaceholder.typicode.com/users''https://randomuser.me/api/?results=10').then(function(response){
				return response.data;
			});
		}
	}*/
	return $resource('http://jsonplaceholder.typicode.com/users');
		
	
});
//links
//'http://chillup.herokuapp.com/musics.json'
//'http://jsonplaceholder.typicode.com/users'
//'https://randomuser.me/api/?results=10'
