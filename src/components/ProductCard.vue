<script lang="ts">
import type{ Prototype } from'vue';
import type {Product} from '../model/types';
export default {
  props: {
    product: {
      type: Object as Prototype<product>,
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
  <v-card >
    <v-img
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-img>

  <v-card-title>
    {{ product.name }}
  </v-card-title>

  <v-card-text>
    <p class="mb-4">Esta es una descripcion de ejemplo</p>
    <v-chip>
    Precio: $ {{ product.price }}
  </v-chip>
  </v-card-text>


  <v-card-actions>
    <v-btn @click="onAddButtonClick" color="orange-lighten-2">
      Agregar al carrito
    </v-btn>
  </v-card-actions>

  </v-card>


</template>
