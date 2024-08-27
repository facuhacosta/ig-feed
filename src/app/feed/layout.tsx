import FeedDetailsSSr from "@/components/organisms/FeedDetails";


export default async function FeedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <section className="max-w-[500px] w-full self-center border-[#fff] border-2 p-2">
      <FeedDetailsSSr/>
        <div>
            {children}
        </div>
    </section>
  );
}