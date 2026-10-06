import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h1>Home Page</h1>
      <Link href="/about-us">About Us</Link>
    </div>
  );
}
