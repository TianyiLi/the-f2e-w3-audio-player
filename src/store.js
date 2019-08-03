import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let l = [
  {
    name: 'Jazz Apricot',
    time: 60 + 52,
    audioUrl: ''
  },
  {
    name: 'Write You',
    time: 2 * 60 + 26,
    audioUrl: ''
  },
  {
    name: 'Keys to the Apocalypse',
    time: 4 * 60 + 3,
    audioUrl: ''
  },
  {
    name: 'A Ghost Town',
    time: 3 * 60 + 13,
    audioUrl: ''
  },
  {
    name: 'Space Hunter',
    time: 3 * 60 + 39,
    audioUrl: ''
  },
  {
    name: 'Ice Cream',
    time: 2 * 60 + 3,
    audioUrl: ''
  }
]
/** @type {IAlbums} */
let albums = [
  {
    name: 'Jessica',
    image: '',
    list: l,
    createFrom: ''
  },
  {
    name: 'YouTube Music',
    image: '',
    list: l,
    createFrom: ''
  },
  {
    name: 'November',
    image: '',
    list: l,
    createFrom: ''
  },
  {
    name: 'Space Hunter',
    image: '',
    list: l,
    createFrom: ''
  },
  {
    name: 'The Path Starts Here',
    image: '',
    list: l,
    createFrom: ''
  },
  {
    name: 'If I Had a Chicken',
    image: '',
    list: l,
    createFrom: ''
  },
  {
    name: 'They Might Not',
    image: '',
    list: l,
    createFrom: ''
  },
  {
    name: `There's Life Out`,
    image: '',
    list: l,
    createFrom: ''
  },
  {
    name: `Sprightly Pursuit`,
    image: '',
    list: l,
    createFrom: ''
  }
]

export default new Vuex.Store({
  state: {
    /**
     * @type {IAlbums}
     */
    albums,
    currentAlbumsIndex: 1,
    currentSongIndex: 0,
    isPlaying: false,
    isRepeat: false,
    isRandom: false,
    volume: 50
  },
  getters: {
    albums: state => state.albums,
    isPlaying: state => state.isPlaying,
    playlist: state => state.albums[state.currentAlbumsIndex].list,
    isRepeat: state => state.isRepeat,
    isRandom: state => state.isRandom,
    volume: state => state.volume,
    currentAlbumsIndex: state => state.currentAlbumsIndex,
    currentSongIndex: state => state.currentSongIndex
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
