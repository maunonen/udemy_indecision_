
import React, { Component } from 'react';

 export default class ConstLet extends Component {


 

  render() {

    var nameVar = 'Andrew'; 
    nameVar = 'Alex'; 
    
    // var you can redefined variable 

    var nameVar = 'Jenny'; 

    let nameLet  = 'Alex'; 
    //let nameLet = 'Alex'; 

    // Let you can redefined variable 

    // Const you can rresighned variable 

    const nameConst  = 'Alex '; 

    //nameConst = 'Jenny'; 

    // Blcock scoping 

    var fullName = 'Alex Maunonen';  

    //  Let adnd const they have block scope just valid in if block, 
    // var can be access outside if block 

    if (fullName){
        var firstname = fullName.split(' ')[0]; 
        // const firstname = fullName.split(' ')[0]; 


    }
    console.log(firstname); 

    return (
        <h1>Const let {firstname} </h1>
    );
  }
}


