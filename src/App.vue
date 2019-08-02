<template>
  <div id="app">
    <sidebar></sidebar>
    <banner></banner>
    <div class="user">Edith Hsu</div>
    <div class="search"></div>
    <div class="now-playing"></div>
    <playlist></playlist>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>
<style lang="stylus">
size($w, $h = $w)
  height $h
  width $w
html, body
  size 100%
  margin 0
  padding 0
  display flex
  justify-content center
  align-items center
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  size 1200px 800px
.plus
  size 16px
  background-image url('~@/assets/plus-solid.png')
  background-size contain
  &:hover
    background-image url('~@/assets/plus-solid_hover.png')
</style>
