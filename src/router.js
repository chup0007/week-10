import Vue from "vue";
import Router from "vue-router";
import Products from "./views/productslist.vue";
import singleproduct from "./views/singleproduct.vue";
import productinventory from "./views/productinventory.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Products
    },
    {
      path: "/product/:id",
      name: "single-product",
      component: singleproduct,
      props: true
    },
    {
      path: "/inventory",
      name: "products-inventory",
      component: productinventory,
      props: true
    }
  ]
});
