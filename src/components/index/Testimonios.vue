<template>
  <div class="caja">
    <br />
    <h1 data-aos="fade-right" data-aos-duration="1500">Testimonios</h1>
    <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
      Una pequeña historia de algunos miembros de nuestra iglesia.
    </p>
    <div class="container testis">
      <figure class="snip1157" data-aos="fade-up" data-aos-duration="1500">
        <blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          voluptate, et ut asperiores nobis cum repudiandae voluptatibus quo eum
          nihil qui porro iusto, ratione omnis amet deleniti? Sapiente,
          necessitatibus mollitia.
          <div class="arrow"></div>
        </blockquote>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg"
          alt="sq-sample3"
        />
        <div class="author">
          <h5>elsa Pallito <span> Miembro hace 3 años</span></h5>
        </div>
      </figure>
      <figure
        class="snip1157 hover"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <blockquote>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
          provident aut distinctio neque eligendi, beatae officia assumenda
          possimus qui, consequuntur perspiciatis necessitatibus atque! Illo
          tempora eaque earum ab sit suscipit!
          <div class="arrow"></div>
        </blockquote>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample27.jpg"
          alt="sq-sample27"
        />
        <div class="author">
          <h5>Armando Casas<span> Miembro hace 4 meses</span></h5>
        </div>
      </figure>
      <figure
        class="snip1157"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="300"
      >
        <blockquote>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
          voluptas, a voluptatem tempora delectus cupiditate tempore asperiores
          veniam vero nisi maiores optio odio, deleniti alias distinctio dolor,
          deserunt voluptates eos.
          <div class="arrow"></div>
        </blockquote>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg"
          alt="sq-sample17"
        />
        <div class="author">
          <h5>Elco Lorado<span> Miembro hace 2 meses</span></h5>
        </div>
      </figure>
    </div>
    <div class="margen"></div>
  </div>
</template>
<style scoped>
.margen {
  height: 100px;
}
.testis {
  margin: 0 auto !important;
}
h1 {
  margin-top: 50px !important;
  text-align: center;
  font-family: rustica, sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #ffffff;
}
p {
  text-align: center;

  color: #ffffff;
}
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,800);
figure.snip1157 {
  font-family: "Raleway", Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 220px;
  max-width: 310px;
  width: 100%;
  color: #333;
  text-align: left;
  box-shadow: none !important;
}
figure.snip1157 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s cubic-bezier(0.25, 0.5, 0.5, 0.9);
  transition: all 0.35s cubic-bezier(0.25, 0.5, 0.5, 0.9);
}
figure.snip1157 img {
  max-width: 100%;
  vertical-align: middle;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  margin: 40px 0 0 10px;
}
figure.snip1157 blockquote {
  display: block;
  border-radius: 8px;
  position: relative;
  background-color: #fafafa;
  padding: 25px 50px 30px 50px;
  font-size: 0.8em;
  font-weight: 500;
  margin: 0;
  line-height: 1.6em;
  font-style: italic;
}
figure.snip1157 blockquote:before,
figure.snip1157 blockquote:after {
  font-family: "FontAwesome";
  content: "\201C";
  position: absolute;
  font-size: 50px;
  opacity: 0.3;
  font-style: normal;
}
figure.snip1157 blockquote:before {
  top: 25px;
  left: 20px;
}
figure.snip1157 blockquote:after {
  content: "\201D";
  right: 20px;
  bottom: 0;
}
figure.snip1157 .arrow {
  top: 100%;
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid #fafafa;
  margin: 0;
  position: absolute;
}
figure.snip1157 .author {
  position: absolute;
  bottom: 45px;
  padding: 0 10px 0 120px;
  margin: 0;
  text-transform: uppercase;
  color: #ffffff;
  -webkit-transform: translateY(50%);
  transform: translateY(50%);
}
figure.snip1157 .author h5 {
  opacity: 0.8;
  margin: 0;
  font-weight: 800;
}
figure.snip1157 .author h5 span {
  font-weight: 400;
  text-transform: none;
  padding-left: 5px;
}

.caja {
  background-color: #212121;
  margin-top: 80px;
}
.testis {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  margin: 0;
}
</style>