import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone';
import {HomeView} from './home-view.js'
import {ChirpModel, ChirpCollection} from './models/model-chirps.js'

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},

	routes: {
		'' : 'showHome'
	},

	showHome: function(){
		ReactDOM.render(<HomeView />, document.querySelector('#app-container'))
	}

})

new AppRouter()
