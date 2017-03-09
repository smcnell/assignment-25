import React from 'react'
import Backbone from 'backbone'
import {ACTIONS} from './actions.js'

export const NewChirpComponent=React.createClass({

  getInitialState: function(){
    return {
      showAlert: false
    }
  },
  _removeModal: function(){
    this.setState({showAlert: false})

  },
  _renderAlert: function(){
    if(this.state.showAlert){
      return(
        <div className="modal-wrapper" onClick={this._removeModal}>
          <div className="modal">
            <h1>Sorry</h1>
            <p>Chirp may not be longer than 140 characters</p>
          </div>
        </div>
      )
    }
  },

  _handleNewChirp: function(evt){
		evt.preventDefault();
    let formValsObj={}
    let formEl=evt.target;
    if (formEl.inputMessageEl.value.length > 140){
      // alert("Chirp may not be longer than 140 characters")
      // msg: ""
      this.setState({showAlert: true})
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
      {this._renderAlert()}
      <form onSubmit={this._handleNewChirp}>
        <textarea className="chirpInput" type="text" className="form-control" name="inputMessageEl"  />
        <br/>
        <button className="chirpButton" type="submit">Chirp This</button>
      </form>
    </div>
  )


}



})
