<template>
  <div class="container">
    <div class="body">
      <div class="copyRight">
        Copyrights © 2016
        <b>有間衣店男裝服飾</b> All Rights Reserved.
      </div>
      <div class="siteInfo">
        <ul>
          <li class="tel">
            <label for="">電話</label>
            0955-796582
          </li>
          <li class="address">
            <label for="">地址</label>
            ashirt520418@gmail.com
          </li>
          <li class="time">週一至週五 10:00-12:00 / 13:30-18:00</li>
        </ul>
      </div>
      <div class="powered">
        <a href="">RWD響應式網站設計</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
label {
  display: none;
}
.container {
  margin-top: 50px;
  font-size: 12px;
  background-color: black;
  color: white;

  padding: 1.5rem 0 2rem 0;
}
.body {
  display: flex;
  width: 85%;
  margin: 0 auto;
}
.siteInfo {
  display: flex;
  margin-left: 2rem;
  width: 45%;
  justify-content: space-evenly;
}
.tel::before {
  content: "TEL:";
}
.address::before {
  content: "E-mail:";
}
ul {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
a {
  text-decoration: none;
  color: #7d7d7d;
}
.powered {
  width: 25%;
  text-align: right;
  /* float: right;
  text-align: right; */
}
</style>
