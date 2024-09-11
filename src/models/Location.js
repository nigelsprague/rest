import { Schema } from "mongoose";

export const LocationSchema = new Schema({
  country: { type: String, required: true, maxlength: 100 },
  area: { type: String, required: true, maxlength: 100 },
  labels: [{ type: String, required: true, maxlength: 50 }]
}, { timestamps: true, toJSON: { virtuals: true } })