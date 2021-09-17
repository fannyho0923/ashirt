<template>
  <div>
    <Header :changing="Number(isChang)" />
    <main class="content">
      <aside class="leftBox">
        <section class="top">
          <p class="searchTit">產品搜尋</p>
          <div class="top-bottom">
            <input placeholder="請輸入關鍵字" type="text" />
            <a class="searchBtn" href="">產品搜尋</a>
          </div>
        </section>
        <section class="bottom">
          <Window />
        </section>
      </aside>
      <aside class="rightBox">
        <div class="product">
          <p class="bigTit">商品明細</p>
          <div class="ptBox">
            <div class="lptBox">
              <div class="mainImgBox">
                <img class="mainImg" :src="imgUrl" alt="" />
              </div>
              <!-- <div></div> -->
            </div>
            <div class="rptBox">
              <p class="infoTit">{{ name }}</p>
              <ul>
                <li>售價：${{ cost }}</li>
                <li>
                  顏色：
                  <div class="colorBox">
                    <label
                      @click="addColor(item)"
                      class="colorLabel"
                      v-for="(item, index) in color"
                      :key="index"
                      for=""
                      >{{ item }}</label
                    >
                  </div>
                </li>
                <br />
                <li>
                  尺碼：
                  <div class="sizeBox">
                    <label class="sizeLabel" @click="addSize(1)" for=""
                      >M</label
                    >
                    <label class="sizeLabel" @click="addSize(2)" for=""
                      >L</label
                    >
                    <label class="sizeLabel" @click="addSize(3)" for=""
                      >XL</label
                    >
                    <label class="sizeLabel" @click="addSize(4)" for=""
                      >2XL</label
                    >
                  </div>
                </li>
              </ul>
              <!-- 右邊下單區 -->
              <div class="now">
                <p v-if="currentColor">{{ currentColor }}</p>
                <p v-if="currentSize">{{ currentSize }}</p>
              </div>
              <div class="enterBox">
                <input
                  class="numInput"
                  placeholder="1"
                  v-model="num"
                  type="number"
                />
                <div class="btns">
                  <a @click.prevent="addGoods" class="cartBtn" href="">
                    <span class="cartBtnIcon"></span>加入購物車
                  </a>
                  <a @click.prevent="likeGoods" class="likeBtn" href=""
                    ><span class="likeBtnIcon"></span>加入收藏</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="introTit">
              商品詳細介紹<small class="introSmall">Product Introduction</small>
            </p>
          </div>
          <!-- 多張商品圖 -->
          <div class="allImg">
            <img class="mutiImg" :src="imgUrl" alt="" />
            <img class="mutiImg" :src="imgUrl" alt="" />
            <img class="mutiImg" :src="imgUrl" alt="" />
            <img class="mutiImg" :src="imgUrl" alt="" />
          </div>
          <p class="noteTit">
            商品注意事項
            <small class="noteSmall">PRODUCT NOTES</small>
          </p>
          <br />
          <!-- 商品注意事項 -->
          <div class="note">
            ▲
            商品下單後7-10天出貨。請確認時間上可以接受,在下單喔!若比較急的訂單,請不要下單唷!
            <br />
            ▲ 請注意!
            <span class="red">
              香水味~洗衣味道~個人體味~商品有任何非商品原本氣味~</span
            >都不能做退換喔!我們擁有原樣商品對照核實!吊牌拆了不能退換喔
            <br />
            ▲
            依照消費者保護法規定，線上購物消費者均享有商品到貨七天猶豫期之權益。
            <br />
            <br />
            <span class="red">
              退換貨運費承擔,若不是商品問題或者發錯貨!退換貨運費由買家承擔!請確認可以接受再購買!</span
            >
            <br />
            <br />
            退回商品必須是全新狀態且完整包裝(
            保持商品、附件、包裝、廠商紙箱及所有附隨文件或資料之完整性)，否則恕不接受退訂。
            <br />
            ▲商品銷售網頁上特別載明之商品，均不接受退訂。
            <br />
            ▲退貨辦法：
            請將商品無損及完整包裝，連同配件贈品，勿缺件，外盒勿損毀，請以廠商寄送時的包裝再原封備妥，若紙箱已遺失，請於商品外盒上再包裝，勿直接讓商品原廠外盒粘貼宅配單或書寫文字，原廠外盒損毀或是商品缺件，將無法受理退貨或視損毀程度折扣退款金額。(到貨七天期限內申請，逾期未辦理將無法銷退。)
          </div>
        </div>
      </aside>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Window from "@/components/Window.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      name: "",
      cost: 0,
      color: [],
      size: [],
      cartCount: 0,
      imgUrl: "",
      currentSize: "",
      currentColor: "",
      num: 1,
      buyArr: null,
      isChang: 0
    };
  },
  components: {
    Window,
    Header,
    Footer
  },
  created() {
    if (localStorage.getItem("allGoods")) {
      this.buyArr = JSON.parse(localStorage.getItem("allGoods"));
    }
    ////////////////
    if (localStorage.getItem("goodInfo")) {
      var data = JSON.parse(localStorage.getItem("goodInfo"));
      this.name = data.name;
      this.cost = data.cost;
      this.imgUrl = data.imgUrl;
      this.color = data.color;
    }
  },
  methods: {
    addGoods() {
      if (!this.currentColor) {
        alert("請選擇Color");
        return;
      } else if (!this.currentSize) {
        alert("請選擇Size");
        return;
      } else {
        var nowBuyArr = [
          {
            name: this.name,
            perCost: this.cost,
            cost: this.cost * this.num,
            imgUrl: this.imgUrl,
            color: this.color,
            size: this.size,
            num: this.num
          }
        ];
        alert("加入成功");
        if (!this.buyArr) {
          this.buyArr = nowBuyArr;
        } else {
          this.buyArr.push(nowBuyArr);
        }
        var setArr = JSON.stringify(this.buyArr);
        localStorage.setItem("buyArr", setArr);
        if (localStorage.getItem("cartCount")) {
          this.cartCount = JSON.parse(localStorage.getItem("cartCount"));
          this.cartCount = Number(this.cartCount);
          this.num = Number(this.num);
          this.cartCount = this.cartCount + this.num;
          this.isChang = this.cartCount;
          var cartNum = JSON.stringify(this.cartCount);
          localStorage.setItem("cartCount", cartNum);
        } else {
          this.isChang = this.num;
          var cartNum2 = JSON.stringify(this.num);
          localStorage.setItem("cartCount", cartNum2);
        }
        nowBuyArr = null;
        this.currentSize = "";
        this.currentColor = "";
        this.num = 1;
        return;
      }
    },
    likeGoods() {
      this.likeCount = localStorage.getItem("likes");
      // console.log(this.likeCount);
    },
    addColor(c) {
      this.currentColor = c;
      // console.log(this.currentColor);
    },
    addSize(s) {
      switch (s) {
        case 1:
          this.currentSize = "M";
          break;
        case 2:
          this.currentSize = "L";
          break;
        case 3:
          this.currentSize = "XL";
          break;
        case 4:
          this.currentSize = "2XL";
          break;
      }
      console.log(this.currentSize);
    }
  }
};
</script>

