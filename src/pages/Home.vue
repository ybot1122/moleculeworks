<template>
  <div>
    <v-card dark>
      <v-img :src="require('../assets/background.jpg')" aspect-ratio="2.5">
        <div class="motto text-center">
          <h2 class="pb-2">Efficiency for a sustainable world</h2>
          <div  class="hidden-sm-and-down">
          <p>___________</p>
          <p></p>
          <h3>Through molecular-level design and engineering, we develop and manufacture advanced material products that enable innovative solutions to separation and molecular conversion processes</h3>
          </div>
        </div>
      </v-img>
    </v-card>
    <v-container class="text-center py-12">
      <v-layout column>
        <div id="header-carousel">
          <v-carousel height="600px" eager :show-arrows=false continuous cycle interval=4000>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <h3 class="subheading">{{ item.text }}</h3>
              <v-img :src="item.src" contain max-height="500px" width="100%" eager />
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "App",
  created: () => {},
  data: () => ({
    items: [
      {
        src: require("../assets/memxcel.png"),
        text: "MemXcel Available for Order"
      },
      {
        src: require("../assets/porous1.png"),
        text: "3-dimensional networked porous metal structures"
      },
      {
        src: require("../assets/porous2.png"),
        text: "Coating of smaller pore sizes and different materials"
      },
      {
        src: require("../assets/sheet1.png"),
        text: "50µm- thin porous metal sheet of sub-micrometer pore size"
      },
      {
        src: require("../assets/sheet2.png"),
        text: "55µm- thin molecular sieve membrane sheet"
      }
    ]
  })
};
</script>

<style scoped>
.motto {
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 3em 2em;
}
.motto h2 {
  color: #fbb034;
}
h1 {
  color: #999
}
.subheading {
  margin-bottom: 10px;
}
</style>