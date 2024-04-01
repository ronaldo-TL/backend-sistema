<template>
  <a 
    v-if="isExternalLink"
    target="_blank"
    :href="link.to"
    class="normal-link"
  >
  {{ link.name }}
  </a>
  <router-link
    v-else
    :to="{ name: link.to }"
    v-slot="{ isActive }">
     
<!--  :href="href" -->
    <a :class="isActive ? 'is-active' : 'normal-link'">{{ link.name }}</a>
  </router-link>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true
        }
    },

    computed: {
        isExternalLink(){
          return this.link.to.startsWith('http')
        },

    }
}
</script>
