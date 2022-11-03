<!-- Subpágina de los Grupos-->
<template>
    <div>
        <Portada />
        <div class="container">
            <hr class="separador" />
        </div>

        <Kids/>
        <div class="container">
            <hr class="separador" />
        </div>

        <Jovenes />
        <div class="container">
            <hr class="separador" />
        </div>

        <Mujeres/>
        <div class="container">
            <hr class="separador" />
        </div>

        <Varones />
        <div class="container">
            <hr class="separador" />
        </div>

        <ReunionesCasa />
        <div class="container">
            <hr class="separador" />
        </div>

        <Directorio/>
        <div class="container">
            <hr class="separador" />
        </div>
    </div>
</template>

<script>
    import Portada from './grupos/Portada.vue';
    import Kids from './grupos/Kids.vue';
    import Jovenes from './grupos/Jovenes.vue';
    import Mujeres from './grupos/Mujeres.vue';
    import Varones from './grupos/Varones.vue';
    import ReunionesCasa from './grupos/ReunionesCasa.vue';
    import Directorio from './grupos/Directorio.vue';

export default {
    name: "App",
    components: {
        Portada,
        Kids,
        Jovenes,
        Mujeres,
        Varones,
        ReunionesCasa,
        Directorio
    }
}
</script>