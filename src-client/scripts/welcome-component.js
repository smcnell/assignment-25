import React from 'react'
import {ACTIONS} from './actions.js'
import {UserModel} from './models/model-user.js'

export const WelcomeComponent=React.createClass({

  _handleSignup: function(evt){
		evt.preventDefault();
    console.log(evt.target);
    let formEl = evt.target
    let objToSave = {
      username: formEl.userEl.value ,
      password: formEl.passwordEl.value ,
      imgURL: formEl.imgInputEl.value
}
ACTIONS.registerNewUser(objToSave)

    window.location.hash = "/home"

	},

  _handleLogin: function(evt){
		evt.preventDefault();

    window.location.hash = "/login"
	},

  render: function(){
    return (
      <div className= "nav-container">
        <img className="logo-pic" src= "https://camo.githubusercontent.com/1c8f35698f41f6df2b16bf2e82f68d1fa9dac448/68747470733a2f2f7469792d6c6561726e2d636f6e74656e742e73332e616d617a6f6e6177732e636f6d2f34323666373437352d63686972702d6c6f676f2e706e67"/>
        <h1 className="title">Chirp</h1>
        <img className="logo-pic" src= "http://i64.tinypic.com/xckxzm.png"/>
        <div className="buttons-container">
          <a className= "my-buttons" href="">
            <button onClick={this._handleLogin}>Log In</button>
          </a>
        </div>
        <div className="my-form">
          <h1>Sign Up Now </h1>
          <form onSubmit={this._handleSignup}>
          <div className="form-section">
            <h4>Username </h4>
    		    <input type="text" className="form-control" name="userEl"/>
          </div>

          <div className="form-section">
    	      <h4>Password </h4>
    	      <input type="text" className="form-control" name="passwordEl"/>
          </div>


          <div className="form-section">
    	      <h4>Your face</h4>
    	      <input type="text" className="form-control" name="imgInputEl" ref="previewImgEl" />
          </div>
    	      <br/>





    	      <br/>
    	      <button className="submit-button" type="submit">Sign Up</button>
    			</form>
        </div>


      </div>
    )
  }
})
