<template>
  <div class="body">
    <aside class="lpt">
      <div v-bind:style="{ backgroundColor: prop.colors[0] }" class="tit">
        <a href="">
          <span>{{ prop.title[0] }}</span>
          <br />
          <span>{{ prop.title[1] }}</span></a
        >
      </div>
    </aside>
    <aside class="rpt">
      <div v-for="(item, index) in prop.info" :key="index">
        <a
          class="item"
          v-bind:style="{ backgroundColor: prop.colors[1] }"
          href=""
          >{{ item }}</a
        >
      </div>
    </aside>
  </div>
</template>

<script>
export default { props: { prop: { type: Object } } };
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
.body {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
}
.lpt {
  width: 48%;
}
.rpt {
  width: 48%;
}
.tit {
  text-align: center;
  padding: 94px 0;
  font-size: 36px;
  position: relative;
}
.item {
  display: block;
  font-size: 20px;
  text-align: center;
  margin-bottom: 25px;
  padding: 13px 0;
  transition: all 0.3s ease;
}
</style>
