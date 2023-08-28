<script>
export default {
  name: 'ItemList',
  props: {
    country: { type: Object, required: true },
    isSelected: { type: Boolean, required: true }
  }
}
</script>

<template>
  <li @click="$emit('select', country)">
    <div class="image-country w-full">
      <img class="w-full" :src="'http://127.0.0.1:8001/api/country/images/' + country.code" alt="">
    </div>

    <div class="flex flex-wrap" :class="{ 'country-selected': isSelected }">
      <div class="flag">
        <img class="" :src="'https://flagsapi.com/' + country.code + '/flat/64.png'" alt="">
      </div>

      <div class="fast-information">
        <h3 class="font-bold text-blue-500 mb-0">{{ country.name }}</h3>
        <h5 class="text-gray-600">{{ country.continent.name }}</h5>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
li {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;

  &.complete {
    border-radius: 0;
    width: 100%;
    list-style: none;
    margin: 0;

    .image-country {
      height: auto;
      max-height: 15rem;

      img {
        border-radius: 4px;
      }
    }
  }

  .image-country {
    height: 10rem;
    overflow: hidden;

    img {
      min-height: 100%;
    }
  }

  .country-selected {
    background-color: #b1cbff;
  }

  .flag {
    width: 5rem;
    display: grid;
    place-items: center;

    img {
      width: 3.3rem;
    }
  }

  .fast-information {
    width: calc(100% - 5rem);
    line-height: 1.2rem;
    padding: .5rem 1rem .5rem 0;
  }
}
</style>
