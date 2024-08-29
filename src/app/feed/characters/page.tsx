'use client';

import { useLocalStorage } from "@/assets/hooks";
import { fetchPostDetails } from "@/assets/utils";
import Text from "@/components/atoms/Text";
import { useQuery } from "@tanstack/react-query";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Skeleton from "@mui/joy/Skeleton";
import Link from "next/link";

export default function CharacterPage({ searchParams }: {searchParams: { [key: string]: string | string[] | undefined }}) {
  const {id = ''} = searchParams
  
  const { isLoading, isError, data: character } = useQuery({
    queryKey: [`post-${id}`],
    queryFn: async () => {
      return await fetchPostDetails(+id)
    }
  })

  const { currentValue, setItem } = useLocalStorage(`${id}`)

  console.log(isLoading, isError)
  return (
    <div className="w-screen h-screen backdrop-blur-[1px] top-0 left-0 absolute z-20 flex justify-center tablet:items-center">

      <div className="flex flex-col p-2 w-[350px] h-[450px] bg-[#252525] tablet:p-4">
      <Skeleton loading={isLoading} variant="rectangular" className="self-center mb-4" width={310} height={250} >
        {character && 
          <>
            <img src={character?.image}/>
            <p className="cursor-pointer w-6" onClick={() => setItem(!currentValue)}>
              {
                currentValue ? <FavoriteIcon />
                : <FavoriteBorderIcon />
              }
            </p>
            <Text type="heading">{character?.name} - {character?.location.name}</Text>
          </>
        }
        </Skeleton>
        <Skeleton loading={isLoading} variant="text">
          <Link
            href={{
              pathname: `/feed/characters`,
              query: {
                id: +id - 1
              }
            }}
            >
            Prev Character
          </Link>
          <Link
            href={{
              pathname: `/feed/characters`,
              query: {
                id: +id + 1
              }
            }}
            >
            Next Character
          </Link>
        </Skeleton>
      </div>
      {(!isLoading && isError) && <p>Error en la Carga</p>}
      {(!isLoading && !isError && !character) && <p>Usuario no encontrado</p>}
    </div>
  )
}