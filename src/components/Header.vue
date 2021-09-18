<template>
  <div class="topBanner">
    <ul class="cart">
      <li>
        <a class="cartLpt" href="">
          <img src="../assets/info.png" alt="" />
          <span class="cartText">購物須知</span>
        </a>
      </li>
      <li>
        <a class="cartRpt" @click.prevent="goCart" href="">
          <img src="../assets/cart.png" alt="" />
          <span class="cartText"
            >購物車<span class="count">{{ change }}</span></span
          >
        </a>
      </li>
    </ul>
    <div class="imgBox">
      <a class="imgLink" href=""></a>
    </div>
    <div class="rwd">
      <nav class="itemsNav">
        <ul class="itemsUl">
          <li class="li">
            <a href=""><span>首頁</span></a>
          </li>
          <li class="li">
            <a href=""><span>品牌誌</span></a>
          </li>
          <li class="li">
            <a href=""><span>最新商品</span></a>
          </li>
          <li class="li">
            <a href=""><span>上裝</span></a>
          </li>
          <li class="li">
            <a href=""><span>下裝</span></a>
          </li>
          <li class="li">
            <a href=""><span>鞋子</span></a>
          </li>
          <li class="li">
            <a href=""><span>包包</span></a>
          </li>
          <li class="li">
            <a href=""><span>配件</span></a>
          </li>
          <li class="li">
            <a href=""><span>訂單查詢</span></a>
          </li>
          <li class="li">
            <a href=""><span>鞋子</span></a>
          </li>
        </ul>
      </nav>
      <div class="searchBar">
        <input type="text" placeholder="請輸入關鍵字" />
        <a class="searchBtn" href=""></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    changing: {
      type: Number
    }
  },
  created() {
    if (localStorage.getItem("cartCount")) {
      this.count = JSON.parse(localStorage.getItem("cartCount"));
      this.count = Number(this.cartCount);
    }
  },
  computed: {
    change() {
      if (JSON.parse(localStorage.getItem("cartCount"))) {
        return JSON.parse(localStorage.getItem("cartCount"));
      } else if (!isNaN(this.changing)) {
        return this.changing;
      } else {
        return 0;
      }
    }
  },
  methods: {
    goCart() {
      this.$router.push("/cart").catch(() => {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  font-size: 18px;
  color: #000;
}
img {
  vertical-align: top;
}
/* banner body */
.topBanner {
  /* background-color: blue; */
  max-width: 1230px;
  position: relative;
  margin: 0 auto;
  padding-top: 2rem;
}
.cart {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
}
.cartText {
  margin-left: 5px;
}
/* 使用者輸入框 */
.searchBar {
  /* position: absolute;
  bottom: 0; */
  /* right: 15px; */
  float: right;
  background: #f2f2f2;
  padding: 0 10px;
  display: flex;
  align-items: center;
  padding: 0 5px;
}
/* 照片容器 */
.imgBox {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
.imgLink {
  display: inline-block;
  background-image: url("../assets/topBanner.jpeg");
  height: 95px;
  padding-left: 400px;
  width: 0;
  overflow: hidden;
}
.itemsNav {
  display: flex;
  justify-content: center;
}
.itemsUl {
  display: flex;
}
input {
  /* 去除未選中狀態邊框 */
  border: 0;
  /* 去除選中狀態邊框 */
  outline: none;
  /* 透明背景 */
  background-color: rgba(0, 0, 0, 0);
  height: 40px;
}
.cartLpt {
  padding: 0 5px 0 0 5px;
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 38px;
  padding: 0 5px 0 10px;
  font-size: 16px;
  margin: 0 7px;
}
.cartRpt {
  position: relative;
  padding: 0 5px 0 10px;
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 38px;
  padding: 0 5px 0 10px;
  font-size: 16px;
  margin: 0 7px;
}
li + li {
  margin-left: 2rem;
}
.searchBtn {
  display: inline-block;
  background-image: url("../assets/searchPic.png");
  height: 20px;
  padding-left: 22px;
  width: 0;
  overflow: hidden;
}
.count {
  position: absolute;
  left: 29px;
  top: 0;
  background-color: #eb0f0f;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  color: #fff;
  display: inline-block;
  min-width: 20px;
  height: 20px;
  text-align: center;
  line-height: normal;
}
.rwd {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
}
</style>
