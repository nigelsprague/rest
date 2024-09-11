import { Schema } from "mongoose";

export const MissionSchema = new Schema({
  codename: { type: String, required: true, maxlength: 100 },
  objective: { type: String, required: true, maxlength: 500 },
  year: { type: String, required: true, maxlength: 100 },
  locationId: { type: Schema.ObjectId, required: true, ref: 'Location' },
  ratId: { type: Schema.ObjectId, required: true, ref: 'Rat' },
  completed: { type: Boolean, required: true, default: false }
}, { timestamps: true, toJSON: { virtuals: true } })

MissionSchema.virtual('rat', {
  localField: 'ratId',
  ref: 'Rat',
  foreignField: '_id',
  justOne: true
})

MissionSchema.virtual('location', {
  localField: 'locationId',
  ref: 'Location',
  foreignField: '_id',
  justOne: true
})