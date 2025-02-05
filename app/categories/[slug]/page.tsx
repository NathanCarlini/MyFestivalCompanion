"use client";
import { getUser } from "@/app/api/user/route";
import { useEffect, useState } from "react";
import User from "@/app/Objects/User";
import { getConnectionCookie } from "@/app/components/functions";
import { useRouter } from "next/router";

export default async function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

useEffect(() => {
  const cat = await fetch(`/api/getcategories`, {
    method: "POST",
    body: JSON.stringify({ category: params.slug }),
  });

  const data = await cat.json();
    

  // const resStats = await fetch(`/api/getfestivalsmap`, {
  //   method: "GET",      });
  // let dataFestivals = await resStats.json();
  }, []);

  if (isLoading == true) return <p>Loading...</p>; 


  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="">My Page</h1>
    </div>
  );
}
