import { QueryFunction, SkipToken } from '@tanstack/react-query';
import { Character } from './types';

export const fetchAccountDettails = async () => {
  return await fetch(`https://rickandmortyapi.com/api/character/1`)
    .then(async res => {
      if (!res.ok) throw new Error("Error del fetch");
      return await res.json()
    })
    .then(res => {
      const characters: Character = res
      return characters
    })
}

export const fetchPostDetails = async (characterId: number) => {
  return await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
    .then(async res => {
    if (!res.ok) throw new Error("Error del fetch");
    return await res.json()
  })
    .then(res => {
      const characters: Character = res
      return characters
    })
}

type FetchCharactersResponse = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  }
  results: Character[]
}

export const fetchCharacters: QueryFunction<FetchCharactersResponse, string[], number> | SkipToken = async ({pageParam}) => {
  const response: FetchCharactersResponse = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageParam}`)
    .then(async res => {
      if (!res.ok) throw new Error("Error del fetch");
      return await res.json()
    })
    
    return response
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

export const fetchEpisodes = async () => {
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