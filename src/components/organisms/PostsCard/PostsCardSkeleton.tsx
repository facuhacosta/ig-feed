import Skeleton from "@mui/joy/Skeleton";

export default function CharacterSkeleton({ loading }: { loading: boolean }) {
  return (
    <>
      <Skeleton loading={loading} variant="rectangular" className="self-center mb-4" width={320} height={250} />
      <Skeleton loading={loading} variant="text" width={150} />
      <Skeleton loading={loading} variant="text" width={150} />
      <Skeleton loading={loading} variant="text" width={150} />
    </>
  )
}