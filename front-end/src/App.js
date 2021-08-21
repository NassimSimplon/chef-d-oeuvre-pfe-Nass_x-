 import './App.css';
import Home from './pages/Home';
import Navbar from './shared/Navbar';
import React from 'react'
import Footer from './shared/Footer';

function App() {
  return (
    <div  >
   <Navbar />
   <Home/>
   <Footer/>
    </div>
  );
}

export default App;
