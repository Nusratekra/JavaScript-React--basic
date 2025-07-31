import React, { Component } from 'react';
import './App.css';
//import Greet from './Components/Greet';
//import WelCome from './Components/WelCome';
//import Hello from './Components/Hello';
//import Message from './Components/Message';
//import Counter from './Components/Counter';
//import FunctionClick from './Components/FunctionClick';
//import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
class App extends Component{
  render(){
      return (
        <div className="App">
         {/* <Greet />
<WelCome name="Sumu" heroName="Creative" />
<WelCome name="Bivas" heroName="Posh" />
<Hello name="Dipu" heroName="PuranDhaka"><p>This Is Children props</p></Hello>
<Hello name="Rimi" heroName="Lokkhipur"><button>Action</button></Hello>
<Hello name="Nabi" heroName="Khulna" /> <Message /><Counter /><Counter />
<FunctionClick />
            <ClassClick />*/}
            
            <EventBind />
          </div>
      );
    }
  }

export default App;
