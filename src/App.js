import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

function fetchPosts() {
  // Change the URL to a invalid url to see the error message
  return axios.get('http://localhost:5000/posts').then(res => res.data);
}

function App() {
  const { isLoading, isError, data, error } = useQuery('posts', fetchPosts);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="App">
      <h1>Posts</h1>
      {data.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
