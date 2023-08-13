const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const posts = [
  { id: 1, title: 'Graphql Loren' },
  { id: 2, title: 'Graphql Ipsum' },
  { id: 3, title: 'Graphql Dolor' },
  { id: 4, title: 'Graphql Sit' },
  { id: 5, title: 'Graphql Amet' }
];

// GraphQL type definitions
const typeDefs = gql`
  type Post {
    id: Int!
    title: String!
  }

  type Query {
    posts: [Post!]!
  }
`;

// GraphQL resolvers
const resolvers = {
  Query: {
    posts: () => posts
  }
};

// Apollo Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

async function startServer() {
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });
    
    app.listen({ port: 5001 }, () =>
      console.log(`🚀 Server ready at http://localhost:5001${server.graphqlPath}`)
    );
}
  
startServer();