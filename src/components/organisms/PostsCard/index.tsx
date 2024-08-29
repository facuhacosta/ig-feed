import { Character } from "@/assets/types";
import { useLocalStorage } from "@/assets/hooks";
import Text from "@/components/atoms/Text";
import Image from "next/image";
import PostsCardShadow from "@/components/molecules/PostsCardShadow";

export default function PostsCard({ character }: { character: Character }) {
  const { currentValue, setItem } = useLocalStorage(`${character.id}`)

  const handleOnClick = () => setItem(!currentValue)
  return (
    <div key={character.name}>
      <div className="relative">
        <PostsCardShadow id={character.id} handleOnClick={handleOnClick} currentValue={currentValue} />
        <Image alt={character.name} src={character.image} width={275} height={275} />
      </div >
      <Text type="heading" className="text-base font-bold">{character.name}</Text>
      <Text type="normal" className="text-sm">Location: {character.origin.name}</Text>
      <Text type="normal" className="text-sm">Status: {character.status}</Text>
    </div>
  )
}