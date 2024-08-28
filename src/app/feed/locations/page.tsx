import { fetchLocations } from "@/assets/utils"
import { dehydrate, HydrationBoundary, QueryClient, useQuery } from "@tanstack/react-query"
import Locations from "./locations"

export default async function PublicationsPage() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  })

  await queryClient.prefetchQuery({
    queryKey: ['locations'],
    queryFn: async () => {
      return await fetchLocations()
    },
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Locations />
    </HydrationBoundary>
  )
}