<!--Subpágina de Nosotros-->
<template>
  <div>
    <Portada />
      <div class="container">
        <hr class="separador" />
      </div>
    <MisionVision />
      <div class="container">
        <hr class="separador" />
      </div>
    <Historia />
      <div class="container">
        <hr class="separador" />
      </div>
  </div>
</template>

<script>
import Portada from './sobre-nosotros/Portada.vue';
import MisionVision from './sobre-nosotros/MisionVision.vue';
import Historia from './sobre-nosotros/Historia.vue';

export default {
  name: "App",
  components: {
    Portada,
    MisionVision,
    Historia,
  }
}
</script>