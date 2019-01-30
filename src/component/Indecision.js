import React, { Component } from 'react';
import Header from './Header';
import Action from './Action'; 
import Addoptions from './Addoptions'; 
import Options from './Options';
import Counter from '../playground/counter';
import Visibility from '../playground/build_visibility';
import OptionalModal from './OptionModal';


export default class Indecision extends React.Component {  
  
  constructor(props){
    super(props); 
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this); 
    this.handleDeleteOption = this.handleDeleteOption.bind(this); 
    this.handleAddOption  = this.handleAddOption.bind(this); 
    this.handlePick = this.handlePick.bind(this);
    //this.clearSelectedOption = this.selectedOption.bind(this);
    this.state = {
      options: [ ], 
      selectedOption : undefined
    }
    console.log(this.state.options);
  }

  componentDidMount() {
    console.log(this.state.options);
    try{
      const json = localStorage.getItem('options'); 
      const options = JSON.parse(json); 
      console.log("COMPONENT DID MOUNT", options); 
      if(options){
        this.setState(() => ({
          options
        }))
      }
    }catch (e) {

    }

  }

  componentDidUpdate (prevProps , prevState){
    if (!!prevProps.option){
      if (prevState.options.length !== this.state.actions.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options' , json); 
        console.log('save data'); 
      }
    } else {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options' , json); 
    }
  }

  componentWillUnmount (){
    console.log('Component WILL UNMOUNT'); 
  }

  handleDeleteOptions = () => {
    this.setState(() => ({options : []}))
  }

  handleDeleteOption = (optionToRemove)  => {

    this.setState((prevState) => ({
      options : prevState.options.filter((option) => {
        return optionToRemove !== option; 
      })
    }))
  }

  clearSelectedOption = () => {
    this.setState(() =>({
      selectedOption : undefined
    }))
  }
  
  handlePick = () => {
    
    const randomNum = Math.floor(Math.random() * this.state.options.length); 
    const option = this.state.options[randomNum]; 
    
    this.setState(() => ({
      selectedOption : option
    }))

  }

  handleAddOption = (option) => {

    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists '; 
    } 

    this.setState((prevState) => ({options : prevState.options.concat([option])}));
    
  /*   this.setState((prevState)=> {
      return {
        options : prevState.options.concat([option])
      }
    }) */
  }

  render() {

    const title  = 'Indencision'; 
    const subtitle = 'Put your life in the hands'; 
    //const options = ; 

    return (
      <div>
        <Header title={title} subtitle={subtitle}></Header>
        <Action hasOptions={this.state.options.length > 0}
                handlePick= {this.handlePick}
        /> 
        <Addoptions 
            handleAddOption = {this.handleAddOption}
        />

        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}

        ></Options>
        
        <Visibility/>
        <Counter/>
        <OptionalModal
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.clearSelectedOption}
        
        />
      </div>
    );
  }
}


