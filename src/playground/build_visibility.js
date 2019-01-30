import React, { Component } from 'react';


export default class Visibility extends React.Component {  
    
  constructor(props){
    super(props)
    //this.handleToogleVisibility = this.handleToogleVisibility.bind(this); 
    this.state = {
        visible : false
    }
  }


    handleToogleVisibility = () => {
        this.setState((prevState) => {
            return {
                visible : !prevState.visible
            }
        })
    }
  
    render() {
    return (
      <div>
        {this.state.visible ? (<h1>Visible</h1>) : this.state.visible}
        <button onClick={this.handleToogleVisibility}>{this.state.visible ? 'Hide datails' : 'Show detail'  }
        </button>
        
        
      </div>
    );
  }
}


