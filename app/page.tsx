"use client"
import { signIn } from 'next-auth/react';

const SignInPage = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
      <button onClick={() => signIn('facebook')}>Sign in with Facebook</button>
      <button onClick={() => signIn('apple')}>Sign in with Apple</button>
      <button onClick={() => signIn('email')}>Sign in with Email</button>
    </div>
  );
};

export default SignInPage;
