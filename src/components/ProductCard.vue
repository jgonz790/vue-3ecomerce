<script lang="ts">
import { PropType } from 'vue';
import type { Product } from '../model/types';
import { useCartStore } from '@/stores/cart';

export default {
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },
  methods: {
    onAddButtonClick() {
      const cartStore = useCartStore();
      cartStore.addProduct(this.product.id);
    }
  },
  computed:{
    productImageUrl(){
      return this.product.image ?? 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
    }
  }
}
</script>

<template>
  <v-card>
    <v-img
      height="200px"
      :src="productImageUrl"
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
