'use client'

import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchCharacters } from "@/assets/utils"
import { Character } from "@/assets/types"
import PostsCard from "@/components/organisms/PostsCard"
import { useEffect, useRef } from "react"
import Skeleton from "@mui/joy/Skeleton"

export default function Feed() {
  const bottom = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const obserber = new IntersectionObserver(() => {
      if (hasNextPage) {
        fetchNextPage()
      }
    })

    obserber.observe(bottom.current as HTMLElement)
  },[])
  return (
    <div className="grid grid-cols-2 gap-1 justify-items-center phone:grid-cols-3 ">
      {data?.pages?.length > 0 && data?.pages?.map(({info, results}: {info: any ,results: Character[]}) => results.map((character) => (
          <PostsCard character={character} />
        )))}

      <div ref={bottom} />
      <Skeleton loading={isLoading} variant="text" width={150} />
      {(!isLoading && isError) && <p>Error en la Carga</p>}
      {!isError && !isLoading && data?.pages?.length === 0 && <p>No hay Usuarios</p>}
    </div>
  )
}

