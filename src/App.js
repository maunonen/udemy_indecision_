import React, { Component } from 'react';
//import User from './playground/stateless_component';
import Indecision from './component/Indecision';


class App extends React.Component {
  render() {
    return (
      <div className="App">
       <Indecision></Indecision>
      <User testProps="Alex"
            age='36'
      />
      <Layout/>
      </div>
    );
  }
}

const Layout = () => {
  return (
    <div>
      <p>header</p>
      <p>footer</p>
    </div>
  )
}


const User = (props) => {

  return (
      <div>
          <h1>STATELESS COMPONENT </h1>
          <p>Name : {props.testProps} </p>
          <p>Age : {props.age}</p>
      </div>
  )
  }



export default App;
