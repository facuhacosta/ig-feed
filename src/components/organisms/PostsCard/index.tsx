import { Character } from "@/assets/types";

export default function PostsCard({character} : {character: Character}) {
  return (
    <div key={character.name} className="">
      <img src={character.image} />
    </div>
  )
}