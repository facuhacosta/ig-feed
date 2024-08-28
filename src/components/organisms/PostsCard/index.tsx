import { Character } from "@/assets/types";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useLocalStorage } from "@/assets/hooks";
import Link from "next/link";

export default function PostsCard({ character }: { character: Character }) {
  const { currentValue, setItem } = useLocalStorage(`${ character.name }-${character.status }-${character.id}`)

  return (
    <div key={character.name} className="relative">
      <div className="absolute w-full h-full bg-[#000000] opacity-0 hover:opacity-80 cursor-pointer">
        <div className="absolute top-[50%] left-[40%] flex gap-4" >
          <p onClick={() => setItem(!currentValue)}>
            {
              currentValue ? <FavoriteIcon />
              : <FavoriteBorderIcon />
            }
          </p>
          <Link
            href={`/feed/characters/${character.name}`}>
            <ArticleOutlinedIcon />
          </Link>
        </div>
      </div>
      <img src={character.image} />
    </div >
  )
}