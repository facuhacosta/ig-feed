import AddNote from "@/components/atoms/AddNote";
import Image from "next/image";

export default function ProfileImage({src}: {src: string}) {
  return (
    <div className="relative w-[50px] h-[50px]">
      <AddNote />
      <Image loading="lazy" alt="profileImg" width={50} height={50} src={src} className="bg-[#fff] rounded-full"></Image>
      <p className="absolute top-8 left-7 flex bg-[#00f] font-bold w-5 h-5 rounded-full items-center justify-center border-2 border-[#000]">+</p>
    </div>
  )
}