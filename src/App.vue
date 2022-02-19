<template>
  <div>
    <Navbar></Navbar>
    <router-view/> 
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex'
import Navbar from "./components/Navbar.vue"

const store = useStore();

onBeforeMount(() => {
      store.dispatch("fetchUser");
});

</script>

<style lang="postcss">
html {
    @apply bg-gradient-to-r from-slate-200;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
