import Link from "next/link";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default function CharacterDetailsNav({ id } : { id: string | string[] }) {
  return (
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
        <ArrowCircleRightIcon sx={{ fontSize: 40 }} />
      </Link>
    </div>
  )
}