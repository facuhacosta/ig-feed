import Button from "@/components/atoms/Button";

export default function CallTiActionIcons() {
  return (
    <div className="flex justify-between w-[100px]">
      <Button secondary>@</Button>
      <Button secondary>+</Button>
      <Button secondary> - </Button>
    </div>
  )
}