<script>
import ItemList from '@/components/ItemList.vue'

export default {
  name: 'CountryInformation',
  data () {
    return {
      additionalInformation: null,
      arrayInformation: [
        { key: 'capital', name: 'Capital', array: false },
        { key: 'emoji', name: 'Emoji Flag', array: false },
        { key: 'phone', name: 'Phone Code', array: false },
        { key: 'currencies', name: 'Currencies', array: true },
        { key: 'languages', name: 'Languages', array: true },
        { key: 'states', name: 'States', array: true }
      ]
    }
  },
  components: { ItemList },
  props: {
    country: { type: Object, required: true }
  },
  mounted () {
    this.getInformation()
    this.checkWidth()
    window.addEventListener('resize', this.checkWidth)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkWidth)
    document.body.style.overflow = 'auto'
  },
  watch: {
    country () {
      this.getInformation()
    }
  },
  methods: {
    handleClickOutside (event) {
      if (this.$refs.containerDetails && this.$refs.containerDetails === event.target) {
        this.$emit('close')
      }
    },
    checkWidth () {
      if (window.innerWidth <= 1040) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
    getInformation () {
      this.additionalInformation = null

      return fetch('https://countries.trevorblades.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            query {
              country(code: "` + this.country.code + `") {
                capital
                currencies
                phone
                emoji
                languages {
                  name
                }
                states {
                  name
                }
              }
            }
          `,
          variables: { code: this.country.code }
        })
      }).then(res => res.json())
        .then(res => {
          this.additionalInformation = res.data.country
          console.log(this.additionalInformation)
        })
    },
    arrayToString (array) {
      if (array.length === 0) {
        return '<i>- No data -</i>'
      } else if (array.length === 1) {
        return array[0].name ?? array[0]
      }

      return (array[0].name ?? array[0]) + ' and ' + (array[1].name ?? array[1])
    }
  }
}
</script>

<template>
  <div class="container-details" ref="containerDetails" @click="handleClickOutside">
    <div class="details">
      <div class="flex justify-between mb-2">
        <p class="text-lg font-normal">More Information:</p>

        <button class="text-gray-500 hover:text-gray-800 text-end rounded-full w-5 h-5 mt-1 text-xs" @click="$emit('close')">
          <span class="icon-cross"></span>
        </button>
      </div>

      <div class="for-scroll">
        <ItemList class="complete" :isSelected="false" :country="country" />

        <ul class="items" v-if="additionalInformation !== null">

          <li v-for="(item, index) in arrayInformation" :key="index">
            <p>{{ item.name }}:</p>

            <p v-if="!item.array">{{ additionalInformation[item.key] }}</p>

            <template v-else>
              <p v-if="additionalInformation[item.key].length <= 2" v-html="arrayToString(additionalInformation[item.key])"></p>

              <ul v-else class="border-2 border-gray-300 mt-1">
                <li class="px-2" v-for="(element, index) in additionalInformation[item.key]" :key="index">- {{ element.name ?? element }}</li>
              </ul>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-details {
  position: static;
  background-color: initial;
  z-index: 9;
}

.details {
  padding: .6rem 1.5rem;
  border-radius: 8px;
  background-color: white;

  .items {
    margin-top: 2px;

    & > li {
      margin-bottom: .5rem;

      p {
        display: inline;

        &:first-child {
          font-weight: bold;
          padding-right: .8rem;
          color: #0047d4;
        }
      }
    }
  }
}

@media (max-width: 1040px) {
  .container-details {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 11;

    .details {
      width: 40rem;
      margin: 2rem auto;
      border-radius: 5px;
      padding: .6rem 1.5rem 1.5rem 1.5rem;

      .for-scroll {
        overflow: auto;
        max-height: calc(100vh - 8.5rem);
      }
    }
  }
}
</style>
