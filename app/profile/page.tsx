// app/protected/page.tsx
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { cookies } from 'next/headers';

export default async function ProtectedPage() {
  const cookieStore = cookies()
  const cookieSession = cookieStore.get('next-auth.session-token');
  // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
  if (!cookieSession) {
    redirect('/auth/signin');
  }
  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, you are authenticated!</p>
    </div>
  );
}
