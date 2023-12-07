import React, { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import MovieCard from "./MovieCard";
import Home from './Home'; 
import Lists from './Lists';

import "./App.css";
function App() {
return (
  <BrowserRouter>
    <div className='App'>
      <nav className='navbar'>
        <Link className='navlink' to="/">Home</Link>
        <Link className='navlink' to="/Lists">Lists</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Lists' element={<Lists />}/>
      </Routes>
    </div>
  </BrowserRouter>
);
}
export default App;


  