import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: null };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ error: 'Please fill all fields' });
      return;
    }

    if (email === 'user@example.com' && password === '123456') {
      this.props.onLoginSuccess(email);
    } else {
      this.setState({ error: 'Invalid email or password' });
    }
  }

  render() {
    const containerStyle = {
      maxWidth: 500,
      margin: '60px auto',
      padding: 30,
      borderRadius: 12,
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
      backgroundColor: '#f9faff',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#004c4c',
    };

    const inputStyle = {
      width: '90%',
      padding: '12px 14px',
      borderRadius: 8,
      border: '1.5px solid #bbb',
      marginTop: 6,
      marginBottom: 20,
      fontSize: 16,
      outline: 'none',
      transition: 'border-color 0.3s',
    };

    const labelStyle = {
      fontWeight: '600',
      fontSize: 14,
    };

    const buttonStyle = {
      width: '96%',
      padding: '14px',
      backgroundColor: '#008080',
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
      border: 'none',
      borderRadius: 10,
      cursor: 'pointer',
      boxShadow: '0 4px 12px #008080bb',
      transition: 'background-color 0.3s',
    };

    const errorStyle = {
      color: '#d93025',
      fontWeight: '600',
      marginBottom: 14,
      textAlign: 'center',
    };

    return (
      <div style={containerStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: 30, color: '#004c4c' }}>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label style={labelStyle}>Email:</label><br />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter your email"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#008080'}
              onBlur={e => e.target.style.borderColor = '#bbb'}
            />
          </div>
          <div>
            <label style={labelStyle}>Password:</label><br />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Enter your password"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#008080'}
              onBlur={e => e.target.style.borderColor = '#bbb'}
            />
          </div>
          {this.state.error && <p style={errorStyle}>{this.state.error}</p>}
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#006666'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#008080'}
          >
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
