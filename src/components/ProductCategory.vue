<template>
  <div v-on:qs-change="count += 0.1">
    <h3 v-for="(str) in title" :key="str">{{str}}</h3>
    <h4 v-for="(str) in subtitle" :key="str">{{str}}</h4>
    <table>
      <tr>
        <th>No</th>
        <th>Part name</th>
        <th>Material</th>
        <th>Specification</th>
        <th>Part price, $/each</th>
        <th>Quantity</th>
      </tr>
      <tr v-for="(item) in items" v-bind:key="item.no">
        <td>{{ item.no }}</td>
        <td>{{ item.partName }}</td>
        <td>{{ item.material }}</td>
        <td>{{ item.specification }}</td>
        <td>{{ item.partPrice }}</td>
        <td>
          <QuantitySelector v-bind:onQuantityChange="onQuantityChange(item.no)"/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import QuantitySelector from './QuantitySelector'

export default {
  name: "ProductCategory",
  components: {
    QuantitySelector,
  },
  props: {
    title: Array,
    subtitle: Array,
    items: Array,
    onQuantityChange: Function,
  },
  created: () => {},
  data: () => ({
    count: 0
  }),
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

td, th {
  border: 1px black solid;
  padding: 5px;
  margin: 0px;
}
</style>