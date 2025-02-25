"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to CRUD Application</h1>
      <h3 className="text-xl font-bold mb-6 text-pink-400">by Aanshi Rakesh Kumar</h3>
      
      <p className="mb-4">Get started by editing <code className="bg-gray-200 px-2 py-1 rounded">app/page.js</code>.</p>
      <p className="mb-8">Save and see your changes instantly.</p>

      <div className="flex gap-4">
        <Link href="/products">
          <button className="btn btn-primary">Go to Products</button>
        </Link>

        <Link href="http://localhost:3000/products" target="_blank">
          <button className="btn btn-secondary">Open Products in New Tab</button>
        </Link>
      </div>
    </div>
  );
}