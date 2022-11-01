<!-- Subpágina de ayuda -->
<template>
  <div>
    <CCCAyuda />
      <div class="container">
        <hr class="separador" />
      </div>
    <OramosPorTi />
      <div class="container">
        <hr class="separador" />
      </div>
    <Consejeria />
      <div class="container">
        <hr class="separador" />
      </div>
  </div>
</template>

<script>
import CCCAyuda from './ayuda/CCC-Ayuda.vue';
import OramosPorTi from './ayuda/OramosPorTi.vue';
import Consejeria from './ayuda/Consejeria.vue';

export default {
    name: 'App',
    components: {
        CCCAyuda,
        OramosPorTi,
        Consejeria
    }
}
</script>