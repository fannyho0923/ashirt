<template>
  <div id="app">
    <Header />
    <Banner />
    <!-- <ClearFix /> -->
  </div>
</template>

<script>
import Header from "./components/Header";
import Banner from "./components/Banner";

export default {
  name: "App",
  components: {
    Header,
    Banner
  }
};
</script>

<style>
@import "../style/reset.css";
</style>
