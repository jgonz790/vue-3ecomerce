<script setup lang="ts">
import { onMounted,ref } from "vue";
const count =ref(0);

function aumentar() {
  count.value +=1;
}

onMounted(() => {
  console.log('Este es un menaje de consola ' + count.value);
});
</script>
<template>
  <p>Hola osva soy la version con composition API</p>
<h1>Contador {{ count }}</h1>
<button @click="aumentar">
  INCREMENTAR CONTADOR
</button>
</template>
