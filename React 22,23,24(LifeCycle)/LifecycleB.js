import React, { Component } from 'react';
class LifecycleB extends Component {
    constructor(props){
        super(props)

        this.state ={
            name: 'Prarona'
        }
        console.log("LifecycleB constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifecycleB componentDidMount")
    }
      //Update methods
  shouldComponentUpdate(){
    console.log("LifecycleB shouldComponentUpdate[Update methods]");
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("LifecycleB getSnapshotBeforeUpdate[Update methods]");
    return null;
  }
  componentDidUpdate(){
    console.log("LifecycleB componentDidUpdate[Update methods]");
  }
  render() {
    console.log("LifecycleB render")
    return <div>LifecycleB</div>
  }
}
export default LifecycleB;

