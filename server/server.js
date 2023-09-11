const express = require('express');
// Import the ApolloServer class
const { ApolloServer } = require('apollo-server-express');
// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require("./schemas");
const path = require('path');
const db = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

// Create a new Apollo Server instance with type definitions and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Apply Apollo Server as middleware to Express app
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Handle all other routes by serving the React app's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Open a connection to the MongoDB database
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});