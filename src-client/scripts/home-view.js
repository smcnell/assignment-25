import React from 'react'
import {NavComponent} from './nav-component.js'
import {NewChirpComponent} from "./new-chirp-component.js"
import {ExistingChirps, EachChirp} from "./existing-chirp-component.js"
import {STORE} from './store.js'
import {ACTIONS} from './actions.js'


export const HomeView = React.createClass({
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
        <NavComponent/>
        <NewChirpComponent/>
        <ExistingChirps chirpsListOfData={this.state.chirpList}/>

			</div>
		)
	}
})
