<template>
    <!-- 사용한 기능 : store(get,set), v-if/else, v-for  -->
    <div class="wrap">
            <h1>장바구니</h1>
        <div class="inner-box" style="flex-wrap: wrap">
            <!-- 장바구니에 담은 아이템 반복 -->
            <div v-if="items !== null">

                <div 
                class="border-black" 
                v-for="item in items" 
                :Key="item" 
                style="width:400px" >
                    <img class="img-size" :src="item.burger.img"/>
                    <span>햄버거 : {{ item.burger.name }}</span>
                    <br />
                    <span>사이드 : {{ item.side.name !== '비어 있음' ? item.side.name : "없음"}}</span>
                    <br />
                    <span>음료수 : {{ item.drink.name !== '비어 있음' ? item.drink.name : "없음"}}</span>
                    <br />
                    <span>총 가격 : {{ item.total }}원</span>
                    <br />
                    <button @click="removeItem(item.key)"> 
                        삭제
                    </button>
                </div>

            </div>

            <div class="container" v-else> 장바구니가 비어 있습니다. </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useStore } from 'vuex';

    onMounted(()=>{
        checkStore()
    });
    const items = ref(null);
    const store = useStore();

    const checkStore = () => {
        console.log("어떻게 get함?", store.getters.getBasket);
        (store.getters.getBasket).length == 0 
        ? items.value = null 
        : items.value = store.getters.getBasket;
    }
    
    const removeItem = (key) => {
        console.log("key",key);
        store.dispatch('removeBasket', key);
        //삭제한거 화면에 반영
        checkStore()
        console.log("삭제 후 장바구니 품목",store.getters.getBasket)
    }
</script>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 자식이 있는 만큼만 적용된다. */
        grid-template-rows: repeat(3,80px);
        /* gap: 10px; */
        column-gap: 20px; /* column 간격 10px */
        row-gap: 30px; /* row의 간격 10px */

        width: 1200px;
        margin: 0 auto;

        text-align: center;
    }
</style>