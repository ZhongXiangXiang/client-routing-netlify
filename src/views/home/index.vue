<template>
  <div>
    <h2>home page</h2>
    <button @click="toAnimal('meowsalot')">meowsalot</button>
    <button @click="toAnimal('barksalot')">barksalot</button>
    <button @click="toAnimal('purrsloud')">purrsloud</button>
    <div>
      <h3>
        {{ animalInfo.name }}
        <small>({{ animalInfo.species }})</small>
      </h3>
      <p>{{ animalInfo.bio }}</p>
      <img :src="animalInfo.photo" alt />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
console.log(2223, route);

getPets(route.params.name);
let animalInfo = ref({});
async function getPets(name) {
  const res = await axios.get(`/.netlify/functions/animal/${name}`);
  animalInfo.value = res.data;
}

watch(route, function (val) {
  getPets(val.params.name);
});

const router = useRouter();
function toAnimal(type) {
  router.push({
    name: 'home',
    params: { name: type }
  });
}
</script>
