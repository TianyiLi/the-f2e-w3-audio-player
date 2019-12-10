<template>
  <div class="progress-bar-wrap"
    :style="{width: ctnWidth}">
    <div class="progress-bar-background"
      :class="isActive && '__on-drag' || ''"
      ref="ctn"
      @click.capture="onClick($event)"
      @mousedown="mouseDown($event)"
      @mouseup="mouseUp($event)">
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
      mousedownX: 0,
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
    window.addEventListener('mouseup', this.mouseUp, true)
  },
  destroyed () {
    window.removeEventListener('mouseup', this.mouseUp, true)
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
    mouseDown (e) {
      this.isActive = true
      this.mousedownX = e.offsetX
      window.addEventListener('mousemove', this.move.bind(this))
    },
    mouseUp () {
      this.isActive = false
      window.removeEventListener('mousemove', this.move.bind(this))
      this.$emit('change', this.slideValue)
    },
    move (ev) {
      if (this.isActive) {
        let x = this.$refs['ctn'].getBoundingClientRect().left
        this.x = ev.pageX - x - 5 >= this.ctnWidth - 5 ? this.ctnWidth - 5 : (ev.pageX - x - 5 < -5 ? -5 : ev.pageX - x - 5)
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
