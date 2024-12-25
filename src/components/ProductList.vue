<script lang="ts">
import ProductCard from './ProductCard.vue'
import Cart from './Cart.vue'
import type { CartDetail } from '../model/types';

export default {
  components: {
    ProductCard,
    Cart
  },
  data() {
    return {
      products: [
        {name: 'Silla', price: 45, id: 5},
        {name: 'Mesa', price: 450, id: 6},
        {name: 'Escritorio', price: 500, id: 7}
      ],
      details: [] as Array<CartDetail>
    };
  },
  methods: {
    onProductAdded(productId: number) {
      const detailFound = this.details.find(d => d.productId === productId);
      if (detailFound) {
        detailFound.quantity += 1;
      } else {
        this.details.push({
          productId,
          quantity: 1
        });
      }
    }
  }
}
</script>



<template>

  <v-row>

<v-col v-for="product in products" :key="product.name" cols="4">
  <ProductCard  :product="product" @addProduct="onProductAdded" />
<Cart :details="details" />

</v-col>

</v-row>




</template>
