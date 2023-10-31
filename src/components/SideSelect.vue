<template>
  <div>
    <select v-model="sideSel" @change="chgData">
      <option :value="undefined">선택 안함</option>
      <option 
        v-for="sideItem in sideData" 
        :key="sideSelKey"
        :value="sideItem"
      >
        {{ sideItem.name }}
      </option>
    </select>

    <br />

    <select v-model="drinkSel" @change="chgData">
      <option :value="undefined">선택 안함</option>
      <option 
        v-for="drinkItem in drinkData" 
        :key="drinkSelKey" 
        :value="drinkItem"
      >
        {{ drinkItem.name }}
      </option>
    </select>
  </div>
</template>
<script setup>
import { ref, reactive, defineEmits } from 'vue'
import { sideArr, drinkArr } from '../common'

const sideData = reactive(sideArr)
const drinkData = reactive(drinkArr)

const sideSel = ref()
const drinkSel = ref()

const emits = defineEmits('totalData')

const chgData = () => {
  console.log("dasdasd", sideSel.value)
  emits('totalData', sideSel?.value, drinkSel?.value)
}
</script>

<style scoped>
select {
  margin: 30px;
  width: 70%;
}
</style>
