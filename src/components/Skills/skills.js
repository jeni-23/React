import React from 'react';
import {Element} from 'react-scroll';
import LinearProgress from '@material-ui/core/LinearProgress';

import "./skills.css"
const Skill=()=>{
	return(
		<Element className='skillcontainer' id='skills'>
		<div className='container_img'>
			<img src='https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500' alt=''/>
		</div>
		<div className='skillcontainer_text'>
			<h2>Skill Set</h2>
			<div className='skillcontainer_skillset'>
				<h5>HTML</h5>
				<div className='slider slider1'>
					<LinearProgress variant='determinate' value={95}/>
				</div>
			</div>
			<div className='skillcontainer_skillset'>
				<h5>Css</h5>
				<div className='slider slider2'>
					<LinearProgress variant='determinate' value={85}/>
				</div>
			</div>
			<div className='skillcontainer_skillset'>
				<h5>JavaScipt</h5>
				<div className='slider slider3'>
					<LinearProgress variant='determinate' value={70}/>
				</div>
			</div>
			<div className='skillcontainer_skillset'>
				<h5>React Js</h5>
				<div className='slider slider4'>
					<LinearProgress variant='determinate' value={40}/>
				</div>
			</div>
		</div>
			
		</Element>

		)
}
export default Skill;