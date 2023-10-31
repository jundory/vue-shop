import { createStore } from 'vuex'

const store = createStore({
  state: {
    index: 1,
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
      value.key = state.index;
      state.index++
      state.basket.push(value)
    },
    changeBasket(state, key) {
      console.log("storeKey", state.basket)
      state.basket = state.basket.filter((item) => item.key !== key)
    }
  },
  actions: {
    //dispatch로 접근
    setBasket(context, data) {
      context.commit('pushBasket', data)
    },
    removeBasket(context, key){
      context.commit('changeBasket', key)
    }
  }
})

export default store;
