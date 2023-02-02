import React from 'react';
import  {Link} from 'react-scroll';
import "./content.css"
 
const Content=()=>{
 	return(
 		<>
<div className="content">
	<div className='content_container'>
	<h1>Ms.Jeni</h1>
	<p>React FrontEnd Developer </p>
	<a> 
	<button className='content_downloadBtn'>DownLoad CV</button>
	</a>
	<Link to='projects' smooth ={true} duration={500}>
		<button className="content_projectBtn">Projects  
		</button>
	</Link>
		
	</div>
</div>
</>
 		)

 }
 export default Content;
 

