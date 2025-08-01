import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    // Option 4: short circuit operator(in case of false nothing will render)
    // return this.state.isLoggedIn && <div>Welcome Bondhu</div>
    // Option 3: Ternary conditional operator
     return (
       <div>
         {this.state.isLoggedIn ? <div>Welcome Bondhu</div> : <div>Welcome Guest</div>}
       </div>
     );

    // Option 2: element variable
    //let message;
    //if (this.state.isLoggedIn) {
    //  message = <div>Welcome Bondhu</div>;
    //} else {
    //  message = <div>Welcome Guest</div>;
    //}
    //return <div>{message}</div>;

    // Option 1: if /else
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Bondhu</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default UserGreeting;
