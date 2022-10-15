<template>
  <div class="container">
    <h1 class="titulo" data-aos="fade-up" data-aos-duration="1500">
      ¿Como podemos Ayudarte?
    </h1>
    <v-container>
      <div class="row">
        <div class="col-md-4" data-aos="fade-up" data-aos-duration="1500">
          <v-hover class="pa-0">
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto" max-width="344" height="365">
                <v-img
                  src="https://images.unsplash.com/photo-1555817128-342e1c8b3101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                ></v-img>

                <v-card-text>
                  <h2>Orando</h2>
                  Nos comprometemos a orar por todas las peticiones que nos
                  envían.
                </v-card-text>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#ff6347">
                    <v-btn>+Info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </div>
        <div
          class="col-md-4"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <v-hover class="pa-0">
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto" max-width="344" height="365">
                <v-img
                  src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                ></v-img>

                <v-card-text>
                  <h3>Dando</h3>
                  Tendemos una mano a las familias que lo necesitan
                </v-card-text>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#078e3e" class="over">
                    <v-btn>+info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </div>
        <div
          class="col-md-4"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="600"
        >
          <v-hover class="pa-0">
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto" max-width="344" height="365">
                <v-img
                  src="https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                ></v-img>

                <v-card-text>
                  <h2>Escuchando</h2>
                  Apartamos un tiempo para escuchar y acompañar a las personas.
                </v-card-text>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#ff6347">
                    <v-btn>+info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </div>
      </div>
    </v-container>
  </div>
</template>
<style scoped>
h1 {
  text-align: center !important;
  font-family: rustica, sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #078e3e;
  font-size: 300%;
}

h2 {
  font-family: rustica, sans-serif;
  color: #ff6347;
  font-weight: 700;
}

h3 {
  font-family: rustica, sans-serif;
  color: #078e3e;
  font-weight: 700;
}

.over {
  text-align: center;
}
</style>
<script>
export default {
  data: () => ({
    overlay: false,
  }),
};
</script>