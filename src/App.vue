<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="nav-bar">
      <div>
        <router-link to="/Home">Home</router-link>
      </div>
      <div>
        <router-link to="/Content">Content</router-link>
      </div>
      <div>
        <input type="button" value="Try me" v-on:click="tryme()">
      </div>
    </div>
    <router-view/>
    <customer-area/>
  </div>
</template>

<script>
import Customer from './components/Customer'

export default {
  name: 'App',
  components: { 'customer-area': Customer },
  methods: {
    tryme: function () {
      this.$router.push('/Content')
    }
  },
  data () {
    return {
      meta: 'This is meta from App.vue.'
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav-bar {
  display: inline-block;
}
</style>
