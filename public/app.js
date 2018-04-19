(function () {
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyD1Jl31W6sBZ-kJJ85fLJR-JMa5CUdwhIc",
		authDomain: "myngfire.firebaseapp.com",
		databaseURL: "https://myngfire.firebaseio.com",
		projectId: "myngfire",
		storageBucket: "myngfire.appspot.com",
		messagingSenderId: "103560116326"
	};
	  firebase.initializeApp(config);
	// body...
	angular
		.module('myapp', ['firebase'])
		.controller('MyCtrl', function ($firebaseObject) {
			// Mycontroller...
			const rootRef = firebase.database().ref().child('angular');
			const ref = rootRef.child('object');
			this.object = $firebaseObject(ref);

		});

}());