import React, { Component } from 'react';
class Message extends Component {
    constructor(){
        super()
        this.state ={
            message: 'state for after click it is changeable'
        }
    }
    changeMassage(){
        this.setState({
            message: 'we listing to the click event by adding [onClick={() => this.changeMassage()}]'
        })
    }
render() {
  return (
    <div>
      <h3>{this.state.message}</h3>
      <button onClick={() => this.changeMassage()}>Change in Message using state</button>
    </div>
  );
}

}
export default Message;