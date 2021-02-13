import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Account = new Schema(
  {
    subs: [{ type: String, unique: true }],
    _id: { type: String, required: true },
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    // NOTE If you wish to add additional public properties for Accounts do so here
    age: { type: Number },
    gender: { type: String },
    location: { type: Number },
    aboutMe: { type: String },
    imgURL: { type: String },
    lookingFor: { type: String, enum: ['roommate', 'roommate with room'] },
    lowPriceRange: { type: Number },
    highPriceRange: { type: Number },
    interests: { type: String },
    lifestyleOptions: { type: String },
    room: { type: String, ref: 'Room' },
    anticipatedMoveInDate: { type: String }
  },
  { timestamps: true, _id: false, toJSON: { virtuals: true } }
)

export default Account
