import React, { Component } from 'react';

/*class WelCome extends Component {
  render() {
    return <h3>Class Component</h3>;
  }
}*/

//Props with class component
class WelCome extends Component {
  render() {
    const {name,heroName} = this.props
    return(<h3>Class Component <h1>{name}</h1>is {heroName}</h3>)
  }
}
export default WelCome;
