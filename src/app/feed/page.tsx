import { fetchCharacters } from "@/assets/utils"
import { dehydrate, HydrationBoundary, QueryClient, useQuery } from "@tanstack/react-query"
import Feed from "./feed"

export default async function FeedPage() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  })

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['characters'],
    queryFn:fetchCharacters,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      const nextString = lastPage.info.next
      const nextPageParam = +nextString.slice(nextString.indexOf('page=') + 5)
      return nextPageParam
    }, 
    pages: 0
  })


  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Feed />
    </HydrationBoundary>
  )
}