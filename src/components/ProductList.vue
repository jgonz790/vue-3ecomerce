<script lang="ts">
import ProductCard from './ProductCard.vue'
import Cart from './Cart.vue'
import { useCartStore } from '@/stores/cart';

export default {
  components: {
    ProductCard,
    Cart
  },
  setup() {
    const cartStore = useCartStore();
    const products = [
      { name: 'Silla', price: 45, id: 5 },
      { name: 'Mesa', price: 450, id: 6 },
      { name: 'Escritorio', price: 500, id: 7 },
      { name: 'Silla', price: 45, id: 5 },
      { name: 'Mesa', price: 450, id: 6 },
      { name: 'Escritorio', price: 500, id: 7 }
    ];

    const onProductAdded = (productId: number) => {
      cartStore.addProduct(productId);
    };

    return {
      products,
      cartStore,
      onProductAdded
    };
  }
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.name" cols="4">
        <ProductCard :product="product" @addProduct="onProductAdded" />
      </v-col>
    </v-row>

  </v-container>
</template>
