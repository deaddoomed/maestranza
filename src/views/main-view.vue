<template>
    <nav>
        <h2 class="selectable" @click="change_to_inventory()">Inventario</h2>
        <h2 class="selectable" @click="change_to_adquisiciones()">Adquisiciones</h2>
    </nav>

    <div>
        <router-view>        
            <component :is="view"/>
        </router-view>                        
    </div>

</template>

<script setup lang="ts">
    import Adquisiciones from "../components/Adquisiciones-view.vue";
    import Inventario from  "../components/Inventario-view.vue";
    import { RouterView } from 'vue-router'
    import { shallowRef } from 'vue';


    const view = shallowRef()

    function change_to_inventory(){
        view.value = Inventario
    }

    function change_to_adquisiciones(){
        view.value = Adquisiciones
    }




</script>