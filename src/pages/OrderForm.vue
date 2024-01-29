<template>
  <div>
    <Banner title="Order Form"></Banner>
    <ProductList></ProductList>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
export default {
  name: "OrderForm",
  components: {
    Banner,
    ProductList
  },
  data: () => ({}),
  methods: {}
};
</script>
<style scoped>
</style>