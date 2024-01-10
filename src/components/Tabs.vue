<template>
  <v-layout>
    <v-tabs
      background-color="#E0E0E0"
      mobile-break-point="1024px"
      active-class="activeTab"
      height="auto"
      show-arrows
      center-active
    >
      <v-tabs-slider color="orange darken-3"></v-tabs-slider>
      <!-- Navigation Tabs -->
      <v-tab v-for="(item, i) in options" :key="i" :href="`#tab-${i}`">
        <span class="tabin">{{ item.name }}</span>
      </v-tab>
      <!-- Tab content item -->
      <v-tab-item v-for="(item, i) in options" :key="i" :value="'tab-' + i">
        <v-container>
          <!-- Use expansion panel if item has children -->
          <v-expansion-panels v-if="item.children != null">
            <v-expansion-panel v-for="(child,i) in item.children" :key="i">
              <v-expansion-panel-header>{{ child.name }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card-text v-if="child.ppt != null">
                  Details:
                  <div class="pdfWrapper">
                  <iframe :src="child.link" allowfullscreen></iframe>
                </div>
                </v-card-text>

                <iframe v-if="child.video != null" :src="child.video" width="444" height="333"></iframe>
                <v-carousel v-if="child.videos" height="380">
                  <v-carousel-item v-for="(v, index) in child.videos" :key="index">
                    <iframe :src="v" width="444" height="333"></iframe>
                  </v-carousel-item>
                </v-carousel>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <!-- Otherwise use simple card -->
          <v-card v-else tile>
            <v-card-title>{{item.name}}</v-card-title>
            <v-card-subtitle>{{item.subtitle}}</v-card-subtitle>
            <v-card-text>
              <div v-if="item.ppt">
                <p>
                  {{ pricing == true ? "Details and Pricing:" : "Details:" }}
                  <br />
                </p>
                <div class="pdfWrapper">
                  <iframe :src="item.link" allowfullscreen></iframe>
                </div>
              </div>
              <p v-if="!item.ppt">
                {{ pricing == true ? "Details and Pricing:" : "Details:" }}
                <br />Coming Soon.
              </p>
            </v-card-text>
            <iframe v-if="item.video != null" :src="item.video" width="444" height="333"></iframe>
            <v-carousel v-if="item.videos" height="380">
              <v-carousel-item v-for="(v, index) in item.videos" :key="index">
                <iframe :src="v" width="444" height="333"></iframe>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-layout>
</template>

<script>
export default {
  name: "Drawer",
  props: {
    options: Array,
    pricing: Boolean
  },
  created: function() {
    window.addEventListener("resize", function() {
      var mapElement = document.getElementById("ppt");
      mapElement.style.height = mapElement.offsetWidth * 0.75;
    });
  },
  destroyed: function() {
    window.removeEventListener("resize", function() {
      var mapElement = document.getElementById("ppt");
      mapElement.style.height = mapElement.offsetWidth * 0.75;
    });
  },
  data: () => ({}),
  methods: {
    getIframe(url) {
      `<iframe width="560" height="315" :src="${url}" allowfullscreen></iframe>`;
    }
  }
};
</script>

<style scoped>
.tabin {
  display: inline-block;
  white-space: normal;
  font-weight: bold;
  font-size: 18px;
  max-width: 200px;
  word-wrap: break-word;
  padding: 10px 0;
}
.v-tab:last-of-type {
  border-right: none;
}
.pdfWrapper {
  position: relative;
  padding-bottom: 75%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}
.pdfWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>