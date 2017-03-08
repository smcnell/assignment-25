export const STORE = {
	_data: {
		chirpList: [],
	},

	getStoreData: function(){
		return this._data
	},

  setStore: function(storeProp, payload){
  this._data[storeProp] = payload
  this._settingComponents()
},

onStoreChange: function(cb){
  this._settingComponents = cb
}
}
