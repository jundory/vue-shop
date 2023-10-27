<template>
    <div class="wrap">
        <div class="inner-box">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg">
            <div style="text-align:right; width: 50%">
                <span> {{로그인}} </span>
                <span @click="basket" >장바구니</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
// import {RouterLink} from 'vue-router'
const router = useRouter();
// const route = useRoute();

const basket = () => {
    router.push({
        name: 'basket',
        path: '/basket'
    })
}

</script>

<style scoped>
img {
    width : 50%;
    height : 50px;
    text-align: left;
}
</style>