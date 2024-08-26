<template>
    <div class="product-item">
      <img :src="product.image" :alt="product.name" class="product-image"/>
      <h3>{{ product.name }}</h3>
      <p>\${{ product.price.toFixed(2) }}</p>
      <button @click="addToCart(product)">Add to Cart</button>
    </div>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  
  export default {
    props: {
      product: Object, // Ensure props are properly defined if needed
    },
    setup() {
      const store = useStore();
  
      // Assuming 'product' is passed in as a prop
      const addToCart = (product) => {
        store.commit('addToCart', product);
      };
  
      return {
        addToCart,
      };
    },
  };
  </script>
  
  <style>
  .product-image {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  </style>
  