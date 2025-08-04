import React, { Component } from 'react';
import './App.css';
import ComponentC from './Components/ComponentC';
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
//import StyleSheet from './Components/StyleSheet';
//import InLine from './Components/InLine';
//import Form from './Components/Form';
//import LifecycleA from './Components/LifecycleA'; 
//import FragmentDemo from './Components/FragmentDemo'
//import Table from './Components/Table'
//import './appStyles.css';
//import styles from './appStyles.module.css';
//import { UserProvider } from './Components/UserContext';
class App extends Component{
  render(){
      return (
        <div className="App">
        {/*
          <h1 className='error'>Error</h1>
          <h1 className={styles.sucess}>Success</h1>
          <Greet />
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
             <StyleSheet primary={true} />
               <InLine />
               <Form />
               <LifecycleA />
               <FragmentDemo />
            <Table />
            */}
            {/*<UserProvider value= "Context">*/}
              <ComponentC />
            {/*</UserProvider>*/}
            
          </div>
      ); 
    }
  }

export default App;
