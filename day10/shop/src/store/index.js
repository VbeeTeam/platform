import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [],
    detailInfo: {},
    orderList: []
  },
  getters: {
  },
  mutations: {
    // 保存购物车数据
    mutationsCartList(state, list){
      return state.cartList = list
    },
    // 保存商品详情信息
    mutationsDetailInfo(state, obj){
      return state.detailInfo = obj
    },
    // 保存订单数据
    mutationsOrderList(state, list){
      return state.orderList = list
    }
  },
  actions: {
  },
  modules: {
  }
})
