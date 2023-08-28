<script>
import NavigationSidebar from '@/layout/NavigationSidebar.vue'

export default {
  components: {
    NavigationSidebar
  },
  data () {
    return {
      closeSidebar: false
    }
  }
}
</script>

<template>
  <div class="container max-w-full flex flex-wrap h-screen">
    <NavigationSidebar @close="e => closeSidebar = e" />

    <main :class="{ 'small': closeSidebar }">
      <router-view />
    </main>
  </div>
</template>

<style scoped lang="scss">
main {
  width: calc(100% - 15rem);

  &.small {
    width: calc(100% - 3rem);
  }
}
</style>
