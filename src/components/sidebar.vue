<template>
  <div class="sidebar">
    <div class="my-album">
      我的專輯<span class="plus"></span>
    </div>
    <div class="sidebar-wrap">
      <div class="sidebar-list"
        :class="currentAlbumsIndex === i ? 'active' : ''"
        v-for="(album, i) in albums"
        :key="i"
        @click.prevent="albumSelect(i)">{{album.name}}</div>
    </div>
    <div class="now-playing-cover">
      <div class="transparent-wrap">
        <span class="now-is">現在播放</span>
        <span class="album-name">Youtube Music</span>
        <span class="song-name">Write You</span>
      </div>
      <img src=""
        alt="">
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'albums',
      'currentAlbumsIndex'
    ])
  },
  methods: {
    ...mapActions([
      'albumSelect'
    ])
  }
}
</script>
<style lang="stylus" scoped>
.sidebar
  width 214px
  background #222222
  background-image linear-gradient(180deg, #222222 23%, #0C0C0C 100%)
  box-shadow 0 2px 30px 0 rgba(0, 0, 0, 0.29)
  height 100%
  .my-album
    width 100%
    height 73px
    display flex
    box-sizing border-box
    justify-content space-between
    align-items center
    padding 0 25px
    font-family 'Noto Sans TC'
    font-weight 500
    font-size 18px
    color #979797
    letter-spacing 0
  .sidebar-wrap
    height 514px
    width 100%
    overflow-y auto
    overflow-x hidden
    background rgba(42, 42, 42, 0.9)
    .sidebar-list
      width 100%
      height 50px
      display flex
      justify-content flex-start
      align-items center
      font-family 'Noto Sans TC'
      font-weight 500
      font-size 16px
      color #868686
      letter-spacing 0
      box-sizing border-box
      padding-left 25px
      &.active
        background-image linear-gradient(270deg, rgba(#FFA883, 0.2) 0%, rgba(#3927FF, 0.2) 100%)
        color #fff
.now-playing-cover
  position relative
  width 215px
  height 213px
  background-image url('~@/assets/pexels-photo-2009968.jpeg')
  background-size contain
  background-repeat no-repeat
  background-position center
  .transparent-wrap
    width 100%
    height 100%
    background rgba(#000, 0.3)
  .now-is, .album-name, .song-name
    position absolute
    left 25px
  .now-is
    top 16px
    font-family 'Noto Sans TC'
    font-weight 500
    font-size 18px
    color #FFFFFF
    letter-spacing 0
  .album-name
    top 47px
    font-family Roboto
    font-weight 500
    font-size 18px
    color #959595
    letter-spacing 0
  .song-name
    top 162px
    font-family Roboto
    font-weight bold
    font-size 26px
    color #FFFFFF
    letter-spacing 0
</style>
