'use client'

import { useQuery } from "@tanstack/react-query"
import { fetchEpisodes } from "@/assets/utils"
import { Character } from "@/assets/types"

const Publications = () => {
  const { isLoading, isError, data: characters = [] } = useQuery({
    queryKey: ['episodes'],
    queryFn: async () => {
      return await fetchEpisodes()
    }
  })

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

export default Publications