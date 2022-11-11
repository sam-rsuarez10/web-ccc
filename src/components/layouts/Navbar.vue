<template>
  <section>
    <header>
      <div class="container">
        <b-navbar toggleable="lg" type="dark" class="navv">
          <b-navbar-brand href="#">
            <img
              src="../../assets/logo3.png"
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
                <router-link to="/nosotros">Sobre Nosotros</router-link>
              </b-nav-item>

              <b-nav-item class="m-md-2 navLista">
                <router-link to="/ayuda">Ayuda</router-link>
              </b-nav-item>

              <b-nav-item class="m-md-2 navLista">
                <router-link to="/grupos">Grupos</router-link>
              </b-nav-item>

              <b-nav-item right class="navLista">
                <router-link to="/formacion">Formación</router-link>
              </b-nav-item>

              <b-nav-item class="m-md-2">
                <router-link to="/dar">Dar</router-link>
              </b-nav-item>

              <b-nav-item class="m-md-2">
                <router-link to="/misiones">Misiones</router-link>
              </b-nav-item>

              <b-nav-item class="m-md-2">
                <router-link to="/contactanos">Contactanos</router-link>
              </b-nav-item>
              <b-nav-item class="m-md-2">
                <router-link to="/mi-ccc">Mi CCC</router-link>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>

    <div class="banner">
      <video autoplay muted loop class="tagline-video">
        <source src="../../assets/videoNav.mp4" type="video/mp4" />
      </video>
      <div class="overlay"></div>
      <div class="banner-innner">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="banner-left">
                <div class="titulo">
                  <h1>BIENVENIDO</h1>
                </div>
                <div class="subtitulo">
                  <h2>A CENTRO CRECIMIENTO CRISTIANO LAS CONDES</h2>
                </div>
                <div class="botones">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    id="botonMedio"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <a href="#" target="_blank">Reuniones</a>
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    id="botonMedio"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <a href="#" target="_blank">¿En que te ayudamos?</a>
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    id="botonMedio"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <a href="#" target="_blank">Grupos</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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


.navv a {
  color: tomato;
  text-decoration: none;
}

.banner {
  height: 80vh;
  position: relative;
  width: 100%;
  overflow: hidden;
}
.banner video {
  width: 100%;
  position: absolute;
  overflow: hidden;
}
.banner-innner {
  padding: 200px 0;
}

header {
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 11;
}
.banner-left {
  text-align: center;
  margin: 0 auto;
}

.titulo {
  margin-top: 70px;
  font-size: 350% !important;
  font-family: montserrat, sans-serif;
  font-weight: 700;
  font-style: normal;
}

.subtitulo {
  color: #fff;
  font-family: rustica, sans-serif;
  font-weight: 700;
  font-style: normal;
}

.overlay {
  /* background: #3f51b569; */
  background: #00000069;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: auto;
}

.banner-left h1 {
  color: #fff;
  text-transform: uppercase;
  font-size: 42px;
  font-weight: 800;
  line-height: 50px;
}

.banner-left p {
  color: #fff;
  letter-spacing: 0.5px;
}

.botones button {
  border-radius: 50px;
  background-color: tomato !important;
  border: none;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 0.2s;
  margin-left: 15px !important;
  transition-duration: 0.2s !important;
}

.botones a {
  color: white !important;
  text-decoration: none;
  transition-duration: 0.2s !important;
}
.botones button:hover {
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









