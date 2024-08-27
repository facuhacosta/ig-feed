export type Character = {
  name: string
  image: string
  status: 'alive' | 'dead' | 'unknown'
  origin: {
    name: string
  }
  location: {
    name: string
  }
  species: string
  gender: string
}