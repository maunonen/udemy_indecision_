import React, { Component } from 'react';

export default class Header extends React.Component {  
    
  

    render() {
    return (
      <div>
        <h1>Component Header {this.props.title}</h1>
        <h2>Subtitle {this.props.subtitle}</h2>
      </div>
    );
  }
}


