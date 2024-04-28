import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="homeBackground flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100 text-white bg-gradient-to-t	">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Pet Website</h1>
        <p className="text-lg text-white mb-8">
          Explore our collection of adorable pets waiting for a loving home.
        </p>
        <Link
          href="/products"
          className="p-5 border bg-blue-500 text-white text-lg"
        >
          Go To Store
        </Link>
      </div>
    </>
  );
}
