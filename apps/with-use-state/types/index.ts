export interface INavLink {
  title: string
  url: string
}

export interface ISocialLink {
  title: string
  imageUrl: string
  url: string
}

export interface IListItem {
  title: string
  desc: string
  imageUrl: string
}

export interface ITodo {
  id: string | number
  text: string
  active: boolean
  done: boolean
}

export interface IPokemon {
  id: number
  name: string
  image: string
  type?: string[]
  stats?: [
    {
      name: string
      value: number
    },
  ]
}
