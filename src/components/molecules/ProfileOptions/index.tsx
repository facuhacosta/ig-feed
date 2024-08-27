import Button from "@/components/atoms/Button";

export default function ProfileOptions() {
  return (
    <section className="flex gap-5">
      <Button>Editar perfl</Button>
      <Button>Compartir perfil</Button>
      <Button>{'{^}+'}</Button>
    </section>
  )
}