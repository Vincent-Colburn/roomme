import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Profile = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    location: { type: Number, required: true },
    aboutMe: { type: String, required: true },
    imgURL: { type: String },
    // TODO Make imgURL required? Currently not this way for Postman testing purposes
    lookingFor: { type: String, enum: ['roommate', 'roommate with room'] },
    priceRange: { type: String, required: true },
    interests: { type: String },
    lifestyleOptions: { type: String },
    room: { type: String, ref: 'Room' },
    match: { type: String, ref: 'Match' },
    anticipatedMoveInDate: { type: Date, required: true },
    creatorId: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Profile.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Profile
