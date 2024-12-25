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
  <p>Productos agregados al carrito</p>
  <ul>
    <li v-for="detail in details" :key="detail.productId">
      {{ detail.productId }} (Qty: {{ detail.quantity }})
    </li>
  </ul>
</template>
