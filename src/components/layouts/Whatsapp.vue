<template>
  <a
    href="https://api.whatsapp.com/send?phone=56977946444&text=Hola! quiero saber más información CCC las condes."
    class="float"
    target="_blank"
  >
    <i class="fa fa-whatsapp my-float"></i>
  </a>
</template>
<style scoped>
.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}
.float:hover {
  text-decoration: none;
  color: #25d366;
  background-color: #fff;
}

.my-float {
  margin-top: 16px;
}
</style>