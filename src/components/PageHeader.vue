<template>
    <div class="wrap">
        <div class="inner-box">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg">
            <div>
                <span> {{로그인}} </span>
                <span @click="basket" ><img src="@/assets/images/cart.png" style="margin-left:1080px"></span>
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
    height : 50px;
}
</style>