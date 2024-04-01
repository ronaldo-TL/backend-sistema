<template>
    <nav>
        
    </nav>


  <div>
    <CustomLink 
        v-for="link in links"
        :key="link.to"
        :link="link"
    />
  </div>
</template>

<script>
// import { computed, ref } from "vue";
// import { useStore } from "vuex";
// import { useRoute } from "vue-router";
// import Breadcrumbs from "../Breadcrumbs.vue";
import { defineAsyncComponent} from 'vue'


export default {
    data(){
        return{
            links: [
                {to: 'user-list', name: 'lista'},
                {to: 'user-edit', name: 'editar'},
                {to: 'https://google.com', name: 'google'}
            ]
        }
        
    },
    components: {
        CustomLink: defineAsyncComponent(()=>import('./CustomLink.vue'))
    }
}
</script>

<style>
    a{
        margin: 0 20px 0 0;
    }
</style>