angular.module('starter.services', ['ngResource'])

.factory('Music', function(/*$http*/$resource) {
	/*return {
		getMusics: function(){
			return $http.get('http://chillup.herokuapp.com/musics.json''http://jsonplaceholder.typicode.com/users''https://randomuser.me/api/?results=10').then(function(response){
				return response.data;
			});
		}
	}*/
	//return $resource('http://jsonplaceholder.typicode.com/users');
	//return $resource('http://chillup.herokuapp.com/musics');
	//return $resource('http://localhost:3000/musics/:musicId');
	return $resource('http://localhost:3000/musics/:musicId.json');
	//return $resource('http://chillup.herokuapp.com/musics.json');


})

.factory('Wake', function(/*$http*/$resource) {
	return $resource('http://localhost:3000/musics/:musicId/wake.json')
});

