import { redirect } from 'next/navigation';

// Redirect to default language
export default function RootPage() {
  redirect('/en-US');
}
