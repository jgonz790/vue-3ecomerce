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
  <h1>CONTADOR: {{ count }}</h1>
  <button @click="increase">AUMENTAR CONTADOR</button>
</template>
