<template>
  <div class="border-black" style="margin-left: 134px">
    <div>
      <SideSelect @totalData="selectData" />
    </div>

    <div>
      <div style="margin-top: 30px">
        햄버거 : {{ burgerData.name }} || 사이드 : {{ sideData }} || 음료 : {{ drinkData }}
      </div>
      <br />
      <div>Total : {{ totalPrice }}원</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive, ref, onMounted, computed } from 'vue'
import SideSelect from '../components/SideSelect.vue'

onMounted(() => {
  selectData() //모달창 열린 직후 '비어 있음' 노출
})

const props = defineProps({
  'burger-data': {
    name: String,
    price: Number
  }
})
const burgerData = reactive(props.burgerData)

const sidePrice = ref(null)
const drinkPrice = ref(null)
//reactive로 할 때에는 sideData.value에서 계속 에러가 발생함. 계속 재정의하려고 해서 안됐던 거임.
const sideData = ref(null)
const drinkData = ref(null)

const selectData = (side = '비어 있음', drink = '비어 있음') => {
  console.log('select -> total', side, drink)

  typeof side == 'object'
    ? (sideData.value = side.name) && (sidePrice.value = side.price)
    : (sideData.value = side)

  typeof drink == 'object'
    ? (drinkData.value = drink.name) && (drinkPrice.value = drink.price)
    : (drinkData.value = drink)
}

//emit으로 올려
const totalPrice = computed(() => {
  return burgerData.price + sidePrice.value + drinkPrice.value
})
</script>
