import { Character } from "@/assets/types";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Image from "next/image";
import Text from "@/components/atoms/Text";

type CharacterDetailedCardProps = {
  character: Character,
  currentValue: boolean,
  handleOnClick: () => void
}

export default function CharacterDetailedCard({ character, currentValue, handleOnClick }: CharacterDetailedCardProps) {
  return (
    <>
      <Image alt={character?.name} src={character?.image} width={310} height={200} />
      <div>
        <p className="cursor-pointer w-6" onClick={handleOnClick}>
          {
            currentValue ? <FavoriteIcon />
              : <FavoriteBorderIcon />
          }
        </p>
        <Text type="heading">{character?.name} - {character?.location.name}</Text>
      </div>
    </>
  )
}