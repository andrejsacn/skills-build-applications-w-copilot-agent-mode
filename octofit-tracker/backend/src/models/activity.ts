import mongoose, { Schema, Document } from 'mongoose';

export interface IActivity extends Document {
  type: string;
  durationMinutes: number;
  distanceKm: number;
  date: string;
  notes: string;
}

const activitySchema = new Schema<IActivity>({
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  distanceKm: { type: Number, required: true },
  date: { type: String, required: true },
  notes: { type: String, required: true },
});

export const Activity = mongoose.model<IActivity>('Activity', activitySchema);
