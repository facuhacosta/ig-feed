import Statistic from "@/components/atoms/Statistic"

export default function ProfileStatistics() {
  return (
    <div className="flex w-[300px] laptop:w-auto justify-between items-center laptop:gap-4">
      <Statistic label="publicaciones" value={10} />
      <Statistic label="seguidores" value={1543} />
      <Statistic label="seguidos" value={1238} />
    </div>
  )
}