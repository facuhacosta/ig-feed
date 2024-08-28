'use client'

import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchCharacters } from "@/assets/utils"
import { Character } from "@/assets/types"
import PostsCard from "@/components/organisms/PostsCard"

export default function Feed() {
  const { isLoading, isError, data = [] as any, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      const nextString = lastPage.info.next
      const nextPageParam  = +nextString.slice(nextString.indexOf('page=') + 5)
      return nextPageParam
    }, 
  })

  console.log(data)
  return (
    <div className="grid grid-cols-2 gap-1 tablet:grid-cols-3 tablet:gap-2">
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

