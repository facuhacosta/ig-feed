'use client';

import { fetchPostDetails } from "@/assets/utils";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation"

export default function CharacterPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id') || ''

  const { isLoading, isError, data: characters = [] } = useQuery({
    queryKey: [`post-${ id }`],
    queryFn: async () => {
      return await fetchPostDetails(+id)
    }
  })

  console.log(id)
  return (
    <div className="w-screen h-screen backdrop-blur-[1px] top-0 left-0 absolute z-20 flex justify-center items-center">
      <div className="w-[350px] h-[450px] bg-[#000]">
        {id}
      </div>
    </div>
  )
}