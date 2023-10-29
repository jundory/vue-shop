import { createStore } from 'vuex'

const store = createStore({
  state: {
    basket: []
  },
  getters: {
    getBasket(state) {
      return state.basket
    }
  },
  mutations: {
    //commit으로 접근
    pushBasket(state, value) {
      state.basket.push(value)
    },
    removeBasket(state, value) {
      state.basket = state.basket.filter((item) => item.name !== value.name)
    }
  },
  action: {
    //dispatch로 접근
    setBasket(context) {
      context.commit('pushBasket')
    }
  }
})

export default store
