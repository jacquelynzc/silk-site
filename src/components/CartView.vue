<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <div v-for="item in cart" :key="item.id" class="cart-item">
      <p>{{ item.name }} - {{ item.price }}</p>
      <button @click="removeFromCart(item.id)">Remove</button>
    </div>
    <p>Total: {{ cartTotal }}</p>
    <router-link to="/checkout">Proceed to Checkout</router-link>
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

    return {
      cart,
      cartTotal,
      removeFromCart,
    };
  },
};
</script>
