
import React, { Component } from 'react';

export default class ArrowFunctions2 extends Component {




 render() {



    //let numbers1 = [2,3,3,5,5,6]; 
    //const multiplyBy = 2; 


    const multiplier = {
        numbers : [2,3,3,5,5,6] ,
        multiplyBy : 3, 
        multiply () {
            return this.numbers.map((number)=> number * this.multiplyBy); 
            //return multiply; 
        }
    }
    console.log(multiplier.multiply()); 

    //const multiply = (numbers) => numbers.map((number)=> number * multiplyBy); 

    console.log('Multiply: '); 
    //console.log(multiply(numbers1));  

    // arguments don't have access to arguments variable 

    const user = {
        name : 'Andrew' ,
        cities : ['Phililodelfia', 'New York', 'Dublin'], 
        
        // es5 bounded to object if used arrow functions insteadgt we can't access this in user object 

        printPlacesLived () {

            const   cityMessages = this.cities.map((city) => city); 
            
            return cityMessages; 

           /*  this.cities.forEach(element => {
                console.log(element); 
            }) */
       /*      console.log(this.name); 
            console.log(this.cities);  */
        }

        
    }
    console.log(user.printPlacesLived()); 

   return (
       <h1>Const let {} </h1>
   );
 }
}


