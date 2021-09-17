<template>
  <div>
    <Header />
    <Banner />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Banner,
    Content,
    Footer
  }
};
</script>

<style scoped></style>
