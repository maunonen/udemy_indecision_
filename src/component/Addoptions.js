import React, { Component } from 'react';

export default class Addoptions extends Component {  
  
  constructor(props){
    super(props); 
    this.state = {
      error : undefined
    }

  }

  handleAddOption = (e) => {
    e.preventDefault(); 
    const option = e.target.elements.option.value.trim(); 
    const error = this.props.handleAddOption(option); 

    this.setState(()=> ({error}))

    if (!error){
      e.target.elements.option.value = ''; 
    }
  /*   this.setState(() => {
      return { error }
    }) */
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <h1>ADD options Component</h1>
        <form onSubmit={this.handleAddOption}>
          <input type = "text" name="option" />
        </form>
      </div>
    );
  }
}


