<template>
  <nav 
  class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
  v-bind="$attrs"
  id="navbarBlur"
  data-scroll="true">
        <div 
        class="px-3 py-1 container-fluid">
            <breadcrumbs
            :current-page="currentRouteName"
            :current-directory="currentDirectory"
            />

            <div 
            class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
            id="navbar">
                <div
                class="pe-md-3 d-flex align-items-center">
                    <div class="input-group">
                        <span class="input-group-text text-body">
                        <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                        <input
                        type="text"
                        class="form-control"
                        placeholder="Type here..."
                        />
                    </div>
                </div>
                <ul class="navbar-nav justify-content-end">
                    <li class="nav-item d-flex align-items-center">
                        <i class="fa fa-user"></i>
                        <span class="d-sm-inline d-none">Cerrar Sesión</span>
                    </li>
                    <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                        <a
                        href="#"
        
                        class="p-0 nav-link text-white"
                        id="iconNavbarSidenav"
                        >
                        <div class="sidenav-toggler-inner">
                            <i class="sidenav-toggler-line bg-white"></i>
                            <i class="sidenav-toggler-line bg-white"></i>
                            <i class="sidenav-toggler-line bg-white"></i>
                        </div>
                        </a>
                    </li>
                    <li class="px-3 nav-item d-flex align-items-center">
                        <a class="p-0 nav-link text-white">
                        <i class="cursor-pointer fa fa-cog fixed-plugin-button-nav"></i>
                        </a>
                    </li>
                </ul>
                
                
            </div>
        </div>
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
// import { computed } from "vue";
// import { useStore } from "vuex";
// import { useRoute } from "vue-router";
// import Breadcrumbs from "../Breadcrumbs.vue";
import { defineAsyncComponent} from 'vue'

// const showMwnu = ref(false) 
// const store = useStore()




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
    },
    setup(){
        
    }
}
</script>

<style>
    a{
        margin: 0 20px 0 0;
    }
    .navbar{
        background-color: rgb(183, 183, 183);
    }
</style>