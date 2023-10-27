<template>
    <!-- 사용한 기능 : v-for, define(Props/Emits) -->
    <div class="wrap">
            {{ modalData }}

            <Modal 
            v-if="isToggle"
            :burger-data="modalData"
            @emitModal="closeModal"
            />



            <div class="container">
                <div 
                v-for="burger in menu" 
                :key="burger"
                >
                    <div> 
                    {{ burger }}
                    <br/>
                    <button @click="openModal(burger)"> 주문 </button>
                     </div>
                </div>
            </div>
    </div>
</template>
<script setup>
    import {ref} from 'vue'
    import Modal from '../Modal/OrderModal.vue'
    // const printLog = ref(menu);
    const isToggle = ref(false);
    const modalData = ref('');


    // onMounted(()=>console.log(printLog.value));

    const openModal = (burg) => {
        isToggle.value = true;
        modalData.value = burg
    }

    const closeModal = (boolean) => {
        isToggle.value = boolean;
    }

    const menu = ref([
        {
            name: "cheese",
            price: 4000
        },
        {
            name: "shrimp",
            price: 5000
        },
        {
            name: "classic",
            price: 2500
        },
        {
            name: "chicken",
            price: 6000
        }
    ]);
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
    }
</style>