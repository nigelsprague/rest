import { Schema } from "mongoose";

export const RatSchema = new Schema({
  name: { type: String, required: true, maxlength: 100 },
  callsign: { type: String, required: true, maxlength: 100 },
  picture: { type: String, required: true, maxlength: 100 },
  specialties: [{ type: String, maxlength: 50, required: true }]

},
  { timestamps: true, toJSON: { virtuals: true } })