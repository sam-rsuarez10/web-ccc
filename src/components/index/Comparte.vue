<template>
  <div class="box">
    <div id="culto" class="section">
      <div class="content">
        <h1>Cultos</h1>
        <div class="container">
          <p class="cultoP">
            Nos reunimos todos los domingos. Te esperamos a las 11:00 hrs.
            Puedes asistir presencial o ver nuestra transmisión en vivo.
          </p>
          <div class="row botones">
            <v-btn class="col-md-4 b1" outlined rounded dark>Presencial</v-btn>
            <v-btn class="col-md-4 b1" outlined rounded dark>Virtual</v-btn>
          </div>
        </div>
      </div>
      <div class="overlay"></div>
    </div>
    <div id="grupos" class="section">
      <div class="content">
        <h1>Grupos</h1>
        <p class="gruposP">
          Conoce las distintas actividades que tenemos para que puedas compartir
          con personas de tu edad, tus intereses y crecer juntos.
        </p>

        <v-btn class="col-md-4 b2" outlined rounded dark>Saber más</v-btn>
      </div>
      <div class="overlay"></div>
    </div>
    <div id="formacion" class="section">
      <div class="content">
        <h1>Estudios</h1>
        <p class="fomacionP">
          Aprende más de la biblia y crece en la fe. Ve nuestros diferentes
          cursos y ven al que más se adecue a tu necesidad.
        </p>

        <v-btn class="col-md-4 b3" outlined rounded dark>Saber más</v-btn>
      </div>
      <div class="overlay"></div>
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

.box {
  display: flex;
  height: 70vh;
}

.section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  color: #fff;
  transition: flex 0.4s ease;
  position: relative;
}

.section .overlay {
  background-color: rgba(0, 0, 0, 0.423);
  width: 100%;
  height: 100%;
  position: absolute;
  transition: background-color 0.8s ease;
}

.section .content {
  z-index: 2;
  text-align: center;
}

.section:hover {
  flex: 2;
}

.section:hover .overlay {
  background-color: rgba(0, 0, 0, 0.735);
}

#culto p {
  display: none;
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}

#grupos p {
  display: none;
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}

#formacion p {
  display: none;
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}

.b1 {
  display: none;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}

.b2 {
  display: none;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}

.b3 {
  display: none;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}

#culto:hover p {
  display: block;
}

#culto:hover .b1 {
  display: block;
}

#grupos:hover p {
  display: block;
}

#grupos:hover .b2 {
  display: block;
}

#formacion:hover p {
  display: block;
}

#formacion:hover .b3 {
  display: block;
}

#culto {
  background-image: url(https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
}

#grupos {
  background-image: url(https://images.unsplash.com/photo-1593896385987-16bcbf9451e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1597&q=80);
}

#formacion {
  background-image: url(https://images.unsplash.com/photo-1610050731641-f855ccdaf3f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
}
</style>