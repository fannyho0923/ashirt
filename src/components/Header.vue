<template>
  <div class="topBanner">
    <ul class="cart">
      <li>
        <a href="">
          <span>購物須知</span>
        </a>
      </li>
      <li>
        <a href="">
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
  text-align: center;
}
.itemsUl {
  display: flex;
}
</style>
