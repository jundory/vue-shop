<template>
    <!-- 사용한 기능 : v-for, define(Props/Emits) -->
    <div class="wrap">
            <Modal 
            v-if="isToggle"
            :burger-data="modalData"
            @emitModal="closeModal"
            />

            <div class="container">
                <div 
                v-for="burger in items" 
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
    import {reactive, ref} from 'vue'
    import Modal from '../Modal/OrderModal.vue'
    import {burgerArr} from '../common'
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

    const items = reactive(burgerArr);   //가져온 버거배열
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