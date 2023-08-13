import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:5001/graphql',
  cache: new InMemoryCache()
});

function fetchRestAPIPosts() {
  // Change the URL to a invalid url to see the error message
  return axios.get('http://localhost:5000/posts').then(res => res.data);
}


function fetchGraphQLPosts() {
  return client.query({
    query: gql`
      query GetPosts {
        posts {
          id
          title
        }
      }
    `
  }).then(result => result.data.posts);
}

function App() {
  const { isLoading, isError, data, error } = useQuery('posts', fetchRestAPIPosts);
  const { isLoading: gIsLoading, isError: gIsError, data: gData, error: gError } = useQuery('graphqlPosts', fetchGraphQLPosts);

  if (isLoading) {
    return <span>Loading Rest..</span>;
  }
  if (gIsLoading) {
    return <span>Loading GraphQL..</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  if (gIsError) {
    return <span>Error: {gError.message}</span>;
  }

  return (
    <div className="App">
      <h1>Posts Rest API</h1>
      {data.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}

      <h1>Posts GraphQL API</h1>
      {gData.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
