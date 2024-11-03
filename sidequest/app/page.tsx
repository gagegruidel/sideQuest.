import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Current Quests</h1>
      <ul>
        {/* Example quests */}
        <li>
          <Link href="/quests/quest1">Quest 1</Link>
        </li>
        <li>
          <Link href="/quests/quest2">Quest 2</Link>
        </li>
      </ul>
      <Link href="/login">Login</Link>
      <Link href="/completed">Completed Quests</Link>
      <Link href="/profile">Profile Overview</Link>
      <Link href="/search">Search Quests</Link>
      <Link href="/blog">Blog</Link>
    </div>
  );
}