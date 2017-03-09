import React from 'react'

export const LoginComponent=React.createClass({

  _handleSignIn: function(evt){
		evt.preventDefault();

    window.location.hash = "/home"
	},

  render: function(){
    return (
      <div className= "nav-container">
        <img className="logo-pic" src= "https://camo.githubusercontent.com/1c8f35698f41f6df2b16bf2e82f68d1fa9dac448/68747470733a2f2f7469792d6c6561726e2d636f6e74656e742e73332e616d617a6f6e6177732e636f6d2f34323666373437352d63686972702d6c6f676f2e706e67"/>
        <h1 className="title">Chirp</h1>
        <img className="logo-pic" src= "http://i64.tinypic.com/xckxzm.png"/>

        <div className="my-form">
          <h1>Welcome Back!  </h1>
          <form onSubmit={this._handleSignIn}>
          <div className="form-section">
            <h4>Username </h4>
    		    <input type="text" className="form-control" name="theMsgEl"/>
          </div>
    	      <hr/>
          <div className="form-section">
    	      <h4>Password </h4>
    	      <input type="text" className="form-control" name="msgFromEl"/>
          </div>
    	      <hr/>







    	      <br/>
    	      <button className="submit-button" type="submit">Sign In</button>
    			</form>
        </div>


      </div>
    )
  }
})
