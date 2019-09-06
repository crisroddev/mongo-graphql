import { ApolloServer } from 'apollo-server-express';
import express from 'express';

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

app.listen( { port: 4000 }, () => 
    console.log(`Server running at http://4000${server.graphqlPath}`)
);