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
        :color="clothes.color[index]"
      />
    </div>
    <!-- 褲系 -->
    <SubLinks :prop="jeans" />
    <div class="products">
      <Products
        class="p"
        v-for="(item, index) in jeans.imgs"
        :key="index"
        :imgUrl="jeans.imgs[index]"
        :cost="jeans.cost[index]"
        :name="jeans.name[index]"
        :color="jeans.color[index]"
      />
    </div>
    <!-- 鞋類 -->
    <SubLinks :prop="shoes" />
    <div class="products">
      <Products
        class="p"
        v-for="(item, index) in shoes.imgs"
        :key="index"
        :imgUrl="shoes.imgs[index]"
        :cost="shoes.cost[index]"
        :name="shoes.name[index]"
        :color="shoes.color[index]"
      />
    </div>
    <!-- 品牌誌 -->
    <SubLinks :prop="brand" />
    <div class="products">
      <Products
        class="p"
        v-for="(item, index) in brand.imgs"
        :key="index"
        :imgUrl="brand.imgs[index]"
        :cost="brand.cost[index]"
        :name="brand.name[index]"
        :color="brand.color[index]"
      />
    </div>
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
          "秋冬新款撞色圓領衛衣11965863",
          "秋裝新款衛衣刺繡字母情侶裝休閒連帽開衫11479047",
          "拼接假兩件套頭工裝外套11874198",
          "簡約貼標工裝風長袖襯衫11939856",
          "秋款連帽寬鬆衛衣11914251",
          "秋裝新款連帽壓花衛衣外套12147316",
          "連帽繡花男衛衣外套11952854"
        ],
        cost: [390, 490, 590, 290, 190, 890, 790, 990],
        color: [
          ["黑色", "藍色"],
          ["紅色", "藍色"],
          ["黑色", "藍色"],
          ["白色", "藍色"],
          ["黑色", "藍色"],
          ["黑色", "白色"],
          ["白色", "藍色"],
          ["黑色", "綠色"]
        ]
      },
      jeans: {
        title: ["PANTS", "褲系"],
        info: ["牛仔褲", "休閒褲", "運動褲", "短褲"],
        colors: ["#4aa4a5", "#8ecdcd"],
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
          "秋冬新款撞色圓領衛衣11965863",
          "秋裝新款衛衣刺繡字母情侶裝休閒連帽開衫11479047",
          "拼接假兩件套頭工裝外套11874198",
          "簡約貼標工裝風長袖襯衫11939856",
          "秋款連帽寬鬆衛衣11914251",
          "秋裝新款連帽壓花衛衣外套12147316",
          "連帽繡花男衛衣外套11952854"
        ],
        cost: [390, 490, 590, 290, 190, 890, 790, 990],

        color: [
          ["黑色", "藍色"],
          ["紅色", "藍色"],
          ["黑色", "藍色"],
          ["白色", "藍色"],
          ["黑色", "藍色"],
          ["黑色", "白色"],
          ["白色", "藍色"],
          ["黑色", "綠色"]
        ]
      },
      shoes: {
        title: ["SHOES", "鞋類"],
        info: ["帆布鞋", "運動鞋", "休閒鞋", "涼鞋"],
        colors: ["#b55560", "#d3717c"],
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
          "秋冬新款撞色圓領衛衣11965863",
          "秋裝新款衛衣刺繡字母情侶裝休閒連帽開衫11479047",
          "拼接假兩件套頭工裝外套11874198",
          "簡約貼標工裝風長袖襯衫11939856",
          "秋款連帽寬鬆衛衣11914251",
          "秋裝新款連帽壓花衛衣外套12147316",
          "連帽繡花男衛衣外套11952854"
        ],
        cost: [390, 490, 590, 290, 190, 890, 790, 990],

        color: [
          ["黑色", "藍色"],
          ["紅色", "藍色"],
          ["黑色", "藍色"],
          ["白色", "藍色"],
          ["黑色", "藍色"],
          ["黑色", "白色"],
          ["白色", "藍色"],
          ["黑色", "綠色"]
        ]
      },
      brand: {
        title: ["BRAND", "品牌誌"],
        info: ["RED重磅古著", "工裝MADEN", "米格薯叔", "復古皮具"],
        colors: ["#4aa4a5", "#8ecdcd"],
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
          "秋冬新款撞色圓領衛衣11965863",
          "秋裝新款衛衣刺繡字母情侶裝休閒連帽開衫11479047",
          "拼接假兩件套頭工裝外套11874198",
          "簡約貼標工裝風長袖襯衫11939856",
          "秋款連帽寬鬆衛衣11914251",
          "秋裝新款連帽壓花衛衣外套12147316",
          "連帽繡花男衛衣外套11952854"
        ],
        cost: [390, 490, 590, 290, 190, 890, 790, 990],

        color: [
          ["黑色", "藍色"],
          ["紅色", "藍色"],
          ["黑色", "藍色"],
          ["白色", "藍色"],
          ["黑色", "藍色"],
          ["黑色", "白色"],
          ["白色", "藍色"],
          ["黑色", "綠色"]
        ]
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
  width: 100%;
  display: flex;
  padding: 1.5rem 0;
  justify-content: space-between;
  flex-wrap: wrap;
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
