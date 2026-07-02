import mongoose, { Schema, Document } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  members: number;
  focus: string;
  description: string;
}

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true, unique: true },
  members: { type: Number, required: true },
  focus: { type: String, required: true },
  description: { type: String, required: true },
});

export const Team = mongoose.model<ITeam>('Team', teamSchema);
