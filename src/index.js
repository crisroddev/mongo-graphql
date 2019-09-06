import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { typeDefs } from './data/schema/schema';
import { resolvers } from './data/resolvers/index';
import mongoose from 'mongoose';
require('dotenv').config();

const startServer = async () => {
    const app = express();
    
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    server.applyMiddleware({ app });

    await mongoose.connect("mongodb+srv://admin:kqmmb7FkYew3XKuz@test-4ymxw.mongodb.net/test?retryWrites=true&w=majority", {
            useNewUrlParser: true
    })

    app.listen( { port: 4000 }, () => 
        console.log(`Server running at http://4000${server.graphqlPath}`)
    );
};

startServer();








