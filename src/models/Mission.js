import { Schema } from "mongoose";

export const MissionSchema = new Schema({
  codename: { type: String, required: true, maxlength: 100 },
  objective: { type: String, required: true, maxlength: 100 },
  year: { type: String, required: true, maxlength: 100 },
  locationId: { type: Schema.ObjectId, required: true, ref: 'Location' },
  ratId: { type: Schema.ObjectId, required: true, ref: 'Rat' },
  completed: { type: Boolean, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })