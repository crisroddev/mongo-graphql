import mongoose from 'mongoose';

const catSchema = new mongoose.Schema({
   name: String
});

const Cat = mongoose.model('cat', catSchema);

export { Cat };