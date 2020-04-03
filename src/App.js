import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Search from './Components/Search/Search';
import Artists from './Components/Artists/Artists';

class App extends React.Component {
  constructor(){
    super();
      this.state={
        searchField:''}
              }

 onSearchChange=(event)=>{
       this.setState({searchField: event.target.value});
      console.log(this.state.searchField);
 }

 render()
 {
const {searchField}=this.state;
return (
    <div className="App">
      <Navigation/>
      <Search onSearchChange={this.onSearchChange} />
      <Artists searchField={searchField} />
    </div> 
       );
 }
 
}

export default App;
