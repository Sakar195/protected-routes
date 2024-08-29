import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Next.js App</h1>
      <div className="flex flex-col items-center">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <p className="mt-6 text-center text-lg">
          My first Project using NextJs .
        </p>
        <p className="mt-6 text-center text-lg">The Protected-Route</p>
      </div>
    </main>
  );
}
