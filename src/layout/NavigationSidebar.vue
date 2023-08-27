<script>
export default {
  name: 'NavigationSidebar'
}
</script>

<template>
  <nav class="bg-blue-200">
    <router-link :to="{ name: 'countriesList' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'help' }">Help</router-link>
  </nav>
</template>

<style scoped lang="scss">
nav {
  height: 100%;
}
</style>
