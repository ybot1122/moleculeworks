<template>
  <v-app>
    <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">
    <header>
       <v-toolbar>
        <v-toolbar-title>
          <a href="/"><v-img width=200 :src="require('./assets/MWlogo.png')"></v-img></a>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- Hamburger menu (hidden for large screen) -->
        <v-menu class="hidden-md-and-up">
            <template v-slot:activator="{ on }">
              <v-btn
                dark
                icon
                v-on="on"
              >
                <v-icon color="grey darken-2" class="hidden-md-and-up">fas fa-list</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in menu"
                :key="i"
                @click="onClick(item.id)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <!-- Regular menu (hidden for small screen) -->
          <v-toolbar-items class="hidden-sm-and-down" tile>
          <v-btn v-for="(item, i) in menu" :key="i" :to="`/${item.id}`">
            <span style="white-space: normal;">
            {{ item.title }}
          </span>
          </v-btn>
        </v-toolbar-items>
       </v-toolbar>
    </header>
    <div class="content">
      <router-view />
    </div>
    <v-footer class="footer text-center" height="auto" color="grey darken-2" dark>
      <v-layout justify-center row wrap>
        <v-flex color="orange darken-2" dark py-3 text-xs-center white--text xs12>
          &copy;2024 —
          <strong>Molecule Works Inc.</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import { MenuConfig } from "./config/MenuConfig";

export default {
  name: "App",
  components: {
  },
  created: () => {
    console.log(MenuConfig.items); // eslint-disable-line no-console
  },
  data: () => ({
    menu: MenuConfig.items
  }),
  methods: {
    onClick: function(id) {
      if (id != null) this.$router.push(id);
    }
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Barlow&display=swap');
.v-application--wrap {
   font-family: 'Barlow', sans-serif;
 }
</style>

<style scoped>
html,
body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  flex: 1 0 auto;
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  padding: 0px;
}

.footer {
  flex-shrink: 0;
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  padding: 20px;
}

* {
  box-sizing: border-box;
}
</style>
