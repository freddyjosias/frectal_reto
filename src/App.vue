<script>
import NavigationSidebar from '@/layout/NavigationSidebar.vue'

export default {
  components: {
    NavigationSidebar
  }
}
</script>

<template>
  <div class="container max-w-full flex flex-wrap h-screen">
    <NavigationSidebar />

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped lang="scss">
main {
  width: calc(100% - 15rem);
  background-color: #f0f0fb;
  padding: 1rem 3rem;
}
</style>
