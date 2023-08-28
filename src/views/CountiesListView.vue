<script>
import SearchCountries from '@/components/SearchCountries.vue'
import CountryInformation from '@/components/CountryInformation.vue'
import ItemList from '@/components/ItemList.vue'

export default {
  name: 'CountiesListView',
  components: {
    ItemList,
    CountryInformation,
    SearchCountries
  },
  data () {
    return {
      countries: [],
      continents: [],
      countrySelected: null,
      filteredCountries: [],
      formSearch: { input: '', continent: null }
    }
  },
  mounted () {
    this.queryFetch(`
      query {
        countries {
          code
          name
          continent {
            code
            name
          }
        }
      }
    `).then(res => {
      this.countries = res.data.countries
      this.filteredCountries = this.countries
      this.continents = res.data.continents
    })
  },
  methods: {
    queryFetch (query, variables) {
      return fetch('https://countries.trevorblades.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: query,
          variables: variables
        })
      }).then(res => res.json())
    },
    updateSearch (newValue) {
      this.countrySelected = null

      if (newValue.input !== this.formSearch.input || newValue.continent !== this.formSearch.continent) {
        this.filteredCountries = this.countries.filter(value => {
          const result = value.name.toLowerCase().includes(newValue.input.toLowerCase())

          if (result === false || newValue.continent === null) {
            return result
          }

          return newValue.continent === value.continent.code
        })
        this.formSearch = newValue
      }
    }
  }
}
</script>

<template>
  <div>
    <div class="search">
      <SearchCountries @submit-form="updateSearch" />
    </div>

    <div class="main" :class="{ 'there-selected': countrySelected !== null }">
      <div class="ul-container">
        <ul class="flex flex-wrap justify-between">
          <template v-for="country in filteredCountries">
            <ItemList :key="country.code" :isSelected="countrySelected !== null && country.code === countrySelected.code" :country="country" @select="e => countrySelected = e" />
          </template>
        </ul>
      </div>

      <CountryInformation class="info" v-if="countrySelected !== null" :country="countrySelected" @close="countrySelected = null" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.search {
  background-color: #FFFFFF;
  position: sticky;
  top: 0;
  z-index: 10;
}

.main {
  margin-top: 1rem;
  padding: 1rem 3rem;

  &.there-selected {
    display: grid;
    grid-template-columns: 7fr 3fr;
    gap: 2rem;

    .ul-container ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 1630px) {
  .main {
    padding: 1rem 2rem 2rem 2rem;
  }
}

@media (max-width: 1600px) {
  .main {
    &.there-selected {
      grid-template-columns: 2fr 1fr;

      .ul-container ul {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media (max-width: 1300px) {
  .main {
    padding: 1rem 4rem 3rem 4rem;

    &.there-selected {
      grid-template-columns: 1fr 1fr;

      .ul-container ul {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media (max-width: 1150px) {
  .main {
    padding: 1rem 2rem 2rem 2rem;
  }
}

@media (max-width: 1040px) {
  .main {
    &.there-selected {
      grid-template-columns: 1fr;

      .ul-container ul {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
