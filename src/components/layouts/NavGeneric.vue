<template>
  <div class="container">
    <b-navbar toggleable="lg" type="ligth" class="navv">
      <b-navbar-brand href="#">
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
          <b-nav-item class="navLista">
            <router-link to="/nosotros">Sobre Nosotros</router-link>
          </b-nav-item>

          <b-nav-item class="m-md-2 navLista">
                <router-link to="/ayuda">Ayuda</router-link>
          </b-nav-item>

          <b-nav-item-dropdown text="Grupos" class="navLista">
            <b-dropdown-item><a href="">Protada</a></b-dropdown-item>
            <b-dropdown-item><a href="">Niños</a></b-dropdown-item>
            <b-dropdown-item><a href="">Jóvenes</a></b-dropdown-item>
            <b-dropdown-item><a href="">Mujeres</a></b-dropdown-item>
            <b-dropdown-item><a href="">Varones</a></b-dropdown-item>
            <b-dropdown-item><a href="">Reuniones en Casa</a></b-dropdown-item>
            <b-dropdown-item><a href="">Directorio</a></b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Formación" right class="navLista">
            <b-dropdown-item><a href="">Fundamentos</a> </b-dropdown-item>
            <b-dropdown-item
              ><a href="">Escuela de Liderazgo</a></b-dropdown-item
            >
            <b-dropdown-item><a href="">Estudios Biblicos</a></b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item>Dar</b-nav-item>

          <b-nav-item>Misiones</b-nav-item>

          <b-nav-item>Contactanos</b-nav-item>

          <b-nav-item-dropdown text="Mi CCC" right class="navLista">
            <b-dropdown-item><a href="">Cuenta</a> </b-dropdown-item>
          </b-nav-item-dropdown>
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