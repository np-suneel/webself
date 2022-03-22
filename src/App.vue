<template>
  <div id="app">
    <navb v-if="!$route.meta.hideNavbar"></navb>
    <subnav v-if="!$route.meta.hideNavbar"></subnav>

    <router-view />
  </div>
</template>

<script>
import navb from "./views/Navbar";
import subnav from "./views/subnav";

export default {
  components: {
    navb,
    subnav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
