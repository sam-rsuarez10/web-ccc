<template>
    <div>
        <Portada />
        <div class="container">
            <hr class="separador" />
        </div>
    </div>
</template>

<script>
import Portada from './misiones/Portada.vue';

export default {
    name: "App",
    components: {
        Portada,
    }
}
</script>