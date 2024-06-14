import React from "react";
import { Headland_One } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
const headland = Headland_One({ weight: ["400"], subsets: ["latin"] });

const getTime = async () => {
  const res = await fetch("http://localhost:3000/time", { cache : 'no-store'});
  const data = await res.json()
  return data.currentTime;
};

const Page = async () => {

const session = await getServerSession(authOptions)
console.log({session});
  const currentTime =await getTime();

  return (
    <div className={`${headland.className} min-h-screen px-12 py-24`}>
      <h6 className="text-3xl">About Page</h6>
      <h3 className="text-3xl text-red-400 mt-12">Time : {currentTime}</h3>
    </div>
  );
};

export default Page;
