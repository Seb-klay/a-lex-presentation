// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>

      <p className="text-lg text-gray-600 mb-8">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="px-4 py-2 rounded bg-black text-white hover:bg-gray-800 transition"
      >
        Go back home
      </Link>
    </div>
  );
}