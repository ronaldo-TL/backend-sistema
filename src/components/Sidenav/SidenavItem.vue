<template>
  <router-link :to="to" class="nav-link" @click="minimizeSidebar">
    <div
      class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center"
    >
      <slot name="icon"></slot>
    </div>
    <span class="nav-link-text">{{
      navText
    }}</span>
  </router-link>
</template>
<script>
import { useStore } from "vuex";

export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    navText: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const sidebarMinimize = () => store.commit("sidebarMinimize");
    const minimizeSidebar = () => {
      if (window.innerWidth < 1200) {
        sidebarMinimize();
      }
    };
    return {
      minimizeSidebar,
    };
  },
};
</script>
