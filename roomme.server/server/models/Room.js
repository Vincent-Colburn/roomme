import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Room = new Schema(
  {
    user: { type: String, ref: 'Profile', required: true },
    description: { type: String, required: true },
    imgURL: { type: String },
    // TODO Make imgURL required? Currently not this way for Postman testing purposes
    amenities: { type: String, required: true },
    occupants: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Room.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Room
