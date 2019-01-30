import React, { Component } from 'react';
import Option from './Option';

export default class Options extends React.Component {  
    
  constructor(props){
    super(props)
  }


    render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.length === 0 && <p>Please add an option to get started</p>}
        {this.props.options.map((option, id)=>(
          <Option 
          
          key={id} 
          optionText = {option}
          handleDeleteOption  = {this.props.handleDeleteOption}

          />))}
      </div>
    );
  }
}


