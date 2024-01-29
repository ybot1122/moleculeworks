<template>
  <div>
    <h3>{{title}}</h3>
    <h4>{{subtitle}}</h4>
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
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  font-size: 24px;
}

h4 {
  text-align: center;
}
</style>