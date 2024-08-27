export default function ProfileImage() {
  return (
    <div className="relative w-[50px] h-[50px]">
      <div className="absolute -top-4 flex items-center justify-center bg-[#363636] rounded-lg p-1 text-xs">
        <p className="z-10">Nota...</p>
        <span className="z-1 absolute bg-[#363636] w-3 h-3 top-4 left-1.5 rounded-full" aria-hidden={true}></span>
        <span className="z-1 absolute bg-[#363636] w-1 h-1 top-7 left-4 rounded-full" aria-hidden={true}></span>
      </div>
      <img className="bg-[#fff] w-12 h-12 rounded-full"></img>
      <p className="absolute top-8 left-7 flex bg-[#00f] font-bold w-5 h-5 rounded-full items-center justify-center border-2 border-[#000]">+</p>
    </div>
  )
}