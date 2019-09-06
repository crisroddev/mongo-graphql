import {Cat} from '../models/Cat';
import mongoose from 'mongoose';


export const resolvers = {
    Query: {
        hello: () => "Hello",
        cats: () => Cat.find()
    },
    Mutation: {
        createCat: async (root, {name}) => {
            const kitty = new Cat({ name});
            await kitty.save()
            console.log(kitty);
            return kitty
        },
        createCatPromise: (root, { name }) => {
            const newKitty = new Cat({ 
                name
            });
            return new Promise((resolve, object) => {
                newKitty.save((error) => {
                    if(error) rejects(error)
                    else resolve(newKitty)
                    console.log(newKitty)
                })
            })
        } 
    }
}