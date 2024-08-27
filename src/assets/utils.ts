import { Character } from './types';

export const fetchAccountDettails = async () => {
  return await fetch(`https://rickandmortyapi.com/api/character/1`)
    .then(async res => {
      if (!res.ok) throw new Error("Error del fetch");
      return await res.json()
    })
    .then(res => {
      const characters: Character = res
      console.log(characters)
      return characters
    })
}

export const fetchCharacters = async () => {
  return await fetch(`https://rickandmortyapi.com/api/character`)
    .then(async res => {
      if (!res.ok) throw new Error("Error del fetch");
      return await res.json()
    })
    .then(res => {
      const characters: Character[] = res.results
      return characters
    })
}

export const fetchLocations = async () => {
  return await fetch(`https://rickandmortyapi.com/api/location`)
    .then(async res => {
      if (!res.ok) throw new Error("Error del fetch");
      return await res.json()
    })
    .then(res => {
      const characters: Character[] = res.results
      return characters
    })
}

export const fetchEpisode = async () => {
  return await fetch(`https://rickandmortyapi.com/api/episode`)
    .then(async res => {
      if (!res.ok) throw new Error("Error del fetch");
      return await res.json()
    })
    .then(res => {
      const characters: Character[] = res.results
      return characters
    })
}