import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

// Private Methods

/**
 * Creates account if one does not exist
 * @param {any} account
 * @param {any} user
 */
async function createAccountIfNeeded(account, user) {
  if (!account) {
    user._id = user.id
    account = await dbContext.Account.create({
      ...user,
      subs: [user.sub]
    })
  }
  return account
}

/**
 * Adds sub to account if not already on account
 * @param {any} account
 * @param {any} user
 */
async function mergeSubsIfNeeded(account, user) {
  if (!account.subs.includes(user.sub)) {
    // @ts-ignore
    account.subs.push(user.sub)
    await account.save()
  }
}
/**
 * Restricts changes to the body of the account object
 * @param {any} body
 */
function sanitizeBody(body) {
  const writable = {
    name: body.name,
    phones: body.phones,
    addresses: body.addresses,
    notes: body.notes,
    picture: body.picture
  }
  return writable
}

class AccountService {
  /**
    * Returns a list user profiles from a query search of name or email likeness
    * limits to first 20 without offset
    * @param {string} str
   */
  async findProfiles(str = '') {
    const filter = new RegExp(str, 'ig')
    const q = {
      $match: {
        $or: [{ name: filter }, { email: filter }]
      }
    }
    return await dbContext.Account
      .aggregate([q])
      .project('email picture name')
      .collation({ locale: 'en_US', strength: 1 })
      .limit(20)
      .exec()
  }

  /**
   * Returns a user profile from the email if one exists
   * @param {string} email
   */
  async findProfile(email) {
    return await dbContext.Account.findOne({ email })
      .select('name email picture')
  }

  /**
   * Returns a user account from the Auth0 user object
   *
   * Creates user if none exists
   *
   * Adds sub of Auth0 account to account if not currently on account
   * @param {any} user
   */
  async getAccount(user) {
    let account = await dbContext.Account.findOne({
      _id: user.id
    })
    account = await createAccountIfNeeded(account, user)
    await mergeSubsIfNeeded(account, user)
    return account
  }

  /**
   * Updates account with the request body, will only allow changes to editable fields
   *  @param {any} user Auth0 user object
   *  @param {any} body Updates to apply to user object
   */
  async updateAccount(user, body) {
    const update = sanitizeBody(body)
    const account = await dbContext.Account.findOneAndUpdate(
      { _id: user.id },
      { $set: update },
      { runValidators: true, setDefaultsOnInsert: true, new: true }
    )
    return account
  }

  async create(body) {
    return await dbContext.Profile.create(body)
  }

  async getOne(profileId) {
    const profileFound = await dbContext.Profile.findById(profileId).populate('creator')
    if (!profileFound) {
      throw new BadRequest('No Profile exists with that ID')
    }
    return profileFound
  }

  async getAll(query) {
    return await dbContext.Profile.find(query).populate('creator')
  }

  // NOTE With a many to many relationship, will a get"" function go here??

  async edit(id, title, userId) {
    const updated = await dbContext.Profile.findOneAndUpdate({ _id: id, creatorId: userId }, title, { new: true })
    if (!updated) {
      throw new BadRequest('No Profile exists with that ID')
    }
    return updated
  }

  async delete(id, userId) {
    return await dbContext.Profile.findByIdAndDelete({ _id: id, creatorId: userId })
  }
}
export const accountService = new AccountService()
