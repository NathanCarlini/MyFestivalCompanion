"use client"
import { useSession } from 'next-auth/react';

const UserProfile = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <h1>Bienvenue, {session.user?.name}</h1>
        <p>Email: {session.user?.email}</p>
      </div>
    );
  }

  return <p>Vous n'êtes pas connecté.</p>;
};

export default UserProfile;
