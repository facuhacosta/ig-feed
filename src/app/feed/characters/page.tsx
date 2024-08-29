'use client';

import { useLocalStorage } from "@/assets/hooks";
import { fetchPostDetails } from "@/assets/utils";
import Text from "@/components/atoms/Text";
import { useQuery } from "@tanstack/react-query";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Skeleton from "@mui/joy/Skeleton";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Link from "next/link";
import Image from "next/image";
import CharacterSkeleton from "@/components/organisms/CharacterSkeleton";

export default function CharacterPage({ searchParams }: {searchParams: { [key: string]: string | string[] | undefined }}) {
  const {id = ''} = searchParams
  
  const { isLoading, isError, data: character } = useQuery({
    queryKey: [`post-${id}`],
    queryFn: async () => {
      return await fetchPostDetails(+id)
    }
  })

  const { currentValue, setItem } = useLocalStorage(`${id}`)

  return (
    <div className="w-screen h-screen backdrop-blur-[1px] top-0 left-0 absolute z-20 flex justify-center tablet:items-center">

      <div className="flex flex-col p-2 w-[350px] h-[450px] bg-[#252525] tablet:p-4 laptop:flex-row laptop:w-[800px]">
        <CharacterSkeleton loading={isLoading} />
        {character && 
          <>
            <Image alt={character?.name} src={character?.image} width={310} height={200}/>
            <div>
              <p className="cursor-pointer w-6" onClick={() => setItem(!currentValue)}>
                {
                  currentValue ? <FavoriteIcon />
                  : <FavoriteBorderIcon />
                }
              </p>
              <Text type="heading">{character?.name} - {character?.location.name}</Text>
            </div>
          </>
        }
        <div className="absolute w-screen flex justify-between top-1/2 left-0 px-10">
          <Link
            href={{
              pathname: `/feed/characters`,
              query: {
                id: +id - 1
              }
            }}
            className=""
            >
          <ArrowCircleLeftIcon sx={{ fontSize: 40 }} />
          </Link>
          <Link
            href={{
              pathname: `/feed/characters`,
              query: {
                id: +id + 1
              }
            }}
            >
          <ArrowCircleRightIcon sx={{fontSize: 40}} />
          </Link>
        </div>
      </div>
      {(!isLoading && isError) && <p>Error en la Carga</p>}
      {(!isLoading && !isError && !character) && <p>Usuario no encontrado</p>}
    </div>
  )
}