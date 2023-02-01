import {React,useState} from "react";

const Counter =()=>{
	const [value,setValue]=useState(0);
	 const increase = () => {
    setValue(counter => counter + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setValue(counter => counter - 1);
  };
 
  //reset counter 
  const reset = () =>{
    setValue(0);
    
  }

	return(
<>
<div>
	<h1> Counter</h1>
<h5>{value}</h5>
	<button type="button" class="btn btn-info" id='add' onClick={increase}>Add</button>
	<button type="button" class="btn btn-warning" id='add' onClick={decrease}>Sub</button>
	<button type="button" class="btn btn-danger" id='add' onClick={reset}>Reset</button>
</div>
</>

		)
}
export default Counter
