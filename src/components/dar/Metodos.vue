<template>
  <div class="container">
    <div class="row">
      <div class="tuto">¿Como Ofrendar?</div>
      <div style="margin: 0 auto !important">
        <section id="sec">
          <ul>
            <li>
              <span class="fa fa-cross"></span>
              <h3>Diezmos y Ofrendas</h3>
              <p>
                Los diezmos y Ofrendas son la forma Bíblica de agradecer y
                bendecir la obra de Dios y su iglesia. Se usa para el
                funcionamiento de todo lo que se realiza en la iglesia y que
                requiere recursos materiales y para el sostenimiento de los
                pastores.
              </p>
              <h4 id="wow">Ejemplo de monto:</h4>
              <div class="d-grid gap-2">
                <button type="button" class="btn btn-primary btn-lg bbb">
                  $10.000
                </button>
              </div>
            </li>
            <li>
              <span class="fas fa-hand-paper"></span>
              <h3>CCC Ayuda</h3>
              <p>
                CCC Ayuda es una iniciativa que nació a principios de 2020 el
                cual tiene como objetivo bendecir y ayudar a todas las familias
                que estén pasando por dificultades y escasez. <br />
                Para que podamos distinguir que tu ofrenda es para esta causa
                termina el monto de tu transferencia con un <strong>$1</strong>.
              </p>
              <h4 id="wow1">Ejemplo de monto:</h4>
              <div class="d-grid gap-2">
                <button type="button" class="btn btn-primary btn-lg bbb">
                  $10.001
                </button>
              </div>
            </li>
            <li>
              <span class="fa fa-church"></span>
              <h3>Plan Pro-templo</h3>
              <p>
                El plan Pro-templo es la campaña de nuestra iglesia para pagar
                el pie de nuestro futuro local el cual nos permitirá tener
                nuestras actividades y transmisiones. Si quieres saber más al
                respecto presiona
                <a href="https://youtu.be/wuIWs-bF3es" target="_blank" id="ccc"
                  >aquí</a
                >. <br />
                Para que podamos distinguir que tu ofrenda es para esta causa
                termina el monto de tu transferencia con un <strong>$2</strong>.
              </p>
              <h4>Ejemplo de monto:</h4>
              <div class="d-grid gap-2">
                <button type="button" class="btn btn-primary btn-lg bbb">
                  $10.002
                </button>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tuto {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 300%;
  text-align: center;
  color: rgb(0, 99, 13);
}
#sec {
  font-family: "Poppins", sans-serif !important;
  padding: 50px 0;
  background: #fff;
  text-align: center;
  word-wrap: break-word;
}
#sec h3 {
  margin-top: 20px !important;
  font-weight: 200;
  font-size: 30px;
  color: rgb(0, 99, 13);
}
#sec ul {
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  list-style: none;
}
#sec ul li {
  padding: 40px;
  width: 300px;
  transition: box-shadow 0.3s;
}
#sec ul li:hover {
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
#sec ul li:hover span {
  color: rgb(0, 99, 13);
}
#sec ul li:hover p {
  color: #555;
}

#sec ul li:hover h4 {
  color: #555;
  transition: width 0.3s;
}

#sec ul li:hover .bbb {
  background-color: rgb(0, 99, 13) !important;
  transition: width 0.3s;
}

#sec ul li:hover h3 {
  color: rgb(0, 99, 13);
}
#sec ul li:hover h3:after {
  width: 25px;
}
#sec ul li span {
  font-size: 2.6em;
  display: block;
  transition: color 0.3s;
  color: #a2a2a2;
}
#sec ul li span:before,
#sec ul li span:after {
  position: static;
}
#sec ul li h3 {
  color: #6f6f6f;
  display: inline-block;
  font-size: 24px;
  font-weight: 100;
  transition: color 0.3s;
}
#sec ul li h3:after {
  content: "";
  position: relative;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  display: block;
  width: 40px;
  height: 1px;
  background: #6f6f6f;
  transition: width 0.3s;
}
#sec ul li p {
  margin-top: 25px;
  color: #a2a2a2;
  text-align: left;
  text-indent: 1em;
  font-size: 16px;
  line-height: 26px;
  transition: color 0.3s;
}
h4 {
  font-family: "Raleway", sans-serif;
  text-align: left;
  font-size: 100% !important;
  color: #a2a2a2;
}

.bbb {
  color: white;
  background-color: rgba(0, 99, 13, 0.596) !important;
  border: none !important;
  cursor: auto !important;
  transition: color 1s;
}

#ccc {
  color: tomato;
}

#ccc:hover {
  color: rgb(0, 99, 13);
}

#wow {
  margin-top: 95px !important;
}
#wow1 {
  margin-top: 70px !important;
}
</style>