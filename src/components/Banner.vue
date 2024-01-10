<template>
  <div class="banner">
    <v-card width="100%" layout >
      <v-img :src="require('../assets/bg.jpg')" height="100" aspect-ratio="2.75">
      <v-card-title class="justify-center">
        <h2>{{ title }}</h2>
      </v-card-title>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Banner",
  components: {},
  props: {
    title: String
  },
  created: () => {},
  data: () => ({})
};
</script>

<style scoped>
.banner {
  padding: 0
}
.v-card__title h2 {
  color:white;
  text-align: center;
  vertical-align: middle;
  word-break: break-word;
  font-size: 32px;
  font-weight: bold;
}
.v-card__title {
  text-align: center;
  margin-top: 15px;
}
</style>