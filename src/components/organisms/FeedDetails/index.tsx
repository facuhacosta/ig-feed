import { fetchAccountDettails } from "@/assets/utils"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import FeedDetails from "./FeedDetails"

export default async function FeedDetailsSSr() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  })

  await queryClient.prefetchQuery({
    queryKey: ['accountDetails'],
    queryFn: async () => {
      return await fetchAccountDettails()
    },
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FeedDetails />
    </HydrationBoundary>
  )
}