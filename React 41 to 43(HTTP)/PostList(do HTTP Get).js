import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: ''
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts') // ✅ fixed endpoint
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMsg: 'Error retrieving data' });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h2>List of Posts</h2>
        {posts.length ? (
          posts.map(post => <div key={post.id}>{post.title}</div>)
        ) : (
          <p>No posts found.</p>
        )}
        {/* ✅ Show error message if exists */}
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      </div>
    );
  }
}

export default PostList;
