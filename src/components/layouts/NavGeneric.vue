<template>
  <div>
    <div class="container">
      <b-navbar-brand href="/index" class="mx-auto d-block">
        <img
          src="../../assets/logoColor.png"
          class="mx-auto d-block"
          width="160"
          height="95"
        />
      </b-navbar-brand>
    </div>
    <b-navbar toggleable="lg" type="dark" class="navv" style="background-color: #1A3926 !important;">

      <b-navbar-toggle
        target="nav-collapse"
        onclick="divLogin()"
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="mx-auto">
              <b-nav-item
                class="m-md-2 navLista"
                style="color: white !important"
              >
                <router-link class="nav-link" to="/nosotros">Nosotros</router-link>
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
                <router-link class="nav-link"  to="/misiones"><span>Misiones</span></router-link>
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

.navbar-nav.navbar-center {
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
}

span:hover {
  size: 10% !important;
  transition: 0.2s !important;
  transition-delay: 0ms !important;
  animation-delay: 0ms !important;
  transition-duration: 0.2s !important;
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}

</style>