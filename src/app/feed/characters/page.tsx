'use client'
import { useLocalStorage } from "@/assets/hooks";
import { fetchPostDetails } from "@/assets/utils";
import { useQuery } from "@tanstack/react-query";
import CharacterSkeleton from "@/components/organisms/CharacterSkeleton";
import CharacterDetailsNav from "@/components/molecules/CharacterDetailsNav";
import CharacterDetailedCard from "@/components/molecules/CharacterDetailedCard";

export default function CharacterPage({ searchParams }: {searchParams: { [key: string]: string | string[] | undefined }}) {
  const {id = ''} = searchParams
  
  const { isLoading, isError, data: character } = useQuery({
    queryKey: [`post-${id}`],
    queryFn: async () => {
      return await fetchPostDetails(+id)
    }
  })

  const { currentValue, setItem } = useLocalStorage(`${id}`)

  const handleOnClick = () => {setItem(!currentValue)}

  return (
    <div className="w-screen h-screen backdrop-blur-[1px] top-0 left-0 absolute z-20 flex justify-center tablet:items-center">

      <div className="flex flex-col p-2 w-[350px] h-[450px] bg-[#252525] tablet:p-4 laptop:flex-row laptop:w-[800px]">
        <CharacterSkeleton loading={isLoading} />
        {character && <CharacterDetailedCard character={character} currentValue={currentValue} handleOnClick={handleOnClick} />}
        <CharacterDetailsNav id={id} />
      </div>
      {(!isLoading && isError) && <p>Error en la Carga</p>}
      {(!isLoading && !isError && !character) && <p>Usuario no encontrado</p>}
    </div>
  )
}