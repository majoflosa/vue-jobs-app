<template>
  <div id="app">
    <NavBar />
    <main class="wrap">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

import './sass/style.sass';

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

