"use client";

import { signIn } from 'next-auth/react';

const SignIn = () => {
  const handleSignIn = () => {
    signIn('google');
  };

  return (
    <div>
      <h1>Se connecter</h1>
      <button onClick={handleSignIn}>Se connecter avec Google</button>
    </div>
  );
};

export default SignIn;
