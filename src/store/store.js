import { createStore } from 'vuex'

    const store = createStore({
        state : {
            basket : [],
        },
        getters : {
            getBasket(state){
                return state.basket;
            },
        },
        mutations : {
            setBasket(state, value){
                state.basket.push(value);
            },
            removeBasket(state, value){
                state.basket = state.basket.filter((item)=> item.name !== value.name);
            }
        },
        action : {
            // 바꿀 것
        }
    })

export default store