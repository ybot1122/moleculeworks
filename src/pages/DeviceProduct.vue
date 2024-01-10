<template>
  <div>
    <Banner :title="config.title"></Banner>
    <v-container class=py-10>
        <Tabs :options="config.options"></Tabs>
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
    config: MenuConfig.items[2]
  }),
  methods: {
    onClick: function(url) {
      if (url != null) this.$router.push(url);
    }
  }
};
</script>
