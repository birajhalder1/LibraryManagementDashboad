<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Log out</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :color="color"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
        :src="bg"
        dark
        app
      >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>BIRAJ HALDER</v-list-item-title>
              <v-list-item-subtitle>Administrator</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            router
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-switch
        v-model="miniVariant"
        class="ma-2"
        label="Mini variant"
      ></v-switch>

      </v-navigation-drawer>

  </v-app>
</template>

<script>
export default {

 data () {
      return {
        drawer: true,
        items: [
          { title: 'Dashboard', route:"/", icon: 'mdi-view-dashboard'},
          { title: 'Admin Register', route:"/createAdmin", icon: 'mdi-view-dashboard' },
          { title: 'User Register', route:"/createUser", icon: 'mdi-image' },
          { title: 'Book Creation', route:"/createBook", icon: 'mdi-help-box' },
          { title: 'All User', route:"/userList", icon: 'mdi-view-dashboard' },
          { title: 'Book List', route:"/bookList", icon: 'mdi-image' },
          { title: 'Transaction', route:"/transaction", icon: 'mdi-help-box' },
        ],
        color: 'primary',
        miniVariant: false,
        expandOnHover: false
      }
    },
    computed: {
      bg () {
        return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
      },
    },
};
</script>