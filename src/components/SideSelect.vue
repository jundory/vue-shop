<template>
    <div>
        <select v-model="sideSel" @change="chgData">
            <option
                v-for="sideItem in sideData" 
                :key="sideItem"
                :value="sideItem"
            >
            {{ sideItem.name }}
            </option>
        </select>

        <br />

        <select v-model="drinkSel" @change="chgData">
            <option
                v-for="drinkItem in drinkData"
                :key="drinkItem"
                :value="drinkItem"
            >
            {{ drinkItem.name }}
            </option>
        </select>
    </div>
</template>
<script setup>
import {ref, reactive, defineEmits} from 'vue'
import {sideArr, drinkArr} from '../common'

const sideData = reactive(sideArr);
const drinkData = reactive(drinkArr);

const sideSel = ref();
const drinkSel = ref();

const emits = defineEmits('totalData');

const chgData = () => {
    emits('totalData', sideSel?.value, drinkSel?.value);
}

</script>