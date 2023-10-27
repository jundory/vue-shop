<template>
  <!-- 사용한 기능 : store(set), define(Props/Emits)  -->
    <div class="modal">
                                <!-- emit 첫 번째 방법 -->
      <div class="overlay" @click="$emit('emitModal', false)"></div>
        <div class="modal-card">
          {{ propsData.name }}
          
          <!-- 음식 관련 정보가 몇 개가 될지 모르니 반복문 사용 -->
          <!-- <div v-for="data in propsData" :key="data">
          {{ data.name }}
        </div>  -->


        <div>
          <TotalPrice :burger-data="propsData"/>
        </div>
                <!-- emit 두 번째 방법 -->
            <button @click='closeEmit'> 담기 </button>
      </div>
    </div>
  </template>
  
  <script setup>
    import { onMounted, ref, defineProps, defineEmits } from 'vue';
    import { useStore } from 'vuex';

    import TotalPrice from '../components/TotalPrice.vue';

    onMounted(()=> console.log("props데이터",propsData.value));

    const props = defineProps({
      "burger-data" : {
      name: String,
      price: Number
    }
    });
    const propsData = ref(props.burgerData);


    const store = useStore();
    const emit = defineEmits(['emitModal']);
    const closeEmit = () => {
      store.commit('setBasket', propsData.value);
      emit('emitModal', false);
    }

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
