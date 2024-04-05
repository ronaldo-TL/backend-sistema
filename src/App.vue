<template>
  <div
      v-show="layout === 'landing'"
      class="landing-bg h-100 bg-gradient-primary position-fixed w-100"
  ></div>
  <Index v-if="showSidenav" />
  <main
    class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
  >
    <!-- nav -->
    <navbar :class="[navClasses]" v-if="showNavbar" />

    <router-view />

    <app-footer v-show="showFooter" />

    <configurator
      :toggle="toggleConfigurator"
      :class="[showConfig ? 'show' : '', hideConfigButton ? 'd-none' : '']"
    />
    
  </main>

</template>

<script> 
import { defineAsyncComponent, computed  } from "vue";
import { useStore } from "vuex";

export default {
  name: 'App',
  components: {
    Index: defineAsyncComponent(()=>import('@/components/Sidenav/Index.vue')),
    Navbar: defineAsyncComponent(()=>import('@/components/Navbars/Navbar.vue')),
  

  },
  setup(){
    const store = useStore()
    const isNavFixed = computed(() => store.state.isNavFixed);
    const darkMode = computed(() => store.state.darkMode);
    const isAbsolute = computed(() => store.state.isAbsolute);
    const showSidenav = computed(() => store.state.showSidenav);
    const layout = computed(() => store.state.layout);
    const showNavbar = computed(() => store.state.showNavbar);
    const showFooter = computed(() => store.state.showFooter);
    const showConfig = computed(() => store.state.showConfig);
    const hideConfigButton = computed(() => store.state.hideConfigButton);
    const toggleConfigurator = () => store.commit("toggleConfigurator");
      
    const navClasses = computed(() => {
      return {
        "position-sticky bg-white left-auto top-2 z-index-sticky":
          isNavFixed.value && !darkMode.value,
        "position-sticky bg-default left-auto top-2 z-index-sticky":
          isNavFixed.value && darkMode.value,
        "position-absolute px-4 mx-0 w-100 z-index-2": isAbsolute.value,
        "px-0 mx-4": !isAbsolute.value,
      };
    });

    return {
      isNavFixed,
      darkMode,
      isAbsolute,
      showSidenav,
      layout,
      showNavbar,
      showFooter,
      showConfig,
      hideConfigButton,
      toggleConfigurator,

      navClasses
    }
  }
}
</script>

<style>

</style>
