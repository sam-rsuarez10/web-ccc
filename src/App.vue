<template>
  <v-app>
    <Navbar v-if="$route.name == 'Index'" />
    <NavGeneric v-if="$route.name !== 'Index'" />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/layouts/Navbar.vue";
import Footer from "./components/layouts/Footer.vue";
import NavGeneric from "./components/layouts/NavGeneric.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    NavGeneric,
  },

  Servirdata: () => ({
    //
  }),
};
</script>
<style scoped>
.separador {
  margin-top: 50px !important;
  margin-bottom: 50px !important;
}
</style>
