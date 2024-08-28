import { Character } from "@/assets/types";
import Text from "@/components/atoms/Text";
import ProfileImage from "@/components/molecules/ProfileImage";
import ProfileOptions from "@/components/molecules/ProfileOptions";
import ProfileStatistics from "@/components/molecules/ProfileStatistics";

export default function Header({details}: {details?: Character}) {
  return (
    <header>
      <section className="flex w-full justify-between items-center mt-4">
        <ProfileImage src={details?.image} />
        <ProfileStatistics />
      </section>
      <section className="mt-4">
        <Text type="bold">{details?.name}</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut iaculis ipsum. Vestibulum vitae gravida felis. In et elit non elit scelerisque suscipit. Quisque id volutpat ligula. Nullam lectus.</Text>
      </section>
      <ProfileOptions />
    </header>
  )
}