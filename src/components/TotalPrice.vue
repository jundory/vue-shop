<template>
    <div>

        <div>
          <SideSelect @totalData="selectData"/>
        </div>    

        <div >
            햄버거 : {{ burgerData.name }}
            <br />
            사이드 : {{ sideData.name }}
            <br />
            음료 : {{ drinkData.name }}
            <br />
            Total : {{ totalPrice }}</div>
    </div>
</template>

<script setup>
    import {defineProps, reactive, ref} from 'vue'
    import SideSelect from '../components/SideSelect.vue';


    const props = defineProps({
      "burger-data" : {
      name: String,
      price: Number
    }
    });

    const a = {
        name:"선택 안함"
    }

    const burgerData = reactive(props.burgerData);
    const sideData = ref(a)
    const drinkData = ref(a)

    const selectData = (side  = a, drink = a) => {
        console.log("넘어온 값", side, drink)
        sideData.value = side;
        drinkData.value = drink;
        // sideData.value ? sideData.value = sideData.value.name : "선택 안함"
        // drinkData.value ? drinkData.value = drinkData.value.name : "선택 안함"

        console.log( "담은 후",sideData.value, drinkData.value)
        //reactive로 할 때에는 sideData.value에서 계속 에러가 발생함. 계속 재정의하려고 해서 안됐던 거임.
    }

</script>