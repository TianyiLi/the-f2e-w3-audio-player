<template>
  <div id="app">
    <sidebar></sidebar>
    <div class="main-panel">
      <img src="@/assets/pexels-photo-2009968.jpeg"
        class="bg-img"
        alt="">
      <div class="user">Edith Hsu</div>
      <div class="search">
        <img src="@/assets/search-solid.png"
          alt="">
      </div>
      <div class="add-to-my-album"
        @click.stop="adsBoxIsShow = true">+ 新增至我的專輯</div>
      <div class="album-image-wrapper">
        <img src="@/assets/pexels-photo-2009968.jpeg"
          alt="">
      </div>
      <div class="album-title">Youtube Music</div>
      <div class="album-description">Youtube 頻道</div>
      <div class="album-create-from">於 2019.7.22 創建</div>
      <div class="play-button">
        <img src="@/assets/round-play_arrow-24px.svg"
          alt="">
      </div>
      <playlist></playlist>
      <bottom-bar></bottom-bar>
      <adsBox v-model="adsBoxIsShow"></adsBox>
    </div>
  </div>
</template>

<script>
import adsBox from './components/ads-box'
import bottomBar from './components/bottom-bar'
import sidebar from './components/sidebar'
import playlist from './components/playlist'
export default {
  name: 'app',
  components: {
    adsBox,
    'bottom-bar': bottomBar,
    sidebar,
    playlist
  },
  data () {
    return {
      adsBoxIsShow: true
    }
  }
}
</script>
<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC|Roboto&display=swap')
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
  background #232527
#app
  position relative
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  size 1200px 800px
  overflow hidden
  .main-panel
    position absolute
    top 0
    left 213px
    size 987px 800px
    overflow hidden
    .bg-img
      size 100%
      filter blur(5px)
    .user
      position absolute
      font-family 'Noto Sans TC'
      font-weight 500
      font-size 16px
      color #FFFFFF
      letter-spacing 0
      left 887px
      top 22px
      &:before
        content ''
        position absolute
        left -44px
        size 34px
        top 50%
        transform translateY(-50%)
        background #9D68C1
        border-radius 50%
    .play-button
      size 82px
      position absolute
      top 295px
      left 835px
      background-image linear-gradient(227deg, #FFA883 0%, #3927FF 100%)
      box-shadow 0 2px 8px 0 rgba(0, 0, 0, 0.5)
      border-radius 50%
      display flex
      justify-content center
      align-items center
      z-index 1
      &:hover
        background-image linear-gradient(48deg, #FFA883 0%, #3927FF 100%)
        box-shadow 0 2px 8px 0 rgba(0, 0, 0, 0.5)
      img
        size 46px
    .add-to-my-album
      cursor pointer
      position absolute
      top 196px
      left 746px
      height 43px
      width 171px
      border-radius 23.5px
      background-color rgba(#000, 0.6)
      display flex
      align-items center
      justify-content center
      font-family 'Noto Sans TC'
      font-weight 500
      font-size 16px
      color #FFFFFF
      letter-spacing 0
    .album-title
      position absolute
      left 286px
      top 192px
      font-family Roboto
      font-weight bold
      font-size 40px
      color #FFFFFF
      letter-spacing 0
      text-align left
    .album-create-from, .album-description
      position absolute
      font-family 'Noto Sans TC'
      font-weight 500
      font-size 16px
      color #FFFFFF
      letter-spacing 0
      left 286px
    .album-create-from
      top 292px
    .album-description
      top 269px
    .album-image-wrapper
      z-index 1
      position absolute
      top 192px
      left 69px
      filter drop-shadow(0 2px 4px 0 rgba(0, 0, 0, 0.5))
      // box-shadow 0 2px 4px 0 rgba(0, 0, 0, 0.5)
      img
        height 185px
        width auto
.search
  position absolute
  top 25px
  left 29px
  size 19px
.plus
  size 16px
  background-image url('~@/assets/plus-solid.png')
  background-size contain
  &:hover
    background-image url('~@/assets/plus-solid_hover.png')
</style>
