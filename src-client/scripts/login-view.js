import React from 'react'
import {NavComponent} from './nav-component.js'
import {NewChirpComponent} from "./new-chirp-component.js"
import {ExistingChirps, EachChirp} from "./existing-chirp-component.js"
import {STORE} from './store.js'
import {ACTIONS} from './actions.js'
import {WelcomeComponent} from './welcome-component.js'
import {LoginComponent} from './login-component.js'


export const LoginView = React.createClass({
	getInitialState: function(){
    return STORE.getStoreData()
  },

  componentDidMount:function(){
    let component=this;

    STORE.onStoreChange(function(){
      component.setState(STORE.getStoreData() )
    })

    ACTIONS.fetchAllChirps()
  },



	render: function(){
		console.log('data??', this.props.chirpsListOfData)
    console.log(this.state.chirpList.length)
if (this.state.chirpList.length < 1){
  console.log("executing")
return <p> loading </p>
}
		return (

			<div className="container">
        <LoginComponent/>

			</div>
		)
	}
})
