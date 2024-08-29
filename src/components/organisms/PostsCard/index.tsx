import { Character } from "@/assets/types";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useLocalStorage } from "@/assets/hooks";
import Link from "next/link";
import Text from "@/components/atoms/Text";
import Image from "next/image";

export default function PostsCard({ character }: { character: Character }) {
  const { currentValue, setItem } = useLocalStorage(`${character.id}`)

  return (
    <div key={character.name}>
      <div className="relative">
        <Link
          href={{
            pathname: `/feed/characters`,
            query: {
              id: character.id
            }
          }}
          className="absolute w-full h-full bg-[#000000] opacity-0 hover:opacity-80 cursor-pointer"
        >
          <div className="absolute top-[50%] left-[40%] flex gap-4" >
            <p onClick={() => setItem(!currentValue)}>
              {
                currentValue ? <FavoriteIcon />
                : <FavoriteBorderIcon />
              }
            </p>
            <ArticleOutlinedIcon />
          </div>
        </Link>
        <Image alt={character.name} src={character.image} width={275} height={275} />
      </div >
      <Text type="heading" className="text-base font-bold">{character.name}</Text>
      <Text type="normal" className="text-sm">Location: {character.origin.name}</Text>
      <Text type="normal" className="text-sm">Status: {character.status}</Text>
    </div>
  )
}