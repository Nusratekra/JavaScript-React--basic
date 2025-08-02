import React, { Component } from 'react';
import './App.css';
//import Greet from './Components/Greet';
//import WelCome from './Components/WelCome';
//import Hello from './Components/Hello';
//import Message from './Components/Message';
//import Counter from './Components/Counter';
//import FunctionClick from './Components/FunctionClick';
//import ClassClick from './Components/ClassClick';
//import EventBind from './Components/EventBind';
//import ParentComponent from './Components/ParentComponent';
//import UserGreeting from './Components/UserGreeting';
//import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import InLine from './Components/InLine';

import './appStyles.css';
import styles from './appStyles.module.css';

class App extends Component{
  render(){
      return (
        <div className="App">
          <h1 className='error'>Error</h1>
          <h1 className={styles.sucess}>Success</h1>
         {/* <Greet />
<WelCome name="Sumu" heroName="Creative" />
<WelCome name="Bivas" heroName="Posh" />
<Hello name="Dipu" heroName="PuranDhaka"><p>This Is Children props</p></Hello>
<Hello name="Rimi" heroName="Lokkhipur"><button>Action</button></Hello>
<Hello name="Nabi" heroName="Khulna" /> <Message /><Counter /><Counter />
<FunctionClick />
            <ClassClick />
            <EventBind />
            <ParentComponent />
            <UserGreeting />
             <NameList />
            */}
            <StyleSheet primary={true} />
            <InLine />
          </div>
      );
    }
  }

export default App;
