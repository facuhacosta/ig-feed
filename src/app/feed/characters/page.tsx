import { fetchPostDetails } from "@/assets/utils";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import CharactersPage from "./CharactersPage";

export default async function CharacterPage({ searchParams }: {searchParams: { [key: string]: string | string[] | undefined }}) {
  const {id = ''} = searchParams
  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  })

  await queryClient.prefetchQuery({
    queryKey: ['post-details'],
    queryFn: async() => await fetchPostDetails(+id)
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CharactersPage searchParams={searchParams} />
    </HydrationBoundary>
  )
}