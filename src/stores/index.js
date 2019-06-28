/**
 * 
 * vuex：数据统一管理
 * 
 * 
 *  */
import Vue from 'vue'
import Vuex from 'vuex'
import city from './city/index'
import user from './user/index'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {

  },
  mutations: {},
  actions: {},
  modules: {
    city
  }
})
