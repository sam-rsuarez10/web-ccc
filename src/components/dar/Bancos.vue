<template>
  <div class="container">
    <div class="col-md-12 ocultar-div2">
      <div class="tituloBanco" id="banco">Elige tu banco</div>
    </div>
    <br /><br /><br />
    <div class="cards-list" id="card">
      <div class="card 1" style="border-radius: 40%">
        <div class="card_image">
          <a href="https://banco.santander.cl/personas" target="blank">
            <img src="../../assets/santander.png"
          /></a>
        </div>
      </div>
      <div class="card 2" style="border-radius: 40%">
        <div class="card_image">
          <a
            href="https://www.bancoestado.cl/imagenes/comun2008/banca-en-linea-personas.html"
            target="blank"
            ><img src="../../assets/banco estado.png"
          /></a>
        </div>
      </div>
      <div class="card 3" style="border-radius: 40%">
        <div class="card_image">
          <a
            href="https://login.bancochile.cl/bancochile-web/persona/login/index.html#/login"
            target="blank"
            ><img src="../../assets/bancoChile.png"
          /></a>
        </div>
      </div>
      <div class="card 4" style="border-radius: 40%">
        <div class="card_image">
          <a
            href="https://ww2.bci.cl/corporativo/banco-en-linea/personas"
            target="blank"
            ><img src="../../assets/bci.png"
          /></a>
        </div>
      </div>
      <div class="card 5" style="border-radius: 40%">
        <div class="card_image">
          <a
            href="https://www.scotiabank.cl/login/personas/?nocache=true&_ga=2.173479459.1458961304.1627688889-1288830479.1627688889"
            target="blank"
            ><img src="../../assets/scotiabank.png"
          /></a>
        </div>
      </div>
      <div class="card 6" style="border-radius: 40%">
        <div class="card_image">
          <a
            href="https://banco.itau.cl/wps/portal/newolb/web/login"
            target="blank"
            ><img src="../../assets/itau.png"
          /></a>
        </div>
      </div>
    </div>
    <br /><br /><br /><br />
  </div>
</template>
<style scoped>
.cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.card a {
  width: 200px;
  height: 200px;
}

.card {
  margin: 30px auto;
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
}

.card .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: cover;
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}

.title-white {
  color: white;
}

.title-black {
  color: black;
}

.navbar-toggler {
  border: none !important;
}

@media all and (max-width: 500px) {
  .card-list {
    flex-direction: column;
  }
}

@media screen and (max-width: 991px) {
  .ocultar-div {
    display: none;
  }
  .cuerpo {
    text-align: center;
  }
  .titulo {
    text-align: center;
  }
}
@media screen and (max-width: 491px) {
  .ocultar-div2 {
    display: none;
  }
}
@media screen and (min-width: 491px) {
  .ocultar-div3 {
    display: none;
  }
  .tituloBanco {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 300%;
    text-align: center;
    color: rgb(90, 41, 0);
  }

  .banco {
    font-family: "Montserrat", sans-serif;
    font-size: 110%;
  }
}
</style>