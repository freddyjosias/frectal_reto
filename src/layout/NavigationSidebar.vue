<script>
export default {
  name: 'NavigationSidebar',
  data () {
    return {
      closeSidebar: false
    }
  },
  methods: {
    close () {
      this.closeSidebar = !this.closeSidebar
      this.$emit('close', this.closeSidebar)
    }
  }
}
</script>

<template>
  <div class="sidebar" :class="{ 'close': closeSidebar }">
    <div class="logo">
      <img draggable="false" v-if="!closeSidebar" class="inline my-4" src="@/assets/images/main_logo.png" alt="">

      <div class="">
        <button @click="close" class="hamburger" type="button">
            <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>

    <p v-if="!closeSidebar" class="menu-text text-sm font-semibold text-gray-300 px-4 mt-3 mb-3">Menu</p>

    <nav v-if="!closeSidebar">
      <router-link :to="{ name: 'countriesList' }">
        <span class="icon-home"></span> Country List
      </router-link>

      <router-link :to="{ name: 'about' }">
        <span class="icon-info"></span> About Us
      </router-link>

      <router-link :to="{ name: 'help' }">
        <span class="icon-question"></span> Help Me
      </router-link>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  width: 15rem;
  height: 100vh;
  position: sticky;
  top: 0;
  background-color: #1A2942;

  .menu-text {
    letter-spacing: 1.5px;
  }

  .logo {
    text-align: center;

    button {
      display: none;
    }

    img {
      width: 8rem;
    }
  }

  nav a {
    color: rgba(230, 230, 230, 0.9);
    display: block;
    padding: .5rem 1rem;
    margin: .15rem 0;

    &:hover {
      background-color: #40557b;
      font-weight: bold;
      color: white;
    }

    span {
      margin-right: .8rem;
    }
  }
}

@media (max-width: 900px) {
  .sidebar {
    &.close {
      width: 3rem;
    }

    .logo {
      margin: 0 .5rem;
      display: flex;
      justify-content: space-between;

      button {
        display: block;
        padding: 0;
        margin-right: .1rem;
        margin-top: 1.7rem;

        span {
          span {
            background-color: white;
            height: 2px;
            width: 30px;

            &:after {
              background-color: white;
              height: 2px;
              bottom: -6px;
              width: 30px;
            }

            &:before {
              background-color: white;
              height: 2px;
              top: -6px;
              width: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
