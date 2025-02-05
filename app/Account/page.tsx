"use client";
import { getUser } from "@/app/api/user/route";
import { useEffect, useState } from "react";
import User from "@/app/Objects/User";
import { getConnectionCookie } from "@/app/components/functions";
import { useRouter } from "next/router";


export default async function Account() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const isUserLoggedInCookie = await getConnectionCookie();
  isUserLoggedInCookie ? setIsUserLoggedIn(true) : setIsUserLoggedIn(false){

      router.push('/login');
  }

  const account: User = await getUser();
    setLoading(false);
  if (isLoading) return <p>Loading...</p>;
  if (!account) return <p>No profile data</p>;
  return (
    <div>
      <h1>{account.name}</h1>
      <h2>{account.email}</h2>
      <img src={account.imageprofil} alt="profile image" />
    </div>
  );
}
