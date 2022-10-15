<template>
  <div class="container multimedia">
    <div class="row">
      <div class="col-md-5 txt">
        <h1 data-aos="fade-right" data-aos-duration="1500">
          Participa de nuestras transmiciones
        </h1>
        <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">
          Compartimos nuestra reunión principal el domingo a las 11 hrs en vivo
          y en directo
        </h2>

        <v-divider
          data-aos="fade-right"
          data-aos-duration="1500"
          inset
          data-aos-delay="250"
        ></v-divider>
        <br />
        <h3
          data-aos="fade-right"
          data-aos-duration="1500"
          inset
          data-aos-delay="250"
        >
          Síguenos en nuestras redes sociales y no te pierdas todo el contenido
          que tenemos para tí.
        </h3>
        <div class="botones">
          <button
            type="button"
            class="btn btn-primary btn-lg"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <a
              href="https://www.youtube.com/c/IglesiaCCCLasCondes"
              target="_blank"
              >Transmiciones</a
            >
          </button>
          <button
            type="button"
            class="btn btn-primary btn-lg"
            id="botonMedio"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <a href="#" target="_blank">Saber más</a>
          </button>
        </div>
      </div>
      <div class="col-md-7 carusel" data-aos="fade-up" data-aos-duration="1500">
        <b-carousel
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#fff"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            img-src="https://i.ibb.co/0c0vLyp/stream.png"
          ></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://i.ibb.co/rFPnGSP/stream1.png">
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide
            img-src="https://i.ibb.co/jyfLd2y/stream2.png"
          ></b-carousel-slide>
        </b-carousel>
      </div>
      <!-- <v-carousel class="col-md-7 carusel" hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
};
// export default {
//   data() {
//     return {
//       items: [
//         {
//           src: require("../assets/stream.jpg"),
//         },
//         {
//           src: require("../assets/stream1.jpg"),
//         },
//         {
//           src: require("../assets/stream2.jpg"),
//         },
//       ],
//     };
//   },
// };
</script>

<style scoped>
.carusel img {
  border-radius: 25px !important;
}

.multimedia {
  text-align: right;
}

.multimedia h1 {
  font-size: 250%;
  font-family: rustica, sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #078e3e;
}
.multimedia h2 {
  font-size: x-large;
  font-family: rustica, sans-serif;
  font-weight: 500;
  font-style: normal;
}

.multimedia h3 {
  font-size: large;
  font-family: rustica, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: rgba(0, 0, 0, 0.336);
}

.multimedia a {
  font-size: x-large;
  font-family: rustica, sans-serif;
  font-weight: 100;
  font-size: medium;
  color: white;
}

hr {
  color: #078e3e !important;
  height: 100% !important;
}

.botones {
  text-align: right;
  transition-duration: 0.2s !important;
}

.botones button {
  margin-top: 40px;
  border-radius: 50px;
  background-color: tomato !important;
  border: none;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 0.2s;
  margin-left: 15px !important;
  z-index: 999;
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
@media screen and (min-width: 767px) {
  .center {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .multimedia {
    text-align: center;
  }
  .grupos button {
    margin-bottom: 40px !important;
  }
  .grupos {
    text-align: center;
  }
  .derecha {
    display: none;
  }
  .center {
    display: block;
  }
  .botones {
    text-align: center;
  }
}
</style>


