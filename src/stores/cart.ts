import { defineStore } from 'pinia';
import type { CartDetail } from '@/model/types';

export const useCartStore = defineStore('cart', {
  state: () => ({
    details: <Array<CartDetail>>[]
  }),
  getters: {
    cartItemsCount: (state) => {
      let count = 0;
      state.details.forEach(detail => {
        count += detail.quantity;
      });
      return count;
    },
  },
  actions: {
    addProduct(productId: number) {
      const detailFound = this.details.find(d => d.productId === productId);
      if (detailFound) {
        detailFound.quantity += 1;
      } else {
        this.details.push({
          productId,
          quantity: 1
        });
      }
    },

    deleteProduct(productId: number){
      const index = this.details.findIndex(d => d.productId === productId);
      this.details.splice(index,1);
    },

    increment(productId: number){
      const detailFound = this.details.find(d => d.productId === productId);
      if(detailFound){
        detailFound.quantity +=1;
      }
    },
    decrement(productId: number){
      const detailFound = this.details.find(d => d.productId === productId);
      if(detailFound){
        detailFound.quantity -=1;
        if(detailFound.quantity === 0){
          this.deleteProduct(productId);
        }
      }
    }
  },
});
