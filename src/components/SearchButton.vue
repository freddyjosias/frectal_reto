<script>
export default {
  name: 'SearchButton'
}
</script>

<template>
  <button class="flex">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0,0,256,256">
      <g transform="translate(-11.52,-11.52) scale(1.09,1.09)"><g fill-opacity="0" fill="#dddddd" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M10.56881,245.43119v-234.86239h234.86239v234.86239z" id="bgRectangle"></path></g><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M21,3c-9.4,0 -17,7.6 -17,17c0,9.4 7.6,17 17,17c3.35455,0 6.47104,-0.98016 9.10352,-2.65234l12.27539,12.27344l4.24219,-4.24219l-12.09766,-12.09961c2.17229,-2.8553 3.47656,-6.40865 3.47656,-10.2793c0,-9.4 -7.6,-17 -17,-17zM21,7c7.2,0 13,5.8 13,13c0,7.2 -5.8,13 -13,13c-7.2,0 -13,-5.8 -13,-13c0,-7.2 5.8,-13 13,-13z"></path></g></g></g>
    </svg>

    Search</button>
</template>

<style scoped lang="scss">
button {
  background-color: #0047d4;
  color: white;
  justify-content: center;
  border-radius: 5px;
  padding: .15rem .8rem;
  font-size: .88rem;

  svg {
    margin-top: 4px;
    margin-right: .3rem;
  }
}
</style>
