import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Link from "next/link";

type PostsCardShadowProps = {
  id: string;
  currentValue: boolean;
  handleOnClick: (event: React.PointerEvent<HTMLParagraphElement>) => void
}

export default function PostsCardShadow({ id, currentValue, handleOnClick}: PostsCardShadowProps) {
  return (
    <div className='opacity-0 hover:opacity-80'>
      <div className="z-20 absolute top-[50%] left-[40%] flex gap-4" >
        <p onClick={handleOnClick}>
          {
            currentValue ? <FavoriteIcon />
            : <FavoriteBorderIcon />
          }
        </p>
        <ArticleOutlinedIcon />
      </div>
      <Link
        href={{
          pathname: `/feed/characters`,
          query: {
            id: id
          }
        }}
        className="z-10 absolute w-full h-full bg-[#000000] cursor-pointer"
      />
    </div>
  )
}