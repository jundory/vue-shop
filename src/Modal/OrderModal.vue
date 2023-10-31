<template>
  <!-- 사용한 기능 : store(set), define(Props/Emits)  -->
  <div class="modal">
    <!-- emit 첫 번째 방법 -->
    <div class="overlay" @click="$emit('emitModal', false)"></div>
    <div class="modal-card">
      {{ burgerData.name }}
      <div><img :src="burgerData.img" /></div>

      <div>
        <TotalPrice :burger-data="burgerData" ref="orderData"/> <!--  @totalData="testEmit"  -->
      </div>
      <!-- emit 두 번째 방법 -->
      <button @click="closeEmit">담기</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps, defineEmits } from 'vue'
import { useStore } from 'vuex'
import TotalPrice from '../components/TotalPrice.vue'

onMounted(() => console.log('main -> modal', burgerData.value))


const props = defineProps({
  'burger-data': {
    img: String,
    name: String,
    price: Number
  }
})
const burgerData = ref(props.burgerData)


const store = useStore()

const orderData = ref(null);
const emit = defineEmits(['emitModal'])

const closeEmit = () => {

  orderData.value = {
      burger : burgerData.value, 
      side : orderData.value.sideData, 
      drink : orderData.value.drinkData,
      total : orderData.value.totalPrice,
  }
  
  console.log("modal->basket", orderData.value);
  store.dispatch('setBasket', orderData.value);
  emit('emitModal', false);
}

// const testEmit = (side, drink, total) => {
//   orderData.value = {
//       burger : burgerData.value, 
//       side : side, 
//       drink : drink,
//       total : total,
//   }
// }

</script>

<style scoped>
.modal {
  position: absolute;
  width: 1200px;
  left: 18%;
  margin: 0 auto;
}
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.modal-card {
  position: relative;
  max-width: 80%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  min-height: 500px;
  z-index: 10;
  opacity: 1;
}
</style>
