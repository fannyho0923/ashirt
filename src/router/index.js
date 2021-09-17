import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Cart from "@/views/Cart.vue";
import Goods from "@/views/goods.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    },
    {
      path: "/goods",
      name: "Goods",
      component: Goods
    }
  ]
});
