import AccountSelector from "@/components/molecules/AccoutSelector";
import CallTiActionIcons from "@/components/molecules/CallToActionIcons";
import PostsNavigation from "@/components/molecules/PostsNavigation";
import Header from "@/components/organisms/Header";

export default function FeedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="max-w-[500px] w-full self-center border-[#fff] border-2 p-2">
      <nav className="flex w-full justify-between">
        <AccountSelector currentAccountName="facuhacosta"/>
        <CallTiActionIcons />
      </nav>
      <Header />
      <PostsNavigation />
      <div>
        {children}
      </div>
    </section>
  );
}