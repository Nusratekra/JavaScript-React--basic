import React, { Component } from 'react';
import ComponentE from './ComponentE';
import UserContext from './UserContext';

// can also be: static contextType = UserContext
class ComponentD extends Component {
  render() {
    return (
      <div>
        Component D context: {this.context}
        <ComponentE />
      </div>
    );
  }
}

ComponentD.contextType = UserContext;

export default ComponentD;
