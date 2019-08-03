<template>
  <div class="playlist-ctn">
    <div class="playlist-wrap">
      <div class="table"
        border="0">
        <div class="row"
          v-for="(list, i) in playlist"
          :class="currentSongIndex === i ? 'active' : ''"
          :key="i">
          <span class="id">
            {{i+1}}
          </span>
          <span class="music-name">
            {{list.name}}
          </span>
          <span class="music-time">
            {{list.time | getTime}}
          </span>
          <span class="add">
          </span>
          <span class="remove">
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'playlist',
      'currentSongIndex'
    ])
  },
  filters: {
    getTime (num) {
      return `${~~(num / 60)}:${('0' + num % 60).slice(-2)}`
    }
  }
}
</script>
<style lang="stylus" scoped>
.playlist-ctn
  width 987px
  height 390px
  position absolute
  right 0
  bottom 0
  overflow-y auto
  overflow-x hidden
  background-color #2a2a2a
  .table
    width 100%
    padding 84px 70px
    box-sizing border-box
    .music-name-
      width 610px
    .row:nth-child(even)
      border 0
      background #222222
    .row:nth-child(odds)
      background transparent
    .row
      height 54px
      width 847px
      box-sizing border-box
      padding-left 30px
      padding-right 22px
      display flex
      align-items center
      &>*
        border-color transparent
        border-width 0
        padding 0
        margin 0
        display flex
        justify-content center
        align-items center
        font-family Roboto
        font-weight 500
        font-size 18px
        color #FFFFFF
        letter-spacing 0
        text-align right
      &.active
        background-image linear-gradient(270deg, #FFA883 0%, #3927FF 100%)
    .music-name
      text-align center
      width 630px
    .id, .music-time
      justify-content flex-start
    .music-time
      width 45px
    .add, .remove
      width 16px
      height 16px
      background-size contain
      background-repeat no-repeat
      background-position center
    .add
      margin-right 18px
      margin-left 69px
      background-image url('~@/assets/plus-solid.png')
      &:hover
        background-image url('~@/assets/plus-solid_hover.png')
    .remove
      margin-right 0
      background-image url('~@/assets/minus-solid.png')
      &:hover
        background-image url('~@/assets/minus-solid_hover.png')
</style>
