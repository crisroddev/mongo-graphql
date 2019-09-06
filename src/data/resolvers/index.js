import {Cat} from '../models/Cat';
import mongoose from 'mongoose';


export const resolvers = {
    Query: {
        hello: () => "Hello"
    },
    Mutation: {
        createCat: async (root, {name}) => {
            const kitty = new Cat({ name});
            await kitty.save()
            console.log(kitty);
            return kitty
        }
    }
}