import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";

const Navbar = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/globe.svg" alt="logo" width={100} height={30} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session?.user ? (
            <>
              <Link href={`/user/${session?.id}`}>
                <span className="text-black">{session?.user?.name}</span>
              </Link>
              <Link href="/signup"></Link>
            </>
          ) : (
            <button
              onClick={async () => {
                "use server";
                await signIn("github");
              }}
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
