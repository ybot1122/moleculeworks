<template>
  <div>
    <h3 v-for="(str, i) in title" :key="i">{{str}}</h3>
    <h4 v-for="(str, i) in subtitle" :key="i">{{str}}</h4>
  </div>
</template>

<script>
export default {
  name: "ProductCategory",
  components: {},
  props: {
    title: String,
    subtitle: String
  },
  created: () => {},
  data: () => ({})
};
</script>
<style scoped>
h3 {
  text-align: left;
  margin-top: 0px;
  padding: 0px;
  font-size: 24px;
}

h4 {
  text-align: left;
}
</style>