import logo from './logo.svg';
import './App.css';
import Counter from './Counter/counter';
import Header from './components/Header/header';
import About from './components/About/about';
import Skill from './components/Skills/skills';

// import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Header/>
     <About/>
     <Skill/> 
    
    </>
 


   
   
      
  //       <Counter/>
  //   <BrowserRouter>
   
  //     <Routes>
  //       <Route path="/" element={<Header/>} />
  //     </Routes>
   
  // </BrowserRouter>
  );
}

export default App;
