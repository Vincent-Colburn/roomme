import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  matches: [],
  activeMatch: {},
  profiles: [],
  myProfile: {},
  activeProfile: {},
  count: {}
})

// Active profile is for the searches page, when you are viewing a single potential match
// myProfile is for the profile page/user
