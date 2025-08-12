import React, { Component } from 'react';

class Dashboard extends Component {
  handleLogout = () => {
    this.props.onLogout();
  }

  render() {
    const containerStyle = {
      maxWidth: 600,
      margin: '80px auto',
      padding: 30,
      borderRadius: 12,
      backgroundColor: '#e0f2f2',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: 'center',
      boxShadow: '0 8px 24px rgba(116, 135, 147, 0.1)',
      color: '#004c4c',
    };

    const headingStyle = {
      fontSize: 28,
      marginBottom: 40,
      fontWeight: '700',
    };

    const buttonStyle = {
      padding: '14px 28px',
      fontSize: 16,
      fontWeight: '600',
      borderRadius: 10,
      border: 'none',
      backgroundColor: '#008080',
      color: 'white',
      cursor: 'pointer',
      boxShadow: '0 4px 12px #008080bb',
      transition: 'background-color 0.3s',
    };

    return (
      <div style={containerStyle}>
        <h1 style={headingStyle}>Welcome !{this.props.email}!</h1>
        <button
          onClick={this.handleLogout}
          style={buttonStyle}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#006666'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#008080'}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default Dashboard;
