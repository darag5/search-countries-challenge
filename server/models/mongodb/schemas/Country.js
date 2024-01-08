import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema(
  {
    keyName: {
      type: String,
    },
    name: {
      type: String,
    },
    population: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Country = mongoose.model('Country', countrySchema);
