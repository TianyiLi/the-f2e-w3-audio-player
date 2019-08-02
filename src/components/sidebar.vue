<template>
  <div class="sidebar">
    <div class="my-album">
      我的專輯<span class="plus"></span>
    </div>
    <div class="sidebar-wrap">
      <div class="sidebar-list"
        v-for="(album, i) in albums"
        :key="i"
        @click.prevent="albumSelect(i)">{{album}}</div>
    </div>
    <div class="now-playing-cover">
      <div class="transparent-wrap">
        <span class="now-is">現在播放</span>
        <span class="album-name">Youtube Music</span>
        <span class="song-name">Write You</span>
      </div>
      <img src="" alt="">
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'albums'
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
.sidbar
  width 214px
  background #222222
  background-image linear-gradient(180deg, #222222 23%, #0C0C0C 100%)
  box-shadow 0 2px 30px 0 rgba(0, 0, 0, 0.29)
  .my-album
    width 100%
    height 73px
    display flex
    box-sizing border-box
    justify-content space-between
    align-items center
    padding 0 25px
    font-family NotoSansCJKtc-Medium
    font-size 18px
    color #979797
    letter-spacing 0
  .sidbar-wrap
    height 514px
    width 100%
    overflow-y scroll
    overflow-x hidden
    .sidebar-list
      width 100%
      height 50px
      display flex
      justify-content flex-start
      align-items center
      font-family NotoSansCJKtc-Medium
      font-size 16px
      color #868686
      letter-spacing 0
      &.active
        background-image linear-gradient(270deg, #FFA883 0%, #3927FF 100%)
        background rgba(42, 42, 42, 0.9)
        color #fff
</style>
