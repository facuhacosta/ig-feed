import Button from "@/components/atoms/Button";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MenuIcon from '@mui/icons-material/Menu';

export default function CallTiActionIcons() {
  return (
    <div className="flex justify-between w-[100px] laptop:justify-end">
      <Button secondary className="laptop:hidden">
        <AlternateEmailIcon/>
      </Button>
      <Button secondary className="laptop:hidden">
        <AddBoxOutlinedIcon />
      </Button>
      <Button secondary className="laptop:hidden">
        <MenuIcon />
      </Button>
      <Button secondary className="hidden laptop:block">
        <SettingsOutlinedIcon />
      </Button>
    </div>
  )
}