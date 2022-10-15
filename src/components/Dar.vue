<template>
  <div>
    <Metodos />
    <div class="container">
      <hr class="separador" />
    </div>
    <Datos />
    <div class="container">
      <hr class="separador" />
    </div>
    <Bancos />
  </div>
</template>
<style scoped>
</style>
<script>
import Metodos from "./dar/Metodos.vue";
import Datos from "./dar/Datos.vue";
import Bancos from "./dar/Bancos.vue";

export default {
  name: "App",
  components: {
    Metodos,
    Datos,
    Bancos,
  },

  Servirdata: () => ({
    //
  }),
};
</script>
<style scoped>
.separador {
  margin-top: 50px !important;
  margin-bottom: 50px !important;
}
</style>

