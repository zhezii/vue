<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    window.addEventListener('unload', this.saveState);
  },
  methods: {
    saveState() {
      sessionStorage.setItem('userState', JSON.stringify(this.$store.state.user));
    }
  }
}
</script>
