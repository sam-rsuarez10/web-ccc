<template>
  <div class="container">
    <b-navbar toggleable="lg" type="ligth" class="navv">
      <b-navbar-brand href="/index">
        <img
          src="../../assets/logoColor.png"
          class="d-inline-block align-top"
          width="160"
          height="95"
        />
      </b-navbar-brand>

      <b-navbar-toggle
        target="nav-collapse"
        onclick="divLogin()"
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ms-auto">
              <b-nav-item
                class="m-md-2 navLista"
                style="color: white !important"
              >
                <router-link class="nav-link" to="/nosotros">Sobre Nosotros</router-link>
              </b-nav-item>

              <b-nav-item class="m-md-2 navLista">
                <router-link class="nav-link"  to="/ayuda">Ayuda</router-link>
              </b-nav-item>

              <b-nav-item class="m-md-2 navLista">
                <router-link class="nav-link"  to="/grupos">Grupos</router-link>
              </b-nav-item>

              <b-nav-item right class="m-md-2 navLista">
                <router-link class="nav-link"  to="/formacion">Formación</router-link>
              </b-nav-item>

              <b-nav-item class="m-md-2">
                <router-link class="nav-link"  to="/dar">Dar</router-link>
              </b-nav-item>

              <b-nav-item class="m-md-2">
                <router-link class="nav-link"  to="/misiones">Misiones</router-link>
              </b-nav-item>

              <b-nav-item class="m-md-2">
                <router-link class="nav-link"  to="/contactanos">Contactanos</router-link>
              </b-nav-item>
              <b-nav-item class="m-md-2">
                <router-link class="nav-link"  to="/mi-ccc">Mi CCC</router-link>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
    </b-navbar>
  </div>
</template>
<style scoped>
.navv {
  color: white !important;
  text-align: center !important;
  font-size: large;
  font-family: skolar-sans-latin, sans-serif;
  font-weight: 600;
  font-style: normal;
}

</style>