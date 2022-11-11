<template>
    <div>
        <Cuenta />
        <div class="container">
            <hr class="separador" />
        </div>
    </div>
</template>

<script>
import Cuenta from './mi-ccc/Cuenta.vue';

export default {
    name: "App",
    components: {
        Cuenta,
    }
}
</script>