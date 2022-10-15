<template>
  <div class="container">
    <div class="row">
      <form class="row g-3 contacto">
        <div class="col-md-12">
          <h1 data-aos="fade-right" data-aos-duration="1500">
            Si quieres escribirnos
          </h1>
          <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
            Envia tus preguntas y comentarios
          </h2>
        </div>
        <div
          class="col-md-6"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          <label for="nombreInput" class="form-label">Nombre</label>
          <input class="form-control" id="nombreInput" placeholder="Nombre" />
        </div>
        <div
          class="col-md-6"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          <label for="emailInput" class="form-label">Correo Electronico</label>
          <input
            type="email"
            class="form-control"
            id="emailInput"
            placeholder="nombre@ejemplo.com"
          />
        </div>
        <div
          class="col-md-12"
          style="margin-bottom: 40px"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <label for="texBoxContacto" class="form-label"
            >Example textarea</label
          >
          <textarea
            class="form-control"
            id="texBoxContacto"
            rows="8"
          ></textarea>
        </div>
        <button class="btn btn-primary" @click="showBModal(item.email)" >Enviar</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.contacto h1 {
  text-align: center;

  font-family: rustica, sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #078e3e;
}

.contacto h2 {
  text-align: center;
  font-size: x-large;
  font-family: rustica, sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-bottom: 50px;
}

.contacto label {
  font-family: rustica, sans-serif;
  font-weight: 500;
  font-style: normal;
}

.contacto button {
  margin: 0 auto;
  border-radius: 50px;
  background-color: tomato !important;
  border: none;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 0.2s;
  width: 300px !important;
  margin-bottom: 100px;
}

.contacto button:hover {
  size: 10% !important;
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}
</style>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    
  },
})
</script>
