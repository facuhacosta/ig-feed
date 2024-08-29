import Skeleton from "@mui/joy/Skeleton";

export default function CharacterSkeleton({loading}: {loading: boolean}) {
  return (
    <>
      <div className="hidden laptop:block">
        <Skeleton loading={loading} variant="rectangular" className="self-center mb-4" width={400} height={400} />
        <div className="ml-8">
          <Skeleton loading={loading} variant="text" />
          <Skeleton loading={loading} variant="text" width={300} />
          <Skeleton loading={loading} variant="text" width={300} />
          <Skeleton loading={loading} variant="text" width={300} />
        </div>
      </div>
      <div className="block laptop:hidden">
        <Skeleton loading={loading} variant="rectangular" className="self-center mb-4" width={320} height={250} />
        <Skeleton loading={loading} variant="text" />
        <Skeleton loading={loading} variant="text" width={150} />
        <Skeleton loading={loading} variant="text" width={150} />
        <Skeleton loading={loading} variant="text" width={150} />
      </div>
    </>
  )
}