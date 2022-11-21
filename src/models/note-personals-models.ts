import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schemaNotas = new Schema({
    name_actividad: String,
    description: String,
    url: String
}, {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: { currentTime: () => Date.now()  }
  })

export const schemaNote = mongoose.model('note_personas', schemaNotas);

