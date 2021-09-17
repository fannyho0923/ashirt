<template>
  <div>
    <p class="ulTit">商品櫥窗</p>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <a class="link" href="">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["品牌誌", "上衣", "下衣", "配件", "鞋子", "包包"]
    };
  }
};
</script>

<style scoped>
.ulTit {
  color: #000000;
  font-size: 14px;
  text-align: left;
  line-height: 28px;
  font-family: Arial;
  border-bottom: 1px dotted #000;
  margin-bottom: 0;
  position: relative;
  padding-bottom: 3px;
}
.link {
  text-decoration: none;
  display: block;
  line-height: 20px;
  padding: 8px 2px;
  color: #505050;
}
</style>
