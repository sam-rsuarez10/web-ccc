<template>
    <div>
        <Fundamentos/>
        <div class="container">
            <hr class="separador" />
        </div>
        
        <EscuelaLiderazgo />
        <div class="container">
            <hr class="separador" />
        </div>

        <EstudiosBiblicos />
        <div class="container">
            <hr class="separador" />
        </div>
    </div>
</template>

<script>
import Fundamentos from './formacion/Fundamentos.vue';
import EscuelaLiderazgo from './formacion/Escuela-Liderazgo.vue';
import EstudiosBiblicos from './formacion/Estudios-Biblicos.vue';

export default {
    name: "App",
    components: {
        Fundamentos,
        EscuelaLiderazgo,
        EstudiosBiblicos
    }
}
</script>