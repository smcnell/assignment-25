import React from 'react'
import Backbone from 'backbone'
import {ACTIONS} from './actions.js'

export const NewChirpComponent=React.createClass({

  _handleNewChirp: function(evt){
		evt.preventDefault();
    let formValsObj={}
    let formEl=evt.target;
    if (formEl.inputMessageEl.value.length > 140){
      alert("Chirp may not be longer than 140 characters")
      msg: ""
    } else {
    formValsObj= {
      msg: formEl.inputMessageEl.value
    }
    formEl.inputMessageEl.value=""
}
    // console.log(formValsObj)
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
