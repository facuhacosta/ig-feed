import FeedDetailsSSr from "@/components/organisms/FeedDetails";


export default async function FeedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <section className="max-w-[640px] laptop:max-w-[850px] w-full self-center p-2">
      <FeedDetailsSSr/>
        <div>
            {children}
        </div>
    </section>
  );
}