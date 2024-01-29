<template>
  <input type="number" v-model.number="positiveNumber" @input="filterNonPositive" v-on:change="onQuantityChange(positiveNumber)">
</template>

<script>
export default {
  name: "QuantitySelector",
  components: {},
  props: {
    onQuantityChange: Function,
  },
  created: () => {},
  data: () => ({
    positiveNumber: 0
  }),
  methods: {
    filterNonPositive() {
      if (this.positiveNumber < 0 || isNaN(this.positiveNumber) || !Number.isInteger(this.positiveNumber)) {
          this.positiveNumber = 0;
      }
    }
  }
};
</script>
<style scoped>
input {
  width: 75px;
  padding: 5px;
  border: 1px black solid;
}
</style>