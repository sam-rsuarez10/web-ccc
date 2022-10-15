<template>
  <div class="encuentranos">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 novo">
          <h1 data-aos="fade-right" data-aos-duration="1500">
            Donde Encontrarnos
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            Encuentranos en el segundo piso de Novotel ubicado en Alonso de
            Córdova 5199 todos los domingos de 11:00 a 12:30 hrs.
          </p>
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide carro"
            data-bs-ride="carousel"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 mapa">
          <div class="cajota" data-aos="fade-up" data-aos-duration="1500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.276653126656!2d-70.58926758255615!3d-33.416031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf1790a7e519%3A0x95dbb3922c381386!2sM%C3%A1laga%2089%2C%20oficina%20101%2C%20Las%20Condes%2C%207550144%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1651509191644!5m2!1ses-419!2scl"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
iframe {
  border-radius: 15px !important;
  box-shadow: rgba(0, 0, 0, 0.178) 0.1em 0.1em 0.2em;
}

.novo h1 {
  font-family: rustica, sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #078e3e;
}

.novo p {
  font-size: larger;
  font-family: rustica, sans-serif;
  font-weight: 500;
  font-style: normal;
}

.novo img {
  border-radius: 15px !important;
  max-height: 320px;
}
@media screen and (max-width: 1232px) {
  iframe {
    width: 550px !important;
  }
}
@media screen and (max-width: 1128px) {
  iframe {
    width: 500px !important;
  }
}
@media screen and (max-width: 1034px) {
  iframe {
    width: 450px !important;
    height: 415px !important;
  }
}
@media screen and (max-width: 926px) {
  iframe {
    width: 400px !important;
    height: 415px !important;
  }
}
@media screen and (max-width: 820px) {
  iframe {
    width: 350px !important;
    height: 410px !important;
  }
}
@media screen and (max-width: 760px) {
  iframe {
    width: 510px !important;
    height: 415px !important;
  }
}
@media screen and (max-width: 516px) {
  iframe {
    width: 490px !important;
  }
}
@media screen and (max-width: 496px) {
  iframe {
    width: 470px !important;
  }
}

@media screen and (max-width: 480px) {
  iframe {
    width: 450px !important;
  }
}

@media screen and (max-width: 460px) {
  iframe {
    width: 430px !important;
  }
}
@media screen and (max-width: 440px) {
  iframe {
    width: 410px !important;
  }
}
@media screen and (max-width: 420px) {
  iframe {
    width: 390px !important;
  }
}
@media screen and (max-width: 400px) {
  iframe {
    width: 370px !important;
  }
}
@media screen and (max-width: 380px) {
  iframe {
    width: 340px !important;
  }
}
@media screen and (max-width: 360px) {
  iframe {
    width: 330px !important;
  }
}
@media screen and (max-width: 340px) {
  iframe {
    width: 310px !important;
  }
}
</style>