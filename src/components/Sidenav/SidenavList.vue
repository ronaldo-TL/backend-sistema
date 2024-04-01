<template>
  <div     
    class="collapse navbar-collapse w-auto h-auto h-100"
    id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item
          to="/tools"
          :class="routeName === 'tools' ? 'active' : ''"
          navText="Actualizar Matricula"
        >
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          to="/tools"
          :class="routeName === 'tools' ? 'active' : ''"
          navText="Tables"
        >
          <template v-slot:icon>
            <i
              class="ni ni-calendar-grid-58 text-warning text-sm opacity-10"
            ></i>
          </template>
        </sidenav-item>
      </li>
      
      <li class="mt-3 nav-item">
        <h6
          
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6 ms-2"
        >
          ACCOUNT PAGES
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-item
          to="/profile"
          :class="routeName === 'profile' ? 'active' : ''"
          navText="Profile"
        >
          <template v-slot:icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import SidenavItem from "./SidenavItem.vue";

export default {
  components: {
    SidenavItem,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const routeName = computed(() => {
      const routeArr = route.path.split("/");
      return routeArr[1];
    });

    return {
      store,
      routeName,
    };
  },
};
</script>
