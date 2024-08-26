<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/checkout">Checkout</router-link>
    </nav>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const cartItemCount = computed(() => store.getters.cartItemCount);

    return {
      cartItemCount,
    };
  },
};
</script>
