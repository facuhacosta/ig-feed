import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";

type AccountSelectorProp = {
  currentAccountName: string
}

export default function AccountSelector({ currentAccountName }: AccountSelectorProp) {
  return (
    <div className="flex justify-between w-[150px]">
      <Button secondary className="flex">
        <Text type="bold">{currentAccountName}</Text> ^
      </Button>
      <p>*</p>
    </div>
  )
}