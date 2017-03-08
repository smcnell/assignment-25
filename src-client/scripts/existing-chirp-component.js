import React from 'react'


export const ExistingChirps = React.createClass({

  _makeChirpComponents: function(listOfChirps){

    let arrayOfChirpComponents= listOfChirps.map(function (eachChirpObj, i){

      return (
        <EachChirp chirpData={eachChirpObj} key= {i}/>


      )
    }).reverse()


    return arrayOfChirpComponents
    console.log(arrayOfChirpComponents)
  },


  render: function(){
let allTheChirps=this.props.chirpsListOfData
console.log("all the chirps", allTheChirps)
    return (
    <div>
      <EachChirp/>
      {this._makeChirpComponents(allTheChirps)}
    </div>
    )
  }
})





  export const EachChirp= React.createClass({


    render: function(){
      console.log(this.props.chirpData)
      return (

   <div>
     <div className="oneChirp">
      <h1 className="chirpUser"> User </h1>
      <h2 className="chirpMessage"> message</h2>
     </div>



  </div>
   )
 }

})
