import { Character } from './types';

export const fetchUsers = async () => {
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