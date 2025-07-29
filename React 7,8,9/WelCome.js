import React, { Component } from 'react';

/*class WelCome extends Component {
  render() {
    return <h3>Class Component</h3>;
  }
}*/

//Props with class component
class WelCome extends Component {
  render() {
    return <h3>Class Component <h1>{this.props.name}</h1>is {this.props.heroName}</h3>;
  }
}
export default WelCome;
