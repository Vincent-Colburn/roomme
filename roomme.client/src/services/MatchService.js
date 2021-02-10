// import { api } from './AxiosService'

import { api } from './AxiosService'

class MatchService {
  async like(profileId, matchId) {
    const res = await api.post('api/matches', { toUserId: profileId, fromUserId: matchId })
    console.log(res.data)
    return res.data

    // const search = {
    //   toUserId: profileId,
    //   fromUserId: matchId
    // }
    // const res = await api.get('api/matches', search)
    // console.log('This is if it found it', res.data)
    // if (res.data[0]) {
    //   const match = {
    //     toUserId: profileId,
    //     fromUserId: matchId,
    //     matched: true,
    //     status: 'accepted'
    //   }
    //   const update = await api.put('api/matches', match)
    //   console.log('it updated a match to true', update.data)
    //   return update.data
    // } else {
    //   const create = {
    //     toUserId: matchId,
    //     fromUserId: profileId
    //   }
    //   const newMatch = await api.post('api/matches', create)
    //   console.log('It created a new match', newMatch.data)
    //   return newMatch.data
    // }

    // We need to filter that uses && to look for both ID's, if !matchFound then create match
    //   const res = await api.get('api/matches')

  //   const toUserId = matchId
  //   const fromUserId = profileId
  //   const status = pending
  }

  async getMatches() {
    const res = await api.get('api/matches')
    console.log(res.data)
  }
}

export const matchService = new MatchService()
