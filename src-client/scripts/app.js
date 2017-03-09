import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone';
import {HomeView} from './home-view.js'
import {ChirpModel, ChirpCollection} from './models/model-chirps.js'
import {WelcomeView} from './welcome-view.js'
import {LoginView} from './login-view.js'
const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},

	routes: {
		'login': 'showLogin',
		'home' : 'showHome',
		'': 'showWelcome'

	},

	showHome: function(){
		ReactDOM.render(<HomeView />, document.querySelector('#app-container'))
	},



	showWelcome: function(){
		ReactDOM.render(<WelcomeView />, document.querySelector('#app-container'))
	},


	showLogin: function(){
		ReactDOM.render(<LoginView/>, document.querySelector('#app-container'))
	}

	})

new AppRouter()
