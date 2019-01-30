import React, { Component } from 'react';

class Unit3 extends Component {

  constructor(props){
    super(props)

    this.state = {
        title : 'Alex', 
        subtitile : 'Some subtitle' ,
        options : [], 
        visible : false
    }
  }

  
  onFormSubmit = (e) =>{
     e.preventDefault(); 
    console.log('Submit');
    const  option = e.target.elements.option.value; 
    if (option){
      this.setState( 
        { options: [
          ...this.state.options, 
          option
        ]}); 
        e.target.elements.option.value = "";   
    }
  }

  onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length); 
    const option = this.state.options[randomNum]; 
    alert(option); 
  }; 

  removeAll = ()=>{
    this.setState ({
      options : []
    }); 
  }
  onVisible = () => {
    
      this.setState ({
        visible : !this.state.visible
      })
      console.log(this.state.visible); 
    
  }
  
  render() {
    return (
      <div className="App">
      
        <h1>{ this.state.title }</h1>
        {this.state.subtitile && <p>{this.state.subtitile}</p>}
        <button onClick={this.onVisible}>{this.state.visible ? 'Hide' : 'Show' }</button>
      {this.state.visible ? (<h1>True</h1>) : (<h1>False</h1>) } 
        <p> {this.state.options.length > 0 ? 'Here are your options ' : 'No options'}</p>
        <p>{this.state.options.length}</p>
        <button disabled={this.state.options.length === 0} onClick={this.onMakeDecision}>What should i do</button>
          <ol>
          {this.state.options.map((option, optID)=> <li key={optID} >{option}</li>)}
          </ol>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" name='option'/>
            <button>Add Option</button>
            <button onClick={this.removeAll}>Remove</button>
            {
              [<p>45</p>, 99, 98 ,97 ]
            }
          </form>
        
      
      </div>
    );
  }
}

export default App;
