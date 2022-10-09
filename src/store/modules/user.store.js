const SET_USER = 'SET_USER'

const getDefaultState = () => {
  return {
    user: null,
  }
}

const state = getDefaultState()

const mutations = {
  [SET_USER]: (state, user) => {
    state.user = user
  },
}

const actions = {
  async createUser({ commit }, payload) {
    try {
      const response = await fetch('/users', {
        method: 'POST', //ou POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': 'Authorization',
        },
        body: JSON.stringify({
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          password: payload.password,
        }),
      })
      let data = await response.json()
      commit(SET_USER, data)
    } catch (e) {
      console.log(e)
    }
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