<style scoped>
.top {
  background-color: #888;
  padding: 15px;
  width: 60%;
  float: right;
}
.content {
  display: flex;
  margin-top: 3rem;
}
.leftBox {
  width: 25%;
}
.rightBox {
  width: 70%;
}
.searchBtn {
  text-decoration: none;
  background: #272727;
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 0;
  font-size: 13px;
  margin-top: 1rem;
  padding: 6px 12px;
}
.top-bottom {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.bottom {
  width: 60%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  float: right;
  margin-top: 2rem;
}

.noteTit {
  color: #ff766f;
  font-size: 18px;
  padding: 10px 0 15px;
  border-bottom: 1px solid #e4e4e4;
}
.noteSmall {
  margin-left: 10px;
  color: #888;
  text-transform: uppercase;
  font-size: 65%;
  font-weight: 400;
  line-height: 1;
}
.red {
  color: #ff0000;
}
.note {
  font-size: small;
  line-height: 20.8px;
  flex-wrap: wrap;
}
.product {
  width: 90%;
  margin: 0 auto;
}
.bigTit {
  color: #000;
  font-size: 30px;
  padding: 5px 10px 15px;
  margin-top: 0;
}
.introTit {
  color: #ff766f;
  font-size: 18px;
  padding: 10px 0 15px;
  border-bottom: 1px solid #e4e4e4;
}
.introSmall {
  margin-left: 10px;
  color: #888;
  text-transform: uppercase;
}
.ptBox {
  display: flex;
  justify-content: space-between;
}
.lptBox {
  width: 48%;
}
.rptBox {
  width: 48%;
}
.enterBox {
  background-color: #ebebeb;
  padding: 10px;
  margin-bottom: 10px;
}
.numInput {
  display: block;
  width: 98%;
  padding: 5px;
  margin-bottom: 5px;
}
.sizeLabel {
  cursor: pointer;
  width: 24%;
  margin-right: 10px;
  margin-bottom: 15px;
  background: #999;
  min-width: 50px;
  text-align: center;
  color: #fff;
  border: inherit;
  padding: 3px 0;
  font-weight: inherit;
}
.colorLabel {
  cursor: pointer;
  display: inline-block;
  margin-right: 10px;
  margin-top: 5px;
  padding: 2px;
  border: 1px solid transparent;
  color: #aeaeae;
}
.mainImg {
  width: 100%;
}
.infoTit {
  margin-top: 0;
  margin-bottom: 10px;
  color: #000;
  font-size: 28px;
  border-bottom: 0 none;
}
li {
  margin-bottom: 5px;
  color: #8a8a8a;
}

.likeBtn {
  text-decoration: none;
  bottom: -38px;
  right: 50%;
  background: #bbb;
  color: #fff;
  vertical-align: middle;
  margin-top: 3px;
  padding: 5px 15px 6px;
  margin-left: 3px;
}
.likeBtnIcon {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url(../assets/like.png) no-repeat;
  vertical-align: text-bottom;
  background-size: 100% auto;
  margin-bottom: -5px;
}
.cartBtn {
  text-decoration: none;
  bottom: -38px;
  right: 50%;
  background: #bbb;
  color: #fff;
  vertical-align: middle;
  margin-top: 3px;
  padding: 5px 15px 6px;
}
.cartBtnIcon {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url(../assets/cart.png) no-repeat;
  vertical-align: text-bottom;
  background-size: 100% auto;
  margin-bottom: -5px;
}
.btns {
  display: flex;
}
.sizeBox {
  margin-top: 5px;
  width: 60%;
  display: flex;
  justify-content: space-evenly;
}
.now {
  display: flex;
  width: 20%;
  color: #ff766f;
  justify-content: space-between;
  margin-bottom: 10px;
}
.mutiImg {
  width: 95%;
  margin-bottom: 15px;
}
.allImg {
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
