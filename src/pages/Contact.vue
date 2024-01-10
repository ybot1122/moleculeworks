<template>
  <div>
    <Banner title="Company and Contact"></Banner>
    <v-container>
      <!-- Contact -->
      <v-layout column>
        <v-flex>
          <v-img :src="require('../assets/mail.png')" class="my-3" contain height="100"></v-img>
        </v-flex>
        <v-flex>
          <h3 class="text-center">support@moleculeworks.com</h3>
        </v-flex>
        <v-flex>
          <h4 class="text-center">Product Order ■ Careers ■ Collaboration ■ General Information</h4>
        </v-flex>
      </v-layout>
      <!-- Company -->
      <div v-for="(item,i) in config" :key="i">
        <v-layout class="py-3" column>
          <h2 class="pb-2">{{ item.title }}</h2>
          <p v-html="item.description"></p>
          <v-divider v-if="i != config.length - 1"></v-divider>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import { CompanyConfig } from "../config/CompanyConfig";
export default {
  name: "Contact",
  components: {
    Banner
  },
  data: () => ({
    config: CompanyConfig
  }),
};
</script>

<style scoped>
h3 {
  color: #424242;
}
h2:after {
  content: " ";
  display: block;
  height: 2px;
  width: 125px;
  background: #ff6700;
}
</style>