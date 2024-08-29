export default function ProfileStatistics() {
  return (
    <div className="flex w-[300px] laptop:w-auto justify-between items-center laptop:gap-4">
      <div className="text-center laptop:flex laptop:gap-2">
        <p className="font-bold">10</p>
        <p>publicaciones</p>
      </div>
      <div className="text-center laptop:flex laptop:gap-2">
        <p className="font-bold">1543</p>
        <p>seguidores</p>
      </div>
      <div className="text-center laptop:flex laptop:gap-2">
        <p className="font-bold">1238</p>
        <p>seguidos</p>
      </div>
    </div>
  )
}