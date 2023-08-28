<script>
import SearchButton from '@/components/SearchButton.vue'
import FilterByContinent from '@/components/FilterByContinent.vue'

export default {
  name: 'SearchCountries',
  data () {
    return {
      input: '',
      showFilter: false,
      continentSelected: null,
      auxContinentSelected: null
    }
  },
  components: {
    FilterByContinent,
    SearchButton
  },
  mounted () {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    handleClickOutside (event) {
      if (this.$refs.formElement && !this.$refs.formElement.contains(event.target)) {
        this.showFilter = false
      }
    },
    submitForm () {
      this.auxContinentSelected = this.continentSelected
      this.$emit('submit-form', { input: this.input, continent: this.continentSelected })
      this.showFilter = false
    },
    updateSelected (newValue) {
      if (this.continentSelected === newValue) {
        this.continentSelected = null
      } else {
        this.continentSelected = newValue
      }
    },
    resetSearch () {
      this.input = ''
      this.continentSelected = null
      this.submitForm()
    },
    showFilterMethod () {
      if (!this.showFilter) {
        this.showFilter = true
        this.continentSelected = this.auxContinentSelected
      }
    }
  }
}
</script>

<template>
  <div class="flex justify-center">
    <div>
      <form @click="showFilterMethod" ref="formElement" @submit.prevent="submitForm" class="flex px-5 py-2 rounded-full mb-3 relative">
        <p class="text-xl">Countries:</p>

        <input type="text" v-model="input" placeholder="Type to search for a country" class="border-b-2 border-gray-800 mx-5 outline-0 px-2" @keydown="showFilterMethod" @focus="showFilterMethod">

        <div class="">
          <SearchButton />
        </div>

        <FilterByContinent v-if="showFilter" :continentSelected="continentSelected" @update-selected="updateSelected" @reset-search="resetSearch" />
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
form {
  margin-top: .5rem;
  background-color: #F3F3F8;
  width: 35rem;

  input {
    width: inherit;
  }
}

@media (max-width: 900px) {
  form {
    display: block;
    border-radius: 15px;
    width: 20rem;

    input {
      width: 100%;
      margin: .5rem 0;
    }
  }
}
</style>
