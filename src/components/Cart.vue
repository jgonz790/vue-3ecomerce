<script lang="ts">
import { computed } from 'vue';
import { useCartStore } from '@/stores/cart';

export default {
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
          <v-list-item-title v-for="detail in details" :key="detail.productId" :value="detail.productId">
            {{ detail.productId }}
            (Qty: {{ detail.quantity }})
            <v-btn>
              +
            </v-btn>
            <v-btn>
              -
            </v-btn>
          </v-list-item-title>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>
