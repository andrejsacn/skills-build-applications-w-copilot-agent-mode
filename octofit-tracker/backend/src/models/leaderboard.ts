import mongoose, { Schema, Document } from 'mongoose';

export interface ILeaderboardEntry extends Document {
  rank: number;
  name: string;
  score: number;
  badge: string;
}

const leaderboardSchema = new Schema<ILeaderboardEntry>({
  rank: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  score: { type: Number, required: true },
  badge: { type: String, required: true },
});

export const Leaderboard = mongoose.model<ILeaderboardEntry>('Leaderboard', leaderboardSchema);
