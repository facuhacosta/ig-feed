import Link from "next/link";

export default function PostsNavigation() {
  return (
    <nav className="flex justify-center gap-16 font-bold">
      <div>
        <Link href="/feed">{'[+]'}</Link>
      </div>
      <div>
        <Link href="/feed/saved">{'[>]'}</Link>
      </div>
      <div>
        <Link href="/feed/mentions">{'{^}'}</Link>
      </div>
    </nav>
  )
}