'use client'

import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchCharacters } from "@/assets/utils"
import { Character } from "@/assets/types"
import PostsCard from "@/components/organisms/PostsCard"

export default function Feed() {
  const { isLoading, isError, data = [] as any, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.pages + 1
  })

  console.log(data)
  return (
    <div>
      {data?.pages?.length > 0 && data?.pages?.map(({info, results}: {info: any ,results: Character[]}) => (
        <>
          {results.map((character) => (
            <PostsCard character={character} />
          ))}
        </>
      ))}

      <button onClick={() => fetchNextPage()}>Fetch next Page</button>
      {isLoading && <p>Is Loading ...</p>}
      {(!isLoading && isError) && <p>Error en la Carga</p>}
      {!isError && !isLoading && data?.pages?.length === 0 && <p>No hay Usuarios</p>}
    </div>
  )
}

