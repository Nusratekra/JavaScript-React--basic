import React, { Component } from 'react';
import './App.css';
import Greet from './Components/Greet';
import WelCome from './Components/WelCome';
//import Hello from './Components/Hello';
//import Message from './Components/Message';
//import Counter from './Components/Counter';
class App extends Component{
  render(){
      return (
        <div className="App">
         {/* <Greet />
<WelCome name="Sumu" heroName="Creative" />
<WelCome name="Bivas" heroName="Posh" />
<Hello name="Dipu" heroName="PuranDhaka"><p>This Is Children props</p></Hello>
<Hello name="Rimi" heroName="Lokkhipur"><button>Action</button></Hello>
<Hello name="Nabi" heroName="Khulna" /> <Message /><Counter />*/}
            <Greet name="Sumu" heroName="Creative" />
            <WelCome name="Bivas" heroName="Posh" />
          </div>
      );
    }
  }

export default App;
