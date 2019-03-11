import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from "./router";

Vue.use(Vuex)

let _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/molloy/bugs',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    bugs: []
  },
  mutations: {
    setBugs(state, bugs) {
      state.bugs = bugs
    }
  },
  actions: {
    getBugs({ commit, dispatch }) {
      _api.get('')
        .then(res => {
          console.log(res)
          commit('setBugs', res.data.data)
        })
    },
    postBug({ commit, dispatch }, payload) {
      _api.post('', payload)
        .then(res => {
          console.log(res)
          router.push({ name: 'bugs' })
          dispatch('getBugs')
        })
    },
    getBugDetails({ commit, dispatch }) {
      _api.get('/:id')
    },
    getNotes({ commit, dispatch }, payload) {
      _api.get('/:id/notes', payload)
        .then(res => {
          router.push({ name: '' })
        })
    }
  }
})
