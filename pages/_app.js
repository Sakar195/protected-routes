import "@/styles/globals.css";
import Link from "next/link";
export default function App({ Component, pageProps }) {
  return (
    <>
      <nav className="p-4 bg-gray-800 text-white">
        <Link href="/" className="mr-4">
          Home
        </Link>
        <Link href="/login" className="mr-4">
          Login
        </Link>
        <Link href="/dashboard" className="mr-4">
          Dashboard
        </Link>
        <Link href="/logout" className="ml-4">
          Logout
        </Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
