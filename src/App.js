import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Search from './Components/Search/Search';
import Artists from './Components/Artists/Artists';

const  App=()=> (
    <div className="App">
      <Navigation/>
      <Search />
      <Artists  />
    </div> 
       );

export default App;
