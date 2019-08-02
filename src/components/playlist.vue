<template>
  <div class="playlist-ctn">
    <div class="playlist-wrap">
      <table>
        <tr class="li"
          v-for="(list, i) in playList"
          :key="i">
          <td class="id">
            {{i+1}}
          </td>
          <td class="music-name">
            {{list.name}}
          </td>
          <td class="music-time">
            {{list.time}}
          </td>
          <td>
            <div class="add"></div>
          </td>
          <td>
            <div class="remove"></div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'playlist'
    ])
  }
}
</script>
<style lang="stylus" scoped>
.playlist-ctn
  width 987px
  height 464px
  position absolute
  right 0
  bottom 0
  background-color #2a2a2a
  table
    margin 84px 70px
    box-sizing border-box
    .music-name
      width 610px
    tr:nth-childs(n)
      background #222222
    tr:nth-childs(2n)
      background transparent
    tr
      height 54px
      width 847px
    .music-name
      text-align center
    .id, .music-time
      text-align left
    .music-time
      width 45px
</style>
