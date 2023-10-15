import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    sortOneFabricatorId: ''
  },
  getters: {
    CART: state => {
      return state.cart
    },
    ONE_FABRICATOR_ID: state => {
      return state.sortOneFabricatorId
    }
  },
  mutations: {
    PUSH_CART: (state, data) => {
      state.cart.push(data)
    },
    SET_CART: (state, data) => {
      state.cart = data
    },
    SPLICE_CART: (state, data) => {
      state.cart.splice(data)
    },
    SLICE_CART: (state, data) => {
      state.cart.slide(data, 1)
    },
    SET_FABRICATOR_ID: (state, data) => {
      state.sortOneFabricatorId = data
    }
  },
  actions: {
  },
  modules: {
  }
})
