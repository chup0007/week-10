<template>
  <div>
    <productinfo :product="product" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import productinfo from "@/components/productinfo.vue";
export default {
  components: { productinfo },
  name: "single-product",
  data() {
    return { product: "" };
  },
  props: { id: { type: Number, required: true } },
  created() {
    console.log(this.id);
    this.product = this.getProductById(this.id);
  },
  computed: {
    ...mapGetters(["getProductById"])
  }
};
</script>
