<template>
  <div id="app">
    <LoadingScreen :isLoading="isLoading" />
    <div class="col-md-12 m-0 p-0" v-if="!isLoading">
      <navb v-if="!$route.meta.hideNavbar"></navb>
      <subnav v-if="!$route.meta.subnav"></subnav>
      <router-view />
    </div>
  </div>
</template>



<script>
import navb from "./views/Navbar";
import subnav from "./views/subnav";
import LoadingScreen from "./views/SplashScreen";

export default {
  components: {
    navb,
    subnav,
    LoadingScreen
  },
  data() {
    return { isLoading: true };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
};
</script>

<style>
#app {

  text-align: center;
  color: black;
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
