<script>
export default {
  name: 'NavigationSidebar'
}
</script>

<template>
  <div class="sidebar">
    <div class="logo text-center">
      <img class="inline my-4" src="https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zb9nktmp8uasmjchkqnz" alt="">
    </div>

    <nav>
      <router-link :to="{ name: 'countriesList' }">Home</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'help' }">Help</router-link>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  width: 15rem;
  background-color: #636363;

  .logo img {
    width: 8rem;
  }

  nav a {
    color: white;
    display: block;
    margin: .4rem 2rem;
    padding: .2rem .5rem;
    border-radius: 5px;

    &:hover {
      color: #636363;
      background-color: white;
      font-weight: bold;
    }
  }
}
</style>
