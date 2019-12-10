<template>
  <div class="bottom-bar">
    <div class="music-slide-bar-wrap">
      <slidebar class="music"
        @change="onChange"
        :value="timeValue"
        :ctnWidth="987"></slidebar>
    </div>
    <div class="bottom-control-panel">
      <div class="shuffle"></div>
      <div class="prev"></div>
      <div class="play"></div>
      <div class="next"></div>
      <div class="repeat"></div>
    </div>
    <div class="sound-ctn">
      <div class="sound-img play"></div>
      <slidebar class="sound"
        @change="onVolumnChange"
        :value="volumnVaule"
        :ctnWidth="98"></slidebar>
    </div>
  </div>
</template>
<script>
import slidebar from './progress-bar'
export default {
  components: {
    slidebar
  },
  data () {
    return {
      timeValue: 50,
      volumnVaule: 50
    }
  },
  methods: {
    onChange (value) {
      this.timeValue = value
    },
    onVolumnChange (value) {
      this.volumnVaule = value
    }
  }
}
</script>
<style lang="stylus">
bgc()
  background-repeat no-repeat
  background-size contain
  background-position center
.bottom-bar
  position absolute
  right 0
  bottom 0
  width 987px
  height 75px
  background-color #1d1d1d
  &:before
    position absolute
    bottom 0
    left 0
    width 100%
    height 225px
    background-image linear-gradient(180deg, rgba(0, 0, 0, 0) 27%, rgba(0, 0, 0, 0.64) 100%)
  .shuffle
    position absolute
    left 361px
    top 25px
    width 25px
    height 25px
    cursor pointer
    background-image url('~@/assets/shuffle.png')
    &:hover
      background-image url('~@/assets/shuffle.png')
    bgc()
  .prev
    position absolute
    top 28px
    left 432px
    width 14px
    height 20px
    cursor pointer
    background-image url('~@/assets/step-backward-solid.png')
    &:hover
      background-image url('~@/assets/step-backward-solid_hover.png')
    bgc()
  .play
    position absolute
    top 19px
    left 476px
    width 37px
    height 37px
    cursor pointer
    background-image url('~@/assets/play-circle-regular.png')
    &:hover
      background-image url('~@/assets/play-circle-regular_hover.png')
    bgc()
  .next
    position absolute
    top 28px
    left 542px
    width 14px
    height 20px
    cursor pointer
    background-image url('~@/assets/step-forward-solid.png')
    &:hover
      background-image url('~@/assets/step-forward-solid_hover.png')
    bgc()
  .repeat
    position absolute
    left 602px
    top 29px
    width 21px
    height 17px
    cursor pointer
    background-image url('~@/assets/repeat.svg')
    bgc()
.music
  width 987px
  height 5px
  .progress-bar-progress
    background-image linear-gradient(270deg, #FFA883 0%, #3927FF 100%)
    &:after
      background-color rgba(54, 54, 54, 0.8)
.progress-bar-wrap
  position absolute
  top 0
  left 0
  .progress-bar-background
    width 100%
    height 100%
    position relative
    margin 0
    .progress-bar-progress
      width 100%
      height 100%
      position absolute
      left 0
      top 0
      border-radius 2.5px
      transform translateX(-100%)
      &:after
        width 120%
        left 90%
        height 100%
        content ''
  .drag-button
    position absolute
    top 50%
    transform translateY(-50%)
    left 0
    height 10px
    width 10px
    border-radius 50%
    z-index 1
    background-color #d8d8d8
.sound
  width 98px
  left 33px
  top 50%
  height 20px
  transform translateY(-50%)
  overflow hidden
  border-radius 4.5px
  .progress-bar-background
    top 50%
    transform translateY(-50%)
    height 5px
    background-color #282828
    &:hover.drag-button
      opacity 0 !important
  .progress-bar-progress
    background #888585
    border-radius 4.5px
.sound-ctn
  position absolute
  top 32px
  left 831px
  height 16px
  display inline-block
  .sound-img
    position absolute
    top 0
    left 0
    width 20px
    height 16px
    bgc()
    background-size cover
    &.play
      background-image url('../assets/round-volume_up-24px.svg')
.progress-bar-background
  .drag-button
    transition box-shadow .2s
  &.__on-drag,
  &:hover
    .drag-button
      box-shadow 0 0 10px white

</style>
