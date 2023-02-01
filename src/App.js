import logo from './logo.svg';
import './App.css';
import Counter from './Counter/counter';
import Header from './components/Header/header';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
   
      
        // <Counter/>
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Header/>} />
      </Routes>
   
  </BrowserRouter>
  );
}

export default App;
