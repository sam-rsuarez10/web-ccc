<template>
  <div class="container">
    <div class="row justify-content-center" id="trans">
      <div class="col-md-12 ocultar-div2">
        <div
          class="tituloOfrenda"
          id="datos"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Datos para transferencia
        </div>
      </div>
      <div class="col-md-12 ocultar-div3">
        <div
          class="tituloOfrenda2"
          id="datos2"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Datos para transferencia
        </div>
      </div>
    </div>
    <br /><br /><br /><br />
    <div class="row justify-content-center" id="banco1">
      <div
        class="col-md-8 banco"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        Banco: <span style="color: grey">BCI</span>
      </div>
      <div class="col-md-1 ocultar-div"></div>
    </div>
    <br />
    <div class="row justify-content-center">
      <div
        class="col-md-8 banco"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        Tipo de Cuenta: <span style="color: grey">Cuenta Corriente</span>
      </div>
      <div class="col-md-1 ocultar-div"></div>
    </div>
    <br />
    <div
      class="row justify-content-center"
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-delay="500"
    >
      <div class="col-md-8 banco">
        Cuenta: <span style="color: grey">70425698</span>
      </div>
      <div class="col-md-1 ocultar-div">
        <button
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          type="button"
          class="btn btn-secondary portapapeles"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-content="Copiado en portapapeles"
          id="btn1"
          @click="copy"
        >
          Copiar
        </button>
      </div>
    </div>
    <br />
    <div class="row justify-content-center">
      <div class="col-md-8 banco">
        Rut: <span style="color: grey">65062463-7</span>
      </div>
      <div class="col-md-1 ocultar-div">
        <button
          type="button"
          class="btn btn-secondary portapapeles"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-content="Copiado en portapapeles"
          id="btn1"
          @click="copy2"
        >
          Copiar
        </button>
      </div>
    </div>
    <br />
    <div class="row justify-content-center">
      <div class="col-md-8 banco">
        Nombre: <span style="color: grey">Iglesia CCC Las Condes</span>
      </div>
      <div class="col-md-1 ocultar-div">
        <button
          type="button"
          class="btn btn-secondary portapapeles"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-content="Copiado en portapapeles"
          id="btn1"
          @click="copy3"
        >
          Copiar
        </button>
      </div>
    </div>
    <br />
    <div class="row justify-content-center">
      <div class="col-md-8 banco">
        Mail: <span style="color: grey">lascondesiglesiaCCC@gmail.com</span>
      </div>
      <div class="col-md-1 ocultar-div">
        <button
          type="button"
          class="btn btn-secondary portapapeles"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-content="Copiado en portapapeles"
          id="btn1"
          @click="copy4"
        >
          Copiar
        </button>
      </div>
    </div>
    <br />
    <div class="row justify-content-center">
      <div class="col-md-9">
        <button
          type="button"
          class="btn btn-secondary portapapeles"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-content="Copiado en portapapeles"
          id="btn1"
          @click="copy5"
        >
          Copiar Todo
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tituloOfrenda {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 300%;
  text-align: center;
  color: rgb(0, 99, 13);
}
.tituloOfrenda2 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 200%;
  text-align: left;
}

.tituloBanco {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 300%;
  text-align: center;
  color: rgb(0, 99, 13);
}

.banco {
  font-family: "Montserrat", sans-serif;
  font-size: 110%;
}

#btn1 {
  border: none;
  background-color: rgba(255, 99, 71, 0.676);
}

#btn1:hover {
  background-color: tomato;
}

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
}
</style>
<script>
export default {
  el: "#container",
  data() {
    return {
      text: "70425698",
      text2: "65062463-7",
      text3: "Iglesia CCC Las Condes",
      text4: "lascondesiglesiaCCC@gmail.com",
      text5:
        "Banco: BCI \nTipo de Cuenta: Cuenta Corriente \nCuenta: 70425698 \nRut: 65062463-7 \nNombre: Iglesia CCC Las Condes \nMail: lascondesiglesiaCCC@gmail.com",
    };
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.text);
    },
    copy2() {
      navigator.clipboard.writeText(this.text2);
    },
    copy3() {
      navigator.clipboard.writeText(this.text3);
    },
    copy4() {
      navigator.clipboard.writeText(this.text4);
    },
    copy5() {
      navigator.clipboard.writeText(this.text5);
    },
  },
};
</script>
