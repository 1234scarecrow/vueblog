import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 这里存放的键值对就是要管理的状态
    isLogin:0,
    uname:"游客"
  },
  mutations: {
    login(state){
      state.isLogin=1
      Vue.set(state,"uname","欢迎回来")
    }
  },
  getters:{
    nameInfo(state){
      console.log( "姓名:"+state.uname)
    }
  },
  actions: {
  },
  modules: {
  }
})
