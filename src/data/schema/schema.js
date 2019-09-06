import { importSchema } from 'graphql-import';

const typeDefs = importSchema('./src/data/schema/schema.graphql');

export {typeDefs};