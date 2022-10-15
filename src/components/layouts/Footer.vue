<template>
  <div>
    <!------ Include the above in your HEAD tag ---------->

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
    />
    <footer id="dk-footer" class="dk-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-4">
            <div class="dk-footer-box-info">
              <a href="index.html" class="footer-logo">
                <img
                  src="../../assets/logo3.png"
                  alt="footer_logo"
                  class="img-fluid"
                  width="260"
                  height="195"
                />
              </a>
              <p class="footer-info-text">
                Reference site about Lorem Ipsum, giving information on its
                origins, as well as a random Lipsum generator.
              </p>
              <div class="footer-social-link">
                <h3>Follow us</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <!-- End Social link -->
            </div>
            <!-- End Footer info -->
          </div>
          <!-- End Col -->
          <div class="col-md-12 col-lg-8">
            <div class="row">
              <div class="col-md-6">
                <div class="contact-us">
                  <div class="contact-icon">
                    <i class="fa fa-map-o" aria-hidden="true"></i>
                  </div>
                  <!-- End contact Icon -->
                  <div class="contact-info">
                    <h3>Oficina central</h3>
                    <p>Málaga 89, oficina 101, Las Condes</p>
                  </div>
                  <!-- End Contact Info -->
                </div>
                <!-- End Contact Us -->
              </div>
              <!-- End Col -->
              <div class="col-md-6">
                <div class="contact-us contact-us-last">
                  <div class="contact-icon">
                    <i
                      class="fa fa-volume-control-phone"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <!-- End contact Icon -->
                  <div class="contact-info">
                    <h3>9 7794 6444</h3>
                    <p>Contacto de Lunes a Domingo</p>
                  </div>
                  <!-- End Contact Info -->
                </div>
                <!-- End Contact Us -->
              </div>
              <!-- End Col -->
            </div>
            <!-- End Contact Row -->
            <div class="row">
              <div class="col-md-12 col-lg-6">
                <div class="footer-widget footer-left-widget">
                  <div class="section-heading">
                    <h3>Accesos Directos</h3>
                    <span class="animate-border border-black"></span>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Historia</a>
                    </li>
                    <li>
                      <a href="#">Misión y Visión</a>
                    </li>
                    <li>
                      <a href="#">Pilares</a>
                    </li>
                    <li>
                      <a href="#">CCC Ayuda</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">Consejería</a>
                    </li>
                    <li>
                      <a href="#">Testimonios</a>
                    </li>
                    <li>
                      <a href="#">Dar</a>
                    </li>
                    <li>
                      <a href="#">Mi CCC</a>
                    </li>
                  </ul>
                </div>
                <!-- End Footer Widget -->
              </div>
              <!-- End col -->
              <div class="col-md-12 col-lg-6">
                <div class="footer-widget">
                  <div class="section-heading">
                    <h3>Se Parte</h3>
                    <span class="animate-border border-black"></span>
                  </div>
                  <p>
                    <!-- Don’t miss to subscribe to our new feeds, kindly fill the form below. -->
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia nulla quas perferendis maxime deleniti aliquam
                    molestiae perspiciatis. Vel eos tempore molestias
                    repellendus dolor labore adipisci illum cumque, ipsam
                    recusandae quia?
                  </p>

                  <!-- End form -->
                </div>
                <!-- End footer widget -->
              </div>
              <!-- End Col -->
            </div>
            <!-- End Row -->
          </div>
          <!-- End Col -->
        </div>
        <!-- End Widget Row -->
      </div>
      <!-- End Contact Container -->

      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <span>Copyright © 2022, All Right Reserved CCC</span>
            </div>
            <!-- End Col -->
            <div class="col-md-6">
              <div class="copyright-menu">
                <ul>
                  <li>
                    <a href="#">Inicio</a>
                  </li>
                  <li>
                    <a href="#">Mi CCC</a>
                  </li>
                  <li>
                    <a href="#">Cultos</a>
                  </li>
                  <li>
                    <a href="#">Dar</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End col -->
          </div>
          <!-- End Row -->
        </div>
        <!-- End Copyright Container -->
      </div>
      <!-- End Copyright -->
    </footer>
  </div>
</template>
<style scoped>
body {
  color: #ccc;
}
.footer-widget p {
  margin-bottom: 27px;
}
p {
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  color: white;
  line-height: 28px;
}

.animate-border {
  position: relative;
  display: block;
  width: 115px;
  height: 3px;
  background: tomato;
}

.animate-border:after {
  position: absolute;
  content: "";
  width: 35px;
  height: 3px;
  left: 0;
  bottom: 0;
  border-left: 10px solid #fff;
  border-right: 10px solid #fff;
  -webkit-animation: animborder 2s linear infinite;
  animation: animborder 2s linear infinite;
}

