import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mounting Lifecycle',
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }
  //Update methods
  shouldComponentUpdate(){
    console.log("LifecycleA shouldComponentUpdate[Update methods]");
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("LifecycleA getSnapshotBeforeUpdate[Update methods]");
    return null;
  }
  componentDidUpdate(){
    console.log("LifecycleA componentDidUpdate[Update methods]");
  }

  changeState = () => {
    this.setState({
        name: 'Updating Lifecycle'
    })
  }
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
