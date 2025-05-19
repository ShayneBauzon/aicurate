
import { redirect } from 'next/navigation';

export default function HomePage() {
  // For demo purposes, always redirect to login from the homepage.
  // In a real application, this would be conditional based on authentication state.
  redirect('/login');

  // The lines below will not be executed because redirect() throws an error
  // that Next.js handles to perform the redirection.
  // We can leave them or remove them; for this example, it's clear.
  // return null; 
}
