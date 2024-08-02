import './App.css';
import About from './components/About';
import Body from './components/Body';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Projectedroute from './components/Protectedroute/Projectedroute';

function App() {
  return (
    <div>
      <div className='p-2'>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
        <a href='/login'>LogIn</a>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route element={<Projectedroute />}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
