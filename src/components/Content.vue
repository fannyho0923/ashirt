<template>
  <div class="content">
    <div class="links">
      <a class="link about" href="">ABOUT US </a>
      <a class="link news" href="">ALL NEWS</a>
      <a class="link fb" href="">FACEBOOK</a>
      <a class="link service" href="">SERVICE</a>
    </div>
    <div class="bottomBanner">
      <a href="">
        <img src="@/assets/aboutPic.jpeg" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
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
@media (min-width: 992px) {
  .link {
    width: 25%;
  }
}
</style>
