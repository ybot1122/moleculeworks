<template>
  <div>
    <Banner :title="config.title"></Banner>
    <h3>To order, <a href="https://drive.google.com/file/d/1-hcqJ3It213m8KYIYXKKB9LSVoGgOPP0/view?usp=sharing" target="_blank">fill out a form</a> and email to support@moleculeworks.com</h3>
    <v-container>

      <h3>MemXcel unit using transparent polycarbonate body</h3>
      <h4>Model: MX-1-PC</h4>
      <table>
        <tr>
          <th>No</th>
          <th>Part name</th>
          <th>Material</th>
          <th>Specification</th>
          <th>Part Price, $/each</th>
        </tr>
        <tr>
          <td>MX-1-PC-kit</td>
          <td>Set</td>
          <td>All the parts listed needed</td>
          <td>
            All the parts listed below, plus i) two porous Nickel membrane sheets, ii) two NaA zeolite/metal sheet zeolite membranes; iii) one additional inner and outer gaskets
          </td>
          <td>
            $699
          </td>
        </tr>

      </table>

    </v-container>
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
import { MenuConfig } from '../config/MenuConfig'
export default {
  name: "Contact",
  components: {
    Banner,
    Tabs
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