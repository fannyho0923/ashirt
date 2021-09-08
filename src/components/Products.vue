<template>
  <div class="card">
    <a href="">
      <div class="top">
        <img class="img" :src="imgUrl" alt="" />
      </div>
      <div class="bottom">
        <div class="name">{{ name }}</div>
        <div class="cost">NT.{{ cost }}</div>
      </div>
    </a>
    <div class="btn">
      <div class="likeBox">
        <a class="like" href=""></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: { type: String },
    cost: { type: Number },
    name: { type: String }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.top {
  padding: 15px;
  overflow: hidden;
}
.bottom {
  padding: 15px;
}
.card {
  display: inline-block;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 50%;
}
.name {
  font: 16px;
  text-align: center;
  margin: 0;
}
.cost {
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
}
.img {
  width: 100%;
  height: auto;
  transition: all 0.25s linear;
}
.img:hover {
  transform: scale(1.2, 1.2);
}
.btn {
  position: relative;
}
.likeBox {
  position: absolute;
  right: 15px;
  bottom: 0;
}
.like {
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #7e7e7e;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 0;

  background-image: url("../assets/like.png");
}

@media (min-width: 992px) {
  .card {
    width: 25%;
  }
}
</style>
