// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex	from 'Vuex'

Vue.use(Vuex) // 安装xuex
Vue.prototype.$http = axios

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    channels: '',
    channelIndex: 0,
    channelData: '',
    newDataIndex: '',
    isActive: 0,
    load: true,
    showMy: false,
    showLogin: false,
    collection: [],
    likeImg: require("./assets/like.png")
  },
  mutations: {
    muChannels(state, data) {
      state.channels = data
    },
    muChannelIndex(state, index) {
      state.channelIndex = index
    },
    muGetData(state, data) {
      state.channelData = data
    },
    muNewDataIndex(state, index) {
      state.newDataIndex = index
    },
    increment(state, index) {
      state.channels.splice(index, 1)
    },
    decrement(state, item) {
      state.channels.push(item)
    },
    loading(state, statu) {
      state.load = statu
    },
    muIsActive(state, index) {
      state.isActive = index
    },
    muShowMy(state, statu) {
      state.showMy = statu
    },
    muShowLogin(state, statu) {
      state.showLogin = statu
    },
    muCollect(state, data) {
      state.collection.push(data)
      // state.collection.reverse()
    },
    muLike(state, data) {
      state.collection.splice(state.collection.indexOf(data), 1)
    },
    muLikeImg(state, url) {
      state.likeImg = url
    }
  },
  actions: {
    acChannels({ commit,state }) {
      return new Promise((resolve, reject) => {
        axios.get('/static/channel.json')
          .then(res => {
            commit('muChannels', res.data.result)
          })
          resolve()
      })
    },
    acGetData({ commit,state }, channel) {
      return new Promise((resolve, reject) => {
        axios.get('/static/channel2.json') //+ channel
          .then(res => {
            commit('muGetData', res.data.result.list)
            store.state.load = false
          })
          resolve()
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})