export default function Statistic({label, value}: {label: string, value: number}) {
  return (
    <div className="text-center laptop:flex laptop:gap-2">
      <p className="font-bold">{value}</p>
      <p>{label}</p>
    </div>
  )
}