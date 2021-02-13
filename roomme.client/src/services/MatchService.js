// import { api } from './AxiosService'

import { AppState } from '../AppState'
import { api } from './AxiosService'

class MatchService {
  async like(matchId) {
    const res = await api.post('api/matches', { toUserId: matchId })
    console.log(res.data)
    return res.data
  }

  async getMatches() {
    const res = await api.get('api/matches')
    console.log('these are your matches', res.data)
    AppState.matches = res.data
    // console.log('this is the appstate matches', AppState.matches)
  }

  async getMatchProfile(id) {
    const res = await api.get('api/profiles/' + id)
    console.log('this is the match profile', res.data)
    AppState.activeMatch = res.data
  }
}

export const matchService = new MatchService()
