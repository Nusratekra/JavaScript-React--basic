import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const { loggedIn, onLogout } = this.props;

    return (
      <nav style={{ backgroundColor: '#004d4d', color: 'white', padding: '8px 20px', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {/* Home button instead of link */}
          <button 
            style={{ color: 'white', background: 'transparent', border: 'none', marginRight: 15, cursor: 'pointer', fontSize: 16 }}
            onClick={() => alert('Home clicked!')}>
            Home
          </button>

          {loggedIn && (
            <button 
              style={{ color: 'white', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 16 }}
              onClick={() => alert('Dashboard clicked!')}>
              Dashboard
            </button>
          )}
        </div>

        {loggedIn && (
          <button 
            onClick={onLogout} 
            style={{ backgroundColor: '#cc3333', border: 'none', color: 'white', padding: '6px 12px', cursor: 'pointer' }}>
            Logout
          </button>
        )}
      </nav>
    );
  }
}

export default Navbar;
