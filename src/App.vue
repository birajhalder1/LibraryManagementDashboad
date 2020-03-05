<template>
<div class="bg">
  <v-app>
    <v-content>
      <router-view />
      <NavBar />
    </v-content>
  </v-app>
</div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",

  components: {
    NavBar
  },

 data () {
      return {
        //
    }
  }
}
</script>

<style scoped>
  .bg{
    background-color: brown;
  }
</style>