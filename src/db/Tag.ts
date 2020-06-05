import * as mongoose from 'mongoose';
 
const tagSchema = new mongoose.Schema({
  tagName: String,
  count: Number,
  region: String
});

export const tagModel = mongoose.model('tag', tagSchema);