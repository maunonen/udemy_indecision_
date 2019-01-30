import React, { Component } from 'react';

export default class Option extends React.Component {  

  constructor(props){
    super(props)
  }


  render() {
    return (
      <div>
        <p>Option : {this.props.optionText}</p>
        <button 
            onClick={
              (e) => {
                this.props.handleDeleteOption(this.props.optionText)
              }
              }
        
      >Remove</button>

      </div>
    );
  }
}


