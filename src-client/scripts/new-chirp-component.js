import React from 'react'
import Backbone from 'backbone'
import {ACTIONS} from './actions.js'

export const NewChirpComponent=React.createClass({

  _handleNewChirp: function(evt){
		evt.preventDefault();
    let formEl=evt.target;
    console.log(formEl)
    let formValsObj= {
      msg: formEl.inputMessageEl.value
    }
    console.log(formValsObj)
    ACTIONS.saveNewChirp(formValsObj)
    },




render: function(){

  return(
    <div className="newChirp-container">
      <form onSubmit={this._handleNewChirp}>
        <input className="chirpInput" type="text" className="form-control" name="inputMessageEl"  />
        <button className="chirpButton" type="submit">Chirp This</button>
      </form>
    </div>
  )


}



})
