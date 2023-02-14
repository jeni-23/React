import React from 'react';
import {Link} from 'react-scroll';
import './header.css';


 const Header=()=>{
  return(
<div className="header">
<div className="header_left">
    <h1>Develop<span>er</span> </h1>
</div>
<div className="header_right">
   <Link to="about" smooth={true} duration={700}>
       <h6>About Me</h6>
   </Link> 
   <Link to="skills" smooth={true} duration={700}>
       <h6>Skills</h6>
   </Link>
   <Link to="projects" smooth={true} duration={700}>
       <h6>Projects</h6>
   </Link>
   
   <Link to="contact" smooth={true} duration={700}>
       <h6>Contact</h6>
   </Link>
   <h6 className="header_rightButton">Join With me</h6>
</div>
 

</div>
    )

} 
export default Header;



