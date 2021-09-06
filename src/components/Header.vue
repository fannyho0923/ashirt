<template>
  <div class="topBanner">
    <ul class="cart">
      <li>
        <a class="cartLpt" href="">
          <img src="../assets/info.png" alt="" />
          <span>購物須知</span>
        </a>
      </li>
      <li>
        <a class="cartRpt" href="">
          <img src="../assets/cart.png" alt="" />
          <span>購物車</span>
        </a>
      </li>
    </ul>
    <div class="imgBox">
      <a class="imgLink" href=""></a>
    </div>
    <nav class="itemsNav">
      <ul class="itemsUl">
        <li>
          <a href=""><span>首頁</span></a>
        </li>
        <li>
          <a href=""><span>品牌誌</span></a>
        </li>
        <li>
          <a href=""><span>最新商品</span></a>
        </li>
        <li>
          <a href=""><span>上裝</span></a>
        </li>
        <li>
          <a href=""><span>下裝</span></a>
        </li>
        <li>
          <a href=""><span>鞋子</span></a>
        </li>
        <li>
          <a href=""><span>包包</span></a>
        </li>
        <li>
          <a href=""><span>配件</span></a>
        </li>
        <li>
          <a href=""><span>訂單查詢</span></a>
        </li>
        <li>
          <a href=""><span>鞋子</span></a>
        </li>
      </ul>
    </nav>
    <div class="searchBar">
      <input type="text" placeholder="請輸入關鍵字" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
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
/* 使用者輸入框 */
.searchBar {
  position: absolute;
  bottom: 30px;
  right: 15px;
  background: #f2f2f2;
  padding: 0 10px;
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
}
.cartLpt {
  padding: 0 5px 0 40px;
  color: white;
  background-color: black;
}
.cartRpt {
  padding: 0 5px 0 40px;
  color: white;
  background-color: black;
}
</style>
