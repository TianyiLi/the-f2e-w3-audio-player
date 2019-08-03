<template>
  <div class="recommend-bg"
    @click="$emit('input', false)"
    v-if="value">
    <div class="recommend-box"
      @click.stop>
      <div class="round">
        <div class="logo-wrap">
          音樂無限
        </div>
        <div class="slogan">升級享受更完美的音樂體驗</div>
      </div>
      <div class="bg-block first"></div>
      <div class="bg-block second"></div>
      <div class="bg-block third"></div>
      <div class="update">升級帳號</div>
      <div class="clear"
        @click.stop="$emit('input', false)"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['value']
}
</script>

<style lang="stylus" scoped>
size($w, $h = $w)
  width $w
  height $h
.recommend-bg
  z-index 999
  position fixed
  top 0
  left 0
  margin 0
  padding 0
  display flex
  justify-content center
  align-items center
  width 100%
  height 100%
  background rgba(#000, 0.6)
  .recommend-box
    position relative
    background #2E2E2E
    background-image linear-gradient(270deg, rgba(#FFA883, 0.5) 0%, rgba(#3927FF, 0.5) 100%)
    box-shadow 0 2px 15px 0 rgba(0, 0, 0, 0.5)
    border-radius 10px
    width 527px
    height 337px
    .round
      white-space nowrap
      size 214px
      position absolute
      left 61px
      top 40px
      background-image linear-gradient(236deg, #FFA883 0%, #3927FF 92%)
      border-radius 50%
      .logo-wrap
        size 90px
        white-space normal
        font-family 'Noto Sans TC'
        font-weight bold
        font-size 40px
        color #FFFFFF
        letter-spacing 4.18px
        text-align left
        line-height 45px
        position absolute
        top 39px
        left 48px
      .slogan
        position absolute
        left 49px
        top 145px
        white-space nowrap
        width 205px
        font-family 'Noto Sans TC'
        font-weight 500
        font-size 16px
        color #FFFFFF
        letter-spacing 0
        text-align left
    .bg-block
      background-image linear-gradient(270deg, #FFA883 0%, #3927FF 100%)
      position absolute
      &.first
        filter blur(5px)
        size 157px 47px
        top 82px
        left 229px
      &.second
        filter blur(1px)
        size 51px 24px
        left 409px
        top 158px
      &.third
        filter blur(7px)
        size 32px 16px
        left 347px
        top 190px
    .clear
      size 22.6px
      cursor pointer
      position absolute
      right 16.7px
      top 18.7px
      background-image url('~@/assets/round-clear-24px.svg')
      background-size contain
    .update
      background-color rgba(#000, 0.4)
      border-radius 18.5px
      width 116px
      height 37px
      display flex
      justify-content center
      align-items center
      position absolute
      top 268px
      left 216px
      font-family 'Noto Sans TC'
      font-weight 500
      font-size 16px
      color #FFFFFF
      letter-spacing 0
      text-align left
</style>
