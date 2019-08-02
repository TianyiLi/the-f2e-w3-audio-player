interface IAlbums {
  name: string
  image: string
  list: playList[]
}

interface playList {
  name: string, time: number, audioUrl: ''
}
