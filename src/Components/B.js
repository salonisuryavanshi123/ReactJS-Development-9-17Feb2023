//1. Import Area
import React,{ Component } from "react";
import C from "./C";

//2. Class Defination Area
//Lets create another component
export class B extends Component{
    //1. Properties
  
    //2. Constructor
  
    //3. Methods
    //Every class component must have render method
    render(){
      return (
               <React.Fragment>
                    <div>Suryavanshi {this.props.data3}</div>
                    <C data4={this.props.data3}></C>
               </React.Fragment>
      );
    }
   }

//3. Export Area