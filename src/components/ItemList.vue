<script>
export default {
  name: 'ItemList',
  props: {
    country: { type: Object, required: true },
    countrySelected: { type: String, required: true }
  }
}
</script>

<template>
  <li>
    <img class="image-country w-full" src="https://getgoldenvisa.com/wp-content/uploads/2022/02/start-a-business-in-the-uk.jpg" alt="">

    <div class="flex flex-wrap" :class="{ 'country-selected': countrySelected === country.code }">
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
  border-radius: 15px;
  margin: 1rem 0;
  overflow: hidden;
  width: 31%;

  .image-country {
    height: 7rem;
  }

  .country-selected {
    background-color: #b1cbff;
  }

  .flag {
    width: 25%;
    display: grid;
    place-items: center;

    img {
      width: 60%;
    }
  }

  .fast-information {
    width: 75%;
    line-height: 1.2rem;
    padding: .5rem 1rem .5rem 0;
  }
}
</style>
