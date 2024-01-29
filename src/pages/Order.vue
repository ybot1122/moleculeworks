<template>
  <div>
    <Banner :title="config.title"></Banner>
    <h3>To order, <a href="https://drive.google.com/file/d/1-hcqJ3It213m8KYIYXKKB9LSVoGgOPP0/view?usp=sharing" target="_blank">fill out a form</a> and email to support@moleculeworks.com</h3>
    <ProductList></ProductList>
    <v-container>
      <Tabs :options="config.options"
      :pricing=true
      ></Tabs>
    </v-container>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Tabs from '../components/Tabs'
import ProductList from '../components/ProductList'
import { MenuConfig } from '../config/MenuConfig'
export default {
  name: "Contact",
  components: {
    Banner,
    Tabs,
    ProductList
  },
  data: () => ({
    config: MenuConfig.items[3],
    formUrl: process.env.VUE_APP_ORDER_FORM
  }),
  methods: {
    onClick: function(url) {
      if (url != null) this.$router.push(url);
    }
  }
};
</script>
<style scoped>
h3 {
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  font-size: 24px;
}
</style>