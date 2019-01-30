import React, { Component } from 'react';

export default class Counter extends Component {

  constructor(props) {
    super(props);
    
    this.state  = {
      counter : 0
    }
  }

  componentDidMount(){
    
    const stringCounter = localStorage.getItem('counter'); 
    const counter = parseInt(stringCounter, 10); 

    if (!isNaN(counter)){
      this.setState(() => ({counter}))
    }

  }

  componentDidUpdate (prevProps, prevState){
    if (prevState.counter !== this.state.counter){
      localStorage.setItem('counter', this.state.counter);
    }
    
  }
  
   addOne = ()=> {
    // this.setState({counter : this.state.counter+1})
    this.setState( (prevState) => {
        return {counter : prevState.counter + 1} 
      }
    )
  }

   minusOne = ()=> {
    //this.setState({counter : this.state.counter-1})
    this.setState ((prevState) => {
      return { counter : prevState.counter -1 }
    })
  }

   reset = ()=> {
    //this.setState({counter : 0})
    this.setState(() => {
      return {
        counter : 0
      }
    })

  }

  render() {

    return (
      <div className="App">
      <div>
      <div>
      <h1>Count: {this.state.counter}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>reset</button>
    </div>
      </div>
    
      </div>
    );
  }
}


