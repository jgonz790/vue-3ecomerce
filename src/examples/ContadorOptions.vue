<script lang="ts">
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increase() {
      this.count += 1
    }
  },
  mounted(){
    console.log('El valor inicial del contador es'+this.count);
  }
}
</script>

<template>
  <p>OBJETIVO TIENES QUE LLEGAR A 20 CLICKS!!</p>
  <h1>CONTADOR: {{ count }}</h1>
  <button @click="increase">AUMENTAR CONTADOR</button>
<p v-if="count<=10">VAMOS OSVALDO TU PUEDES!</p>
<p v-else>YA TE FALTA MUY POCO!!!</p>
</template>
