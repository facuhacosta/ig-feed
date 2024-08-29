import Button from "@/components/atoms/Button";
import NotificationsIndicator from "@/components/atoms/NotificationsIndicator";
import Text from "@/components/atoms/Text";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type AccountSelectorProp = {
  currentAccountName?: string
}

export default function AccountSelector({ currentAccountName }: AccountSelectorProp) {
  return (
    <div className="flex justify-between w-[150px] items-center">
      <Button secondary className="flex">
        <Text type="bold">{currentAccountName}</Text>
        <p className="laptop:hidden">
          <ExpandMoreIcon/>
        </p>
      </Button>
      <NotificationsIndicator />
    </div>
  )
}