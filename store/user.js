export const state = () => ({
  token: ''
})

export const mutations = {
  setAuth(state, token) {
    state.token = token
  }
}