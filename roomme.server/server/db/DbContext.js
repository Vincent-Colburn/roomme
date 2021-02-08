import mongoose, { mongo } from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import ProfileSchema from '../models/Profile'
import MatchSchema from '../models/Match'
import RoomSchema from '../models/Room'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Profile = mongoose.model('Profile', ProfileSchema);
  Match = mongoose.model('Match', MatchSchema);
  Room = mongoose.model('Room', RoomSchema);
}

export const dbContext = new DbContext()
