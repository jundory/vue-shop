<template>
    <div class="wrap">
    <div class="inner-box" style="background-color: beige" >
        
        <!-- <p><RouterLink to="/">Home</RouterLink> </p>
        <p><RouterLink to="/about">About</RouterLink> </p>
        <p><RouterLink to="/menu">MainMenu</RouterLink></p> -->
            <div v-for="title in titleName" :key="title" style="width: 33%"> 
                <div @click="routePage(title)">
                    {{ title.value }}
                </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import {ref} from 'vue'

const router = useRouter();
let titleName = ref([
        {
        id: 1,
        value:'Home'
        },
        {
        id: 2,  
        value: 'Main'
        },
        {
        id: 3,
        value:'About'
        },
]);

const routePage = (titleNm) => {

   const selTitle = titleName.value.filter((item)=> item.value == titleNm.value)

   router.push({
        name: (selTitle[0].value).toLowerCase(),
        path: "/"+(selTitle[0].value).toLowerCase()
    })
}


</script>

<style scoped>
span{
    padding : 20%;
}
</style>