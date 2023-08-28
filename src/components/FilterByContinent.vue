<script>
export default {
  name: 'FilterByContinent',
  data () {
    return {
      continents: [
        { code: 'AF', image: 'Africa.png', name: 'Africa' },
        { code: 'AN', image: 'Antarctica.png', name: 'Antarctica' },
        { code: 'AS', image: 'Asia.png', name: 'Asia' },
        { code: 'EU', image: 'Europa.png', name: 'Europa' },
        { code: 'NA', image: 'North_America.png', name: 'North America' },
        { code: 'SA', image: 'South_America.png', name: 'South America' },
        { code: 'OC', image: 'Oceania.png', name: 'Oceania' }
      ]
    }
  },
  props: {
    continentSelected: { type: [String, null], required: false }
  }
}
</script>

<template>
  <div class="filter">
    <div class="flex justify-between">
      <h3 class="text-lg font-semibold">Filter by continent:</h3>

      <button class="" @click="$emit('reset-search')">Reset</button>
    </div>

    <ul>
      <li v-for="continent in continents" :key="continent.code" class="inline-block" @click="$emit('update-selected', continent.code)" :class="{ 'selected': continentSelected === continent.code }">
        <img draggable="false" :src="require('@/assets/continents/' + continent.image)" alt="">
        <p class="mt-1.5">{{ continent.name }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.filter {
  background-color: white;
  position: absolute;
  top: 3.5rem;
  left: -5rem;
  padding: .3rem 1rem .6rem 1rem;
  border-radius: 1rem;
  border: 1px solid #a0a0a0;
  width: 45rem;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: .4rem 0;

    li {
      border: 1px solid #b9b9b9;
      text-align: center;
      padding: .5rem;
      border-radius: .5rem;
      user-select: none;

      &.selected {
        background-color: #e3efff;
      }
    }
  }
}

@media (max-width: 900px) {
  .filter {
    left: -7.5rem;
    width: 35rem;
    top: 7.5rem;
  }
}
</style>
