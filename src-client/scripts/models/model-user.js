const UserModel = Backbone.Model.extend({
	initialize: function(){

	},
	urlRoot: '/api/users',
	idAttribute: '_id'
})

UserModel.logIn =  function(username, pw){
	if(typeof username !== 'string' || typeof password !== 'string'  ){ throw new Error(`UserModel.login() must receive string 2 string paramaters for username and password`) }

	return $.ajax({
		method: 'POST',
		data: JSON.stringify({ username: username, password: pw}),
		headers: {
			'Content-Type': 'application/json'
		},
		url: '/auth/login'
	})
}

UserModel.register =  function(data){
	if(typeof data !== 'object' ){ throw new Error(`UserModel.register() must receive an object`) }
	if(typeof data.username === 'undefined' || typeof data.password === 'undefined'  ){ throw new Error(`UserModel.register() must receive an object w/ username + password`) }

	return $.ajax({
		method: 'POST',
		data: JSON.stringify({ username: username, password: pw}),
		headers: {
			'Content-Type': 'application/json'
		},
		url: '/auth/register'
	})
}

UserModel.getCurrentUser =  function(){
	return $.ajax({
		method: 'GET',
		data: JSON.stringify({ username: username, password: pw}),
		headers: {
			'Content-Type': 'application/json'
		},
		url: '/auth/current'
	})
}

UserModel.logOut =  function(){
	console.log('logging in!')
	return $.ajax({
		method: 'GET',
		url: '/auth/logout'
	})
}
