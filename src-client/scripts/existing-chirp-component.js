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
      console.log(this.props.chirpData, 'chirp data')
      let component=this
      if(this.props.chirpData === undefined){
        return <h1> </h1>
      }else{
        return (

          <div>
            <div className="one-chirp">
              <h1 className="chirp-user"> User </h1>
              <h2 className="chirp-message">{this.props.chirpData.msg} </h2>
            </div>

          </div>
        )
      }
    }

})
