import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const Match = new Schema(
  {
    toUserId: { type: ObjectId, ref: 'Profile', required: true },
    fromUserId: { type: ObjectId, ref: 'Profile', required: true },
    matched: { type: Boolean, required: true },
    status: { type: String, enum: ['pending', 'withdrawn', 'accepted'] }
    // NOTE messages below is a stretch goal, will need to be altered if we reach this point as it does not like "fromUserId"
    // messages: [{ from: fromUserId, body: String }]
  }
)

Match.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Match
