<template>
  <div id="app">
    <HeaderTop />
    <router-view />
  </div>
</template>

<script>
// Import the HeaderTop component
import HeaderTop from './components/HeaderTop.vue';

export default {
  components: {
    HeaderTop,
  },
};
</script>
