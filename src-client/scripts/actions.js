import Backbone from 'backbone';
import {ChirpModel, ChirpCollection} from './models/model-chirps.js'
import {STORE} from './store'
import {UserModel} from './models/model-user.js'

export const ACTIONS = {
	saveNewChirp: function(userFormEntry){
		let newChirpInstance = new ChirpModel()
		newChirpInstance.set(userFormEntry)
		newChirpInstance.save().then(function(serverRes){
			// console.log(serverRes)
			ACTIONS.fetchAllChirps()
		})
	},

	fetchAllChirps: function(){

		let chirpsCollInstance = new ChirpCollection()
		chirpsCollInstance.fetch().then(function(serverRes){
			STORE.setStore('chirpList', serverRes)
			console.log('new and old data', serverRes)
		})
	},

	changeCurrentNav: function(selectedAppRoute, urlRoute){
	STORE.setStore('currentNavRoute', selectedAppRoute)
	window.location.hash = urlRoute
},

registerNewUser: function(newUserInfoObj){
	UserModel.register(newUserInfoObj).then(function(serverRes){
		ACTIONS.changeCurrentNav('SHOUTS', 'shouts')
	})
},

loginUser: function(usr, pw){
	UserModel.logIn(usr, pw).then(function(serverRes){
		// console.log('authenticated user!!!', serverRes)
		STORE.setStore('currentUser', serverRes )
		ACTIONS.changeCurrentNav('SHOUTS', 'shouts')
	})
}
}
