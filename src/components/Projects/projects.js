  import React from 'react';
import {Element} from 'react-scroll';
import './projects.css'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import ProjectItem from '../Projectitem/projectItem';
		


const Project=()=>{
	const projects=[
{
		title:"NPM",
		technology:" REACT ",
		desc:"I have published Npm for feedback form",
		github:"https://www.npmjs.com/~modern_feedback_form",
		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxiY3wOWxq5t2xguD00vvjZYnuGVo6xeLxeA&usqp=CAU"
	},

	{
		title:"Web Design",
		technology:"HTML |CSS",
		desc:"I created a Shopping and College website using HTML and CSS",
		github:"https://github.com/jeni-23/Staticwebsite",
		image:"https://www.seekpng.com/png/full/141-1415544_html-css-projects-small-logo-on-html.png"
	},
	
	{
		title:"Web Design",
		technology:"HTML |CSS",
		desc:"I  had created a Shopping and College website using HTML and CSS",
		github:"https://github.com/jeni-23/Grocery",
		image:"https://www.seekpng.com/png/full/141-1415544_html-css-projects-small-logo-on-html.png"
	},
	{
		title:"Car booking management System",
		technology:"BOOTSTRAP | REACT | REACT HOOKS |REDUX | LAZY LOADING",
		desc:"I created a car booking management system. In my Project, I had been implementing the basic concept in react for example React Hooks, Lazy loading, Routing",
		github:"https://github.com/jeni-DT/MATC",
		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wh_vrysQFY_0CkcD-e-lYPPHLvsTaXqIGA&usqp=CAU"
	},
	{
		title:"Validation Form",
		technology:"BOOTSTRAP | REACT | REACT HOOKS ",
		desc:"I created a SignUp Form with validation",
		github:"https://github.com/jeni-23/Validation",
		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wh_vrysQFY_0CkcD-e-lYPPHLvsTaXqIGA&usqp=CAU"
	},
	{
		title:"Car booking management System",
		technology:"BOOTSTRAP | REACT | REACT HOOKS |REDUX | LAZY LOADING",
		desc:"I had created a login page use react library redux and also implemented a lazy loading in my project",
		github:"https://github.com/jeni-23/Redux-login",
		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wh_vrysQFY_0CkcD-e-lYPPHLvsTaXqIGA&usqp=CAU"
	},
	{
		title:"CRUD",
		technology:"BOOTSTRAP | REACT | REACT HOOKS | JSON SERVER",
		desc:"I had created a CRUD application and i used json server ",
		github:"https://github.com/jeni-23/CRUD",
		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wh_vrysQFY_0CkcD-e-lYPPHLvsTaXqIGA&usqp=CAU"
	},
	
	]
	return(
<Element className='projectcontainer' id='projects'>
	<h1>Projects</h1>
<div className='projectcontainer_projects'>
{
	projects.map((item,index)=>{
		return(
			<ProjectItem key={index} title={item.title} technology={item.technology} desc={item.desc} github={item.github} image={
				item.image}
			 />

			)
	})
}
	

	
</div>
 
</Element>
		)
}
export default Project;