import React, { Component } from 'react';
import axios from 'axios'; // ✅ Don't forget to import axios

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: '',
      title: '',
      body: ''
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(response => {
        console.log('Response:', response);
        alert('Post submitted successfully!');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong while submitting!');
      });
  }

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <h2>Create a New Post</h2>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              placeholder="User ID"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              placeholder="Body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
