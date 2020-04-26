<template>
  <div id="app">
    <Nav />
    <main class="wrap">
      <router-view />
    </main>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';

import './sass/style.sass';

export default {
  name: 'App',
  components: {
    Nav,
  }
}
</script>

