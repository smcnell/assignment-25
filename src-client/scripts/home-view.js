import React from 'react'
import {NavComponent} from './nav-component.js'
import {NewChirpComponent} from "./new-chirp-component.js"
import {ExistingChirps} from "./existing-chirp-component.js"
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
		console.log('from <HomeView/>', this.props.shoutOutsListData)
		return (

			<div className="container">
        <NavComponent/>
        <NewChirpComponent/>
        <ExistingChirps chirpsListOfData={this.state.chirpsList}/>

			</div>
		)
	}
})
