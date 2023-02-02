import React from 'react';
import {Element} from 'react-scroll';
import './about.css';
// import './content.css';
import Content from '../Aboutcontent/content';

const About=()=>{
	return(
<Element name='about' className='about_container'>
	<Content/>
		
	</Element>
		)

}
export default About;