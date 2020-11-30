<template>
  <layout-default>
   <router-view />
  </layout-default>
</template>

<script>
import LayoutDefault from './layouts/LayoutDefault.vue'

export default {
  name: 'App',
  components: {
    LayoutDefault
   }
}
</script>

<style lang="scss">
 @import "@/assets/scss/app.scss";
</style>
