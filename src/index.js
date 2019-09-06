import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { typeDefs } from './schema/schema';
import { resolvers } from './resolvers/index';

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

app.listen( { port: 4000 }, () => 
    console.log(`Server running at http://4000${server.graphqlPath}`)
);