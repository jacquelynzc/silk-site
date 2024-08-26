<template>
    <div>
      <h1>Welcome to Sleepy Silk Heaven</h1>
      <h3>Blissful Dreams</h3>
      <ProductList />
      <CartView /> <!-- Include CartView if needed on homepage -->
    </div>
  </template>
  
  <script>
  import ProductList from '../components/ProductList.vue';
  import CartView from '../components/CartView.vue';
  import '../assets/styles.css'
  
  export default {
    components: {
      ProductList,
      CartView,
    },
  };
  </script>
  