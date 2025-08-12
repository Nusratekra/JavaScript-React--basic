import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header style={{ backgroundColor: '#008080', color: 'white', padding: '10px 20px' }}>
        <h1 style={{ margin: 0 }}>My React App</h1>
      </header>
    );
  }
}

export default Header;
