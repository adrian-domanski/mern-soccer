import { Schema, model } from 'mongoose';

export interface Game {
  name: string;
  address: string;
  numberOfPeople: number;
  date: Date;
  time: string;
  fieldNumber: number;
}

const gameSchema = new Schema<Game>({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  numberOfPeople: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  fieldNumber: {
    type: Number,
    required: true,
  },
});

export default model<Game>('Game', gameSchema);
