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
    changeBasket(state, data) {
      state.basket = state.basket.filter((item) => item.burger.name !== data.burger.name)
    }
  },
  actions: {
    //dispatch로 접근
    setBasket(context, data) {
      context.commit('pushBasket', data)
    },
    removeBasket(context, data){
      context.commit('changeBasket', data)
    }
  }
})

export default store;
