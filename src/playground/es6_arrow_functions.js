
import React, { Component } from 'react';

export default class ArrowFunction extends Component {

   




 render() {

    //var firstname = fullName.split(' ')[0]; 
   
    const getFirstNameShort  = (fullname) =>  fullname.split(' ')[0]; 
    const getFirstNameLong  = (fullname) =>  {
        return fullname.split(' ')[0]; 
    }

    const square = function (x) {
        return x*x; 
    }; 

    // All arrow functions are anonoymus 

    const squareArrow= (x)=>{
        return x*x; 
    }
    console.log(square(4)); 

    console.log("Arrow square" + squareArrow(4));

    console.log(getFirstNameShort('Alexander Maunonen')); 
    console.log(getFirstNameLong('Alexander Maunonen')); 

   return (
       <h1>Const let </h1>
   );
 }
}


