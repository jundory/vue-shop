<template>
  <div class="border-black" style="margin-left: 134px">
    <div>
      <SideSelect @totalData="selectData" />
    </div>

    <div>
      <div style="margin-top: 30px">
        햄버거 : {{ burgerData.name }} 
        <br /> 
        사이드 : {{ sideData.name }} 
        <br /> 
        음료 : {{ drinkData.name }}
      </div>
      <br />
      <div>Total : {{ totalPrice }}원</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive, ref, onMounted, computed } from 'vue'
import SideSelect from '@/components/SideSelect.vue'

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

//reactive로 할 때에는 sideData.value에서 계속 에러가 발생함. 계속 재정의하려고 해서 안됐던 거임.
const sideData = ref({
    name : '',
    price : null,
})
const drinkData = ref({
    name : '',
    price : null,
})

//데이터 분기처리
const selectData = (side = '비어 있음', drink = '비어 있음') => {
  console.log('select -> total', side, drink)

  typeof side == 'object'
    ? (sideData.value.name = side.name) && (sideData.value.price = side.price)
    : (sideData.value.name = side) && (sideData.value.price = '')

  typeof drink == 'object'
    ? (drinkData.value.name = drink.name) && (drinkData.value.price = drink.price)
    : (drinkData.value.name = drink) && (drinkData.value.price = '')
}

const totalPrice = computed(() => {
  return burgerData.price*1 + sideData.value.price*1 + drinkData.value.price*1
})

defineExpose({sideData, drinkData, totalPrice})
</script>
