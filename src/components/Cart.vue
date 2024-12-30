<script lang="ts">
import { computed } from 'vue';
import { useCartStore } from '@/stores/cart';
import{RouterLink}from'vue-router';

export default {

methods: {
  decrementQuantity(productId: number){
     const cartStore= useCartStore();
     cartStore.decrement(productId);
  },
  incrementQuantity(productId: number){
     const cartStore=useCartStore();
     cartStore.increment(productId);
  },
  deleteProduct(productId: number){
     const cartStore=useCartStore();
     cartStore.deleteProduct(productId);
  }
  },

  setup() {
    const cartStore = useCartStore();
    const details = computed(() => cartStore.details);

    return {
      details
    };
  }
}
</script>

<template>
  <v-card class="mt-4">
    <v-card-text>
      <v-card-title>
        Productos agregados al carrito
      </v-card-title>
      <v-card>
        <v-card-text>
          <v-list v-if="details.length > 0">
          <v-list-item-title v-for="detail in details" :key="detail.productId" :value="detail.productId">
            {{ detail.productId }}

            <v-btn size="small" @click="decrementQuantity(detail.productId)">
              -
            </v-btn>
            (Qty: {{ detail.quantity }})
            <v-btn size="small" @click="incrementQuantity(detail.productId)">
              +
            </v-btn>
            <v-btn @click="deleteProduct(detail.productId)">
              Eliminar
            </v-btn>
          </v-list-item-title>
        </v-list>
        <p v-else>
          Aun no has agregado productos a tu carrito de compras.
          Haz <RouterLink to="/">click AQUI</RouterLink> para ver los productos disponibles
        </p>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>
