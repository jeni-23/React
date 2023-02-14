import React,{useState} from 'react';
import './projectItem.css'

const ProjectItem=({title,technology,desc,github,image})=>{
	const [show,setShow]=useState(false);
	return(
		<a href	={github}>
			<div className='projectitem' onMouseEnter={()=>setShow(true)}
			onMouseLeave={()=>setShow(false)}>
				{show ?(
					<div className="prject_content">
						<h4>{title}</h4>
						<h6>{technology}</h6>
						<p>{desc}</p>
					</div>):(

					<img src={image}alt=''/>


					)}
			</div>
		</a>

		)
}
export default ProjectItem;