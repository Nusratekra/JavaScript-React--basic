import React, { Component } from 'react';
import './App.css';
import Greet from './Components/Greet';
import WelCome from './Components/WelCome';
import Hello from './Components/Hello';
class App extends Component{
  render(){
      return (
        <div className="App">
          <Greet />
          <WelCome name = "Sumu" heroName = "Creative"></WelCome>
          <WelCome name = "Bivas" heroName = "Posh"></WelCome>
          <Hello name = "Dipu" heroName = "PuranDhaka"> <p>This Is Children props</p></Hello>
          <Hello name = "Rimi" heroName = "Lokkhipur"><button>Action</button></Hello>
          <Hello name ="Nabi" heroName = "Khulna"/>
        </div>
      );
    }
  }

export default App;
