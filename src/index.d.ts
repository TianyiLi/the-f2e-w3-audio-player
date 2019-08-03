interface IAlbums {
  name: string
  image: string
  list: playList[]
  createdFrom: ''
}

interface playList {
  name: string, time: number, audioUrl: ''
}