@-webkit-keyframes animborder {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  100% {
    -webkit-transform: translateX(113px);
    transform: translateX(113px);
  }
}

@keyframes animborder {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  100% {
    -webkit-transform: translateX(113px);
    transform: translateX(113px);
  }
}

.animate-border.border-white:after {
  border-color: #fff;
}

.animate-border.border-yellow:after {
  border-color: #f5b02e;
}

.animate-border.border-orange:after {
  border-right-color: #007bff;
  border-left-color: #007bff;
}

.animate-border.border-ash:after {
  border-right-color: #eef0ef;
  border-left-color: #eef0ef;
}

.animate-border.border-offwhite:after {
  border-right-color: #f7f9f8;
  border-left-color: #f7f9f8;
}

/* Animated heading border */
@keyframes primary-short {
  0% {
    width: 15%;
  }
  50% {
    width: 90%;
  }
  100% {
    width: 10%;
  }
}

@keyframes primary-long {
  0% {
    width: 80%;
  }
  50% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
}

.dk-footer {
  padding: 75px 0 0;
  background-color: #151414;
  position: relative;
  z-index: 2;
}
.dk-footer .contact-us {
  margin-top: 0;
  margin-bottom: 30px;
  padding-left: 80px;
}
.dk-footer .contact-us .contact-info {
  margin-left: 50px;
}

.dk-footer .contact-us.contact-us-last {
  margin-left: -80px;
}
.dk-footer .contact-icon i {
  font-size: 24px;
  top: -15px;
  position: relative;
  color: tomato;
}

.dk-footer-box-info {
  position: absolute;
  top: -50px;
  background: #202020;
  padding: 40px;
  z-index: 2;
}

@media screen and (max-width: 990px) {
  .dk-footer-box-info {
    position: relative;
  }
  .dk-footer .contact-us.contact-us-last {
    margin-left: 0px;
  }
  .copyright-menu ul {
    text-align: center !important;
  }
  .copyright {
    text-align: center !important;
  }
  .dk-footer .contact-us {
    padding-left: 0px;
  }
  .footer-left-widget {
    padding-left: 0px !important;
  }
}

.dk-footer-box-info .footer-social-link h3 {
  color: #fff;
  font-size: 24px;
  margin-bottom: 25px;
}
.dk-footer-box-info .footer-social-link ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.dk-footer-box-info .footer-social-link li {
  display: inline-block;
}
.dk-footer-box-info .footer-social-link a i {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  background: #000;
  margin-right: 5px;
  color: #fff;
}
.dk-footer-box-info .footer-social-link a i.fa-facebook {
  background-color: #3b5998;
}
.dk-footer-box-info .footer-social-link a i.fa-youtube {
  background-color: #e21818;
}
.dk-footer-box-info .footer-social-link a i.fa-instagram {
  background-color: #d9218f;
}

.footer-awarad {
  margin-top: 285px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 100%;
  -moz-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.footer-awarad p {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  margin-left: 20px;
  padding-top: 15px;
}

.footer-info-text {
  margin: 26px 0 32px;
}

.footer-left-widget {
  padding-left: 80px;
}

.footer-widget .section-heading {
  margin-bottom: 35px;
}

.footer-widget h3 {
  font-size: 24px;
  color: #fff;
  position: relative;
  margin-bottom: 15px;
  max-width: -webkit-fit-content;
  max-width: -moz-fit-content;
  max-width: fit-content;
}

.footer-widget ul {
  width: 50%;
  float: left;
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-widget li {
  margin-bottom: 18px;
}

.footer-widget p {
  margin-bottom: 27px;
}

.footer-widget a {
  color: #878787;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.footer-widget a:hover {
  color: tomato;
}

.footer-widget:after {
  content: "";
  display: block;
  clear: both;
}

.contact-us {
  position: relative;
  z-index: 2;
  margin-top: 65px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.contact-icon {
  position: absolute;
}
.contact-icon i {
  font-size: 36px;
  top: -5px;
  position: relative;
  color: tomato;
}

.contact-info {
  margin-left: 75px;
  color: #fff;
}
.contact-info h3 {
  font-size: 20px;
  color: #fff;
  margin-bottom: 0;
}

.copyright {
  padding: 28px 0;
  margin-top: 55px;
  background-color: #202020;
  text-align: left;
}
.copyright span,
.copyright a {
  color: #878787;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}
.copyright a:hover {
  color: tomato;
}

.copyright-menu ul {
  text-align: right;
}

.copyright-menu li {
  display: inline-block;
  padding-left: 20px;
}

.back-to-top {
  position: relative;
  z-index: 2;
}
.back-to-top .btn-dark {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  padding: 0;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #2e2e2e;
  border-color: #2e2e2e;
  display: none;
  z-index: 999;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}
.back-to-top .btn-dark:hover {
  cursor: pointer;
  background: #fa6742;
  border-color: #fa6742;
}
</style>

