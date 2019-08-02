import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /**
     * @type {IAlbums}
     */
    albums: [],
    currentAlbumsIndex: 1,
    currentSongIndex: 1,
    isPlaying: false,
    isRepeat: false,
    isRandom: false,
    volume: 50
  },
  getters: {
    albums: state => state.albums,
    isPlaying: state => state.isPlaying,
    playlist: state => state.albums[state.currentAlbumsIndex],
    isRepeat: state => state.isRepeat,
    isRandom: state => state.isRandom,
    volume: state => state.volume
  },
  mutations: {

  },
  actions: {
    playMusic ({ state }) {
      state.isPlaying = !state.isPlaying
    },
    albumSelect ({ state }, i) {
      state.currentAlbumsIndex = i
    },
    louder ({ state }) {
      state.volume = state.volume + 10 >= 100 ? 100 : state.volume + 10
    },
    lower ({ state }) {
      state.volume = state.volume - 10 <= 0 ? 0 : state.volume - 10
    },
    setVolume ({ state }, value) {
      state.volume = value
    },
    randomToggle ({ state }) {
      state.isRandom = !state.isRandom
    },
    playingToggle ({ state }) {
      state.isPlaying = !state.isPlaying
    },
    repeatToggle ({ state }) {
      state.isPlaying = !state.isPlaying
    }
  }
})
