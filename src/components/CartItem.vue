<template>
  <table>
    <thead>
      <tr>
        <th class="tit">商品圖</th>
        <th class="tit">商品名稱/規格</th>
        <th class="tit">單價</th>
        <th class="tit">數量</th>
        <th class="tit">合計</th>
        <th class="tit">刪除</th>
      </tr>
    </thead>
    <tr class="border" v-for="(item, index) in arr" :key="index">
      <td>
        <a href="">
          <img class="goodsImg" :src="item[0].imgUrl" alt="" />
        </a>
      </td>
      <td>
        <a class="name" href=""> {{ item[0].name }} </a>
        <br />
        {{ item[0].size }}
      </td>
      <td>${{ item[0].perCost }}</td>
      <td>{{ item[0].num }}</td>
      <td>${{ item[0].cost }}</td>
      <td>
        <div @click.prevent="removeItem(index)" class="deleteBtn">刪除</div>
      </td>
    </tr>
    <tr>
      <td colspan="6" class="totalCost">總計：${{ total }}</td>
    </tr>
    <tr>
      <td colspan="6">
        <div class="btns">
          <div class="lptBtn">
            <a class="shopBtn" href="">
              <span class="shopBtnIcon"></span>繼續購物
            </a>
            <a v-if="arr.length" class="payBtn" href=""
              ><span class="payBtnIcon"></span>我要結帳</a
            >
          </div>
          <div class="rptBtn">
            <a class="deleteAllBtn" @click.prevent="deleteAll" href="">
              <span v-if="arr.length" class="deleteAllBtnIcon"></span
              >刪除所有選購商品
            </a>
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  created() {
    // console.log(JSON.parse(localStorage.getItem("allGoods")));
    // console.log(JSON.parse(localStorage.getItem("allGoods")).length);
    if (localStorage.getItem("allGoods")) {
      this.arr = JSON.parse(localStorage.getItem("allGoods"));
    }
    // console.log(this.arr);
  },
  computed: {
    total() {
      var res = 0;
      for (let index = 0; index < this.arr.length; index++) {
        res += this.arr[index][0].cost;
      }
      return res;
    }
  },
  methods: {
    deleteAll() {
      localStorage.setItem("allGoods", []);
      localStorage.setItem("cartCount", 0);
      window.location.reload();
    },
    removeItem(data) {
      var count = JSON.parse(localStorage.getItem("cartCount"));
      count = count - this.arr[data][0].num;
      localStorage.setItem("cartCount", count);
      this.arr.splice(data, 1);
      this.arr = JSON.stringify(this.arr);
      localStorage.setItem("allGoods", this.arr);
      window.location.reload();
    }
  }
};
</script>

<style scoped>
.tit {
  background-color: #f8f8f8;
  border-bottom: 0 none;
  color: #888;
  text-align: center;
  line-height: 24px;
}
table {
  /* background-color: burlywood; */
  width: 100%;
}
td {
  text-align: center;
  padding: 5px 0;
}
.goodsImg {
  max-width: 100px;
  vertical-align: middle;
}
.totalCost {
  border-top: 1px solid rgb(0, 0, 0);
  text-align: right;
}
.shopBtn {
  display: flex;
  width: fit-content;
  justify-content: center;
  text-decoration: none;
  background: #272727;
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 0;
  font-size: 13px;
  padding: 5px 5px;
}
.shopBtnIcon {
  display: inline-block;
  width: 13px;
  height: 15px;
  background: url(../assets/cart.png) no-repeat;
  vertical-align: text-bottom;
  background-size: 100% auto;
  margin-bottom: -5px;
}
.payBtn {
  display: flex;
  width: fit-content;
  justify-content: center;
  text-decoration: none;
  background: #272727;
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 0;
  font-size: 13px;
  padding: 5px 5px;
  margin-left: 1rem;
}
.payBtnIcon {
  display: inline-block;
  width: 13px;
  height: 15px;
  background: url(../assets/cart.png) no-repeat;
  vertical-align: text-bottom;
  background-size: 100% auto;
  margin-bottom: -5px;
}
.deleteBtn {
  width: fit-content;
  cursor: pointer;
  justify-content: center;
  text-decoration: none;
  color: #272727;
  text-align: center;
  font-size: 13px;
  margin: 0 auto;
}
.deleteAllBtn {
  display: flex;
  width: fit-content;
  justify-content: center;
  text-decoration: none;
  background: #272727;
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 0;
  font-size: 13px;
  padding: 5px 5px;
}
.deleteAllBtnIcon {
  display: inline-block;
  width: 13px;
  height: 15px;
  background: url(../assets/cart.png) no-repeat;
  vertical-align: text-bottom;
  background-size: 100% auto;
  margin-bottom: -5px;
}
.border {
  border-top: 1px dotted rgb(124, 121, 121);
}
.lptBtn {
  display: flex;
}
.btns {
  display: flex;
  justify-content: space-between;
}
.name {
  text-decoration: none;
  color: #ff766f;
}
</style>
