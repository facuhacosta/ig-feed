import Button from "@/components/atoms/Button";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MenuIcon from '@mui/icons-material/Menu';

export default function CallTiActionIcons() {
  return (
    <div className="flex justify-between w-[100px]">
      <Button secondary>
        <AlternateEmailIcon/>
      </Button>
      <Button secondary>
        <AddBoxOutlinedIcon />
      </Button>
      <Button secondary>
        <MenuIcon />
      </Button>
    </div>
  )
}