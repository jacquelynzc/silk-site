<template>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-item">
        <ProductItem :product="product" />
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import ProductItem from './ProductItem.vue'; // Import the ProductItem component
  
  export default {
    components: {
      ProductItem,
    },
    setup() {
      const store = useStore();
  
      // Fetch products from the store when the component is mounted
      store.dispatch('fetchProducts');
  
      const products = computed(() => store.getters.products);
  
      return {
        products,
      };
    },
  };
  </script>
 
  