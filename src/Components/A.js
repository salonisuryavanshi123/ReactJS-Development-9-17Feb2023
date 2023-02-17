//1. Import Area

import { B } from "./B";


//2. Function Defination Area
//Lets create a components

// Fat Arrow Function
let A = props =>{
    let data1='data1';
    console.log(props);
    //Every function return something
    return (
             <>
                <div>
                    Parent {data1} {props.name} {props.children} {props.surname}
                    <div>Child</div>
                </div>
                <B data3={props.name}></B>
             </>
           )
  }
//3. Export Area
//3.1 Default Export
export default A;

//3.2 Named Export