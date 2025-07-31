import React, { Component } from 'react';
class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Event Handlers',
    };
    // Binding the method in the constructor
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      message: 'Binding Event Handlers',
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/*<button onClick={this.handleClick.bind(this)}>Click Event Bind</button>
        <button onClick={() => this.handleClick()}>Click Event Bind</button>*/}
        <button onClick={this.handleClick}>Click Event Bind</button>
      </div>
    );
  }
}
export default EventBind;
