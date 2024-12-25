<script lang="ts">
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  emits: ['addProduct'],
  methods: {
    onAddButtonClick() {
      this.$emit('addProduct', this.product.id);
    }
  }
}
</script>

<template>
  <p>Nombre: {{ product.name }}</p>
  <p>Precio: {{ product.price }}</p>
  <button @click="onAddButtonClick">Agregar al carrito</button>
  <hr />
</template>
