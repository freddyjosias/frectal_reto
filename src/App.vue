<script>
import NavigationSidebar from '@/layout/NavigationSidebar.vue'

export default {
  components: {
    NavigationSidebar
  }
}
</script>

<template>
  <div class="container bg-gray-200">
    <NavigationSidebar />
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
.container {

}
</style>
