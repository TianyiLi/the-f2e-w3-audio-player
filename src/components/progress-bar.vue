<template>
  <div class="progress-bar-wrap"
    :style="{width: ctnWidth}">
    <div class="progress-bar-background"
      ref="ctn"
      @click.capture="onClick($event)"
      @mousedown="mouseDown()"
      @mouseup="mouseUp()">
      <div class="progress-bar-progress"
        :style="{transform}"></div>
      <div class="drag-button"
        :style="{left: x+'px'}"
        ref="btn"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      default: 0
    },
    ctnWidth: {
      default: 100
    }
  },
  data () {
    return {
      isActive: false,
      x: 0,
      transform: 'translateX(0)',
      slideValue: +this.value
    }
  },
  watch: {
    // value () {
    //   this.init()
    // }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.x = this.ctnWidth * (+this.value) / 100 - 5
      this.barStyle()
    },
    /** @type {MouseEvent} */
    onClick (ev) {
      if (ev.target === this.$refs['btn']) return
      this.isActive = true
      this.x = ev.layerX - 5 >= this.ctnWidth ? this.ctnWidth : ev.layerX - 5
      this.barStyle()
      this.$emit('change', this.slideValue)
      this.isActive = false
    },
    mouseDown () {
      this.isActive = true
      this.$refs['ctn'].addEventListener('mousemove', this.move)
    },
    mouseUp () {
      this.isActive = false
      this.$refs['ctn'].removeEventListener('mousemove', this.move)
      this.$emit('change', this.slideValue)
    },
    move (ev) {
      if (this.isActive) {
        if (this.$refs['ctn'] !== ev.target) return
        this.x = ev.layerX - 5 >= this.ctnWidth ? this.ctnWidth : ev.layerX - 5
        this.barStyle()
      }
    },
    barStyle () {
      this.slideValue = (this.x + 5) / this.ctnWidth * 100
      let transform = 100 - (this.slideValue).toFixed(2) + '%'
      this.transform = `translateX(-${transform})`
    }
  }
}
</script>
