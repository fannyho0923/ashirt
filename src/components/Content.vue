<template>
  <div class="content">
    <!-- 連結們 -->
    <div class="links">
      <a class="link about" href="">ABOUT US </a>
      <a class="link news" href="">ALL NEWS</a>
      <a class="link fb" href="">FACEBOOK</a>
      <a class="link service" href="">SERVICE</a>
    </div>
    <!-- 上衣 -->
    <SubLinks :prop="clothes" />
    <div class="products">
      <Products
        class="p"
        v-for="(item, index) in clothes.imgs"
        :key="index"
        :imgUrl="clothes.imgs[index]"
        :cost="clothes.cost[index]"
        :name="clothes.name[index]"
      />
    </div>
    <!-- <img :src="clothes.imgs[2]" alt="" /> -->
    <!-- 底部banner -->
    <div class="bottomBanner">
      <a href="">
        <img src="@/assets/aboutPic.jpeg" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
import SubLinks from "./SubLinks";
import Products from "./Products";

export default {
  data() {
    return {
      clothes: {
        title: ["CLOTHES", "上衣"],
        info: ["TEE", "襯衫", "大學服", "外套"],
        colors: ["#5580b5", "#8baad1"],
        imgs: [
          require("../assets/c1.jpeg"),
          require("../assets/c2.jpeg"),
          require("../assets/c3.jpeg"),
          require("../assets/c4.jpeg"),
          require("../assets/c5.jpeg"),
          require("../assets/c6.jpeg"),
          require("../assets/c7.jpeg"),
          require("../assets/c8.jpeg")
        ],
        name: [
          "秋季新款拼接格子長袖襯衣11935289",
          "秋季新款拼接格子長袖襯衣11935289",
          "秋季新款拼接格子長袖襯衣11935289",
          "秋季新款拼接格子長袖襯衣11935289",
          "秋季新款拼接格子長袖襯衣11935289",
          "秋季新款拼接格子長袖襯衣11935289",
          "秋季新款拼接格子長袖襯衣11935289",
          "秋季新款拼接格子長袖襯衣11935289"
        ],
        cost: [390, 390, 390, 390, 390, 390, 390, 390]
      }
    };
  },
  components: { SubLinks, Products }
};
</script>

<style scoped>
.content {
  width: 85%;
  margin: 0 auto;
}
.bottomBanner {
  margin-top: 2rem;
}
img {
  width: 100%;
}
.links {
  display: flex;
  padding: 1.5rem 0;
  justify-content: space-between;
}
.link {
  display: inline-block;
  font-size: 28px;
  color: #2f2f2f;
  text-decoration: none;
  padding: 2px 0 2px 43px;
  background: url("../assets/fishIcon.png") 0 center no-repeat;
  transition: all 0.3s ease;
}
.link:hover {
  color: #888;
  padding-left: 50px;
}
.iconImg {
  height: 100%;
}
.products {
  display: flex;
  flex-wrap: wrap;
}
@media (min-width: 992px) {
  .link {
    width: 25%;
  }
}
</style>
