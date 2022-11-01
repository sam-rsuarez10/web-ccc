<!--Subpágina de Nosotros-->
<template>
  <div>
    <Portada />
      <div class="container">
        <hr class="separador" />
      </div>
  </div>
</template>

<script>
import Portada from './sobre-nosotros/Portada.vue';

export default {
  name: "App",
  components: {
    Portada,
  }
}
</script>