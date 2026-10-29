import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><span>404</span><h1>这个项目还不存在。</h1><Link href="/">返回作品集</Link></main>;
}
