<script>
import ItemList from '@/components/ItemList.vue'

export default {
  name: 'CountryInformation',
  components: { ItemList },
  props: {
    country: { type: Object, required: true }
  },
  mounted () {
    console.log(this.country)
  }
}
</script>

<template>
  <div>
    <div class="details">
      <ItemList countrySelected="null" :country="country" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.details {
  background-color: white;
  padding: .5rem;
  border-radius: .5rem;

  & > img {
    border-radius: .5rem;
  }
}
</style>
