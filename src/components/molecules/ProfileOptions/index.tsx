import Button from "@/components/atoms/Button";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export default function ProfileOptions() {
  return (
    <section className="flex gap-5 justify-center items-center w-full my-2 laptop:hidden">
      <Button>Editar perfl</Button>
      <Button>Compartir perfil</Button>
      <Button><PersonAddAlt1Icon /></Button>
    </section>
  )
}