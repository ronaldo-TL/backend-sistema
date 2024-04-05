<template>
  <nav 
  class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
  v-bind="$attrs"
  id="navbarBlur"
  data-scroll="true">
    <div 
      class="px-3 py-1 container-fluid">
        
        <PageChange
          :current-page="currentRouteName"
          :current-directory="currentDirectory"/>

        <div
          class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0"
          id="navbar">
          <div class="pe-md-3 d-flex ms-md-auto align-items-center">
            <div class="input-group">
              <span class="input-group-text text-body">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Buscar..."
              />  
            </div>
          </div>
          <ul class="navbar-nav justify-content-end">
            <li class="nav-item d-flex align-items-center">
              <!-- Nota: Cuando el login ya este creado y que sea targeteable-->
              <router-link 
                :to="{ name: 'tools' }" 
                class="px-0 nav-link font-weight-bold text-white">
                  <i class="fa fa-user me-sm-2"></i>
                  <span class="d-sm-inline d-none">Cerrar Seccion</span>
              </router-link>
            </li>
            <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a 
                href="#"
                @click="minimizeSidebar"
                class="p-0 nav-link text-while"
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
              <a class="p-0 nav-link text-white" @click="toggleConfigurator">
                <i class="cursor-pointer fa fa-cog fixed-plugin-button-nav"></i>
              </a>
            </li>
          </ul>
        </div>
    </div>
</nav>
</template>

<script>
import { computed, ref, defineAsyncComponent } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  components: {
    PageChange: defineAsyncComponent(() => import('../PageChange.vue'))
  },
  setup(){
    const showMenu = ref(false)
    const store = useStore()
    const route = useRoute() 

    const currentRouteName = computed(() => {
      return route.name;
    });
    const currentDirectory = computed(() => {
    let dir = route.path.split("/")[1];
      return dir.charAt(0).toUpperCase() + dir.slice(1);
    });  

    const minimizeSidebar = () => store.commit("sidebarMinimize");
    const toggleConfigurator = () => store.commit("toggleConfigurator");
    const closeMenu = () => {
      setTimeout(() => {
        showMenu.value = false;
      }, 100);
    };
    return {
      currentRouteName,
      currentDirectory,
      minimizeSidebar,
      toggleConfigurator,
      closeMenu
    }
  }  
}
</script>
