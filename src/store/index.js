import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
  actions: {
    fetchProducts({ commit }) {
      // Fetch or load product data from an API or local file
      const products = [
        { id: 1, name: 'Silk Pillowcase', price: 29.99, image: 'pillowcase.jpg' },
        { id: 2, name: 'Silk Sleep Mask', price: 19.99, image: 'sleepmask.jpg' },
      ];
      commit('setProducts', products);
    },
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
    cartItemCount: (state) => state.cart.length,
    cartTotal: (state) => state.cart.reduce((total, item) => total + item.price, 0),
  },
});

export default store;
