<template>
    <div class="checkout">
      <h2>Checkout</h2>
      <div v-if="cart.length > 0">
        <div v-for="item in cart" :key="item.id" class="checkout-item">
          <p>{{ item.name }} - \${{ item.price.toFixed(2) }}</p>
          <button @click="removeFromCart(item.id)">Remove</button>
        </div>
        <p>Total: \${{ cartTotal.toFixed(2) }}</p>
        <button @click="submitOrder">Place Order</button>
      </div>
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
  
      const cart = computed(() => store.getters.cart);
      const cartTotal = computed(() => store.getters.cartTotal);
  
      const removeFromCart = (id) => {
        store.commit('removeFromCart', id);
      };
  
      const submitOrder = () => {
        alert('Order placed successfully!');
        store.commit('clearCart');
      };
  
      return {
        cart,
        cartTotal,
        removeFromCart,
        submitOrder,
      };
    },
  };
  </script>
  
  