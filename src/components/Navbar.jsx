"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession();
  console.log(session);
  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  const handler = () => {
    router.push("/api/auth/signin");
  };

  // if (pathName.includes("dashboard"))
  //   return <div className="bg-blue-400">Dashboard Layout</div>;
  return (
    <nav className="bg-blue-500 px-6 py-4 flex justify-between items-center">
      <h6 className="text-3xl">
        <Link href={"/"}>
          Next <span className="text-orange-300">Meal</span>
        </Link>
      </h6>
      <ul className="flex justify-between items-center space-x-4">
        {links?.map((link) => (
          <Link
            className={`${pathName === link.path && "text-cyan-300"}`}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <div>
        <div className="flex items-center space-x-3">
          <div>
            <h5>{session?.data?.user?.name}</h5>
            <h6>{session?.data?.user?.type}</h6>
          </div>
          {session?.data && (
            <div className="rounded-full mr-3 overflow-hidden size-12">
              <Image
                height={50}
                width={50}
                alt={session?.data?.user?.name}
                src={session?.data?.user?.image}
              />
            </div>
          )}

          <div>
            <Link href={'/api/auth/signup'}>
            <button
              className="mr-3 bg-white text-orange-600 font-semibold px-6 py-3 hover:bg-slate-300"
            >
              Sign Up
            </button>
            </Link>
            {session.status !== "authenticated" ? (
              <button
                onClick={handler}
                className="bg-white text-orange-600 font-semibold px-6 py-3 hover:bg-slate-300"
              >
                Login
              </button>
            ) : (
              <button
                onClick={() => signOut()}
                className="bg-white text-orange-600 font-semibold px-6 py-3 hover:bg-slate-300"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
