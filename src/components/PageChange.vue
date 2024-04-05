<template>
  <nav aria-label="breadcrumb">
    <ol 
      class="px-0 pt-1 pb-0 mb-0 bg-transparent text-white breadcrumb"
    >
      <li class="text-sm breadcrumb-item">
        <a
          class="opacity-8 text-white"
          href="#"
          >Paginas</a
        >
      </li>
      <li
        class="text-sm breadcrumb-item active text-white"
        aria-current="page"
      >
        {{ currentDirectory }}
      </li>
    </ol>
    <h6
      class="mb-0 font-weight-bolder text-white"
    >
      {{ currentDirectory }}
    </h6>
  </nav>
</template>


<script>

import { computed } from "vue";
import { useStore } from "vuex";
 
export default {
  props: {
    cuppentPage: {
      type: String,
      default: ''
    },
    currentDirectory: {
      type: String,
      default: ''
    }
  },
  setup(){
    const store = useStore();
    const isNavFixed = computed(() => store.state.isNavFixed);

    return isNavFixed
  }

}
</script>
