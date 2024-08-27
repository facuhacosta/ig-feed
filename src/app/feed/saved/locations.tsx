'use client'

import { useQuery } from "@tanstack/react-query"
import { fetchLocations } from "@/assets/utils"
import { Character } from "@/assets/types"

export default function Locations() {
  const { isLoading, isError, data: characters = [] } = useQuery({
    queryKey: ['characters'],
    queryFn: async () => {
      return await fetchLocations()
    }
  })

  console.log(characters);

  return (
    <div>
      {characters.length > 0 && characters.map((character: Character) => (
        <p>{character.name}</p>
      ))}

      {isLoading && <p>Is Loading ...</p>}
      {(!isLoading && isError) && <p>Error en la Carga</p>}
      {!isError && !isLoading && characters.length === 0 && <p>No hay Usuarios</p>}
    </div>
  )
}