import React, { Component } from 'react';

export default class Rendering extends Component {

  
  getLocation = (userLocation) => {
    if(userLocation){
      return <p>Location {userLocation}</p>
    } 
  }; 

  render() {

    const username = 'Alexander Maunonen'; 
    const age = 36;
    const city = 'Vantaa'; 

    const userObj = {
      name : 'Alex', 
      age : 17 , 
      city : 'Vantaa' 
    }

    const objectTmp  =  {
      title : 'Alex', 
      subtitile : 'Some subtitle' ,
      options : []
    }; 



    return (
      <div className="App">
      <div>
        <h1>{ userObj.name ? userObj.name : 'Anonymous' }</h1>
        {userObj.age >= 18 && <p>Age : {userObj.age}</p>}
        {this.getLocation(userObj.city)}
      </div>
      <div>
        <p>Title {objectTmp.title}</p>

        {objectTmp.subtitile && <p>Subtitle {objectTmp.subtitile}</p>}
        <p>
        {objectTmp.options.length > 0  ? 'Here are your options '  : 'No options '}   
        </p>
      </div>
      </div>
    );
  }
}


