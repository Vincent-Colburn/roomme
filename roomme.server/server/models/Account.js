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
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    location: { type: Number, required: true },
    aboutMe: { type: String, required: true },
    imgURL: { type: String },
    lookingFor: { type: String, enum: ['roommate', 'roommate with room'] },
    lowPriceRange: { type: Number, required: true },
    highPriceRange: { type: Number, required: true },
    interests: { type: String },
    lifestyleOptions: { type: String },
    room: { type: String, ref: 'Room' },
    anticipatedMoveInDate: { type: Date },
    creatorId: { type: String, required: true }
  },
  { timestamps: true, _id: false, toJSON: { virtuals: true } }
)

Account.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Account
