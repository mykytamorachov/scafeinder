import * as mongoose from 'mongoose';
import { Document, Schema, Model, model } from 'mongoose';
import { ICafe } from '../../src/app/models/cafe.interface';

export interface ICafeModel extends ICafe, Document {
}

export const CafeSchema: Schema = new Schema({
  location: {
    lat: Number,
    lng: Number
  },
  name: {
    type: String,
    required: 'Please enter a name'
  },
  rating: Number,
  address: {
    unique: true,
    type: String,
    required: 'Please enter an address'
  },
  categories: [String],
  cuisines: [String],
  features: [String],
  tables: [{ tableType: Number, free: Boolean }],
  img: String
}, { versionKey: false });


export const Cafe = mongoose.model<ICafeModel>('Cafe', CafeSchema, 'cafes');
