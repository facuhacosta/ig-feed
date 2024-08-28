import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleIcon from '@mui/icons-material/Circle';

type AccountSelectorProp = {
  currentAccountName?: string
}

export default function AccountSelector({ currentAccountName }: AccountSelectorProp) {
  return (
    <div className="flex justify-between w-[150px] items-center">
      <Button secondary className="flex">
        <Text type="bold">{currentAccountName}</Text>
        <ExpandMoreIcon />
      </Button>
      <CircleIcon sx={{fontSize: 12, color: 'red'}} />
    </div>
  )
}