import { fetchEpisodes } from "@/assets/utils"
import { dehydrate, HydrationBoundary, QueryClient, useQuery } from "@tanstack/react-query"
import Publications from "./publications"

export default async function PublicationsPage() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  })

  await queryClient.prefetchQuery({
    queryKey: ['episodes'],
    queryFn: async () => {
      return await fetchEpisodes()
    },
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Publications />
    </HydrationBoundary>
  )
}