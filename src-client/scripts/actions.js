import Backbone from 'backbone';
import {ChirpModel, ChirpCollection} from './models/model-chirps.js'
import {STORE} from './store'

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
	}
}
