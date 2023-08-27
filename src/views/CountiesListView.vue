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
      countrySelected: { code: 'null' }
    }
  },
  mounted () {
    this.queryFetch(`
      query {
        countries {
          code
          name
          continent {
            name
          }
        }
        continents {
          code
          name
        }
      }
    `).then(res => {
      this.countries = res.data.countries
      this.continents = res.data.continents
      console.log(res.data)
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
    get () {
      console.log('secuencia')
    }
  }
}
</script>

<template>
  <div>
    <div class="search">
      <SearchCountries />
    </div>

    <div class="main" :class="{ 'there-selected': countrySelected.code !== 'null' }">
      <ul class="flex flex-wrap justify-between">
        <template v-for="country in countries">
          <ItemList :key="country.code" :countrySelected="countrySelected.code" :country="country" @click="get()" />
        </template>
      </ul>

      <CountryInformation v-if="countrySelected.code !== 'null'" :country="countrySelected" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  &.there-selected {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &>div {
      width: 26%;
    }

    ul {
      width: 70%;

      li {
        width: 45%;
      }
    }
  }
}
</style>
