import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/globe.svg" alt="logo" width={40} height={40} />
          <span className="text-xl font-bold">MyApp</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-5">
          {session?.user ? (
            <>
              <Link
                href={`/user/${session?.user?.id}`}
                className="hover:text-blue-300 transition"
              >
                {session?.user?.name}
              </Link>
              <Link
                href="/startup/create"
                className="hover:text-blue-300 transition"
              >
                Create
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({
                    redirectTo: "/",
                  });
                }}
              >
                <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition">
                  Logout
                </button>
              </form>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition"
              >
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
