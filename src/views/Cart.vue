<template>
  <div>
    <Header />
    <div class="main">
      <div class="lpt">
        <Window class="window" />
      </div>
      <div class="rpt">
        <div class="body">
          <p class="tit">購物清單</p>
          <CartItem class="rpt" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Window from "@/components/Window";
import Footer from "@/components/Footer";
import CartItem from "@/components/CartItem";
export default {
  components: {
    Header,
    Window,
    Footer,
    CartItem
  }
};
</script>

<style scoped>
.main {
  display: flex;
  margin-top: 2rem;
}
.lpt {
  width: 20%;
}
.rpt {
  width: 80%;
}
.window {
  float: right;
  width: 60%;
  flex-direction: column;
}
/* .footer {
  position: relative;
  bottom: 0;
} */
.tit {
  color: #000;
  font-size: 30px;
  padding: 5px 10px 15px;
  margin-top: 0;
  text-align: left;
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  float: right;
}
</style>
