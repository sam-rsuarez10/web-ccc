<!-- Subpágina de ayuda -->
<template>
  <div>
    <Portada/>
    <br><br><br>
    <CCCAyuda />
    <div class="container">
      <hr class="separador" />
    </div>
    <OramosPorTi />
    <div class="container">
      <hr class="separador" />
    </div>
    <Consejeria />
    <br><br><br><br><br>
  </div>
</template>

<script>
import Portada from './ayuda/Portada.vue';
import CCCAyuda from './ayuda/CCC-Ayuda.vue';
import OramosPorTi from './ayuda/OramosPorTi.vue';
import Consejeria from './ayuda/Consejeria.vue';

export default {
    name: 'App',
    components: {
        Portada,
        CCCAyuda,
        OramosPorTi,
        Consejeria
    }
}
</script>
<style scoped>
.separador {
  margin-top: 50px !important;
  margin-bottom: 50px !important;
}
</style>