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
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.pages + 1, 
    pages: 2
  })


  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Feed />
    </HydrationBoundary>
  )
}