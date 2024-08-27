import { fetchUsers } from "@/assets/utils"
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
    queryKey: ['characters'],
    queryFn: async () => {
      return await fetchUsers()
    },
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Publications />
    </HydrationBoundary>
  )
}