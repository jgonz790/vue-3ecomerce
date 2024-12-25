<script lang="ts">
import type { PropType } from 'vue';
import type { CartDetail } from './types';

export default {
  props: {
    details: {
      type: Array as PropType<Array<CartDetail>>,
      required: true
    }
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
            {{ detail.productId }} (Qty: {{ detail.quantity }})
          </v-list-item-title>
        </v-card-text>
      </v-card>


    </v-card-text>
  </v-card>
</template>
