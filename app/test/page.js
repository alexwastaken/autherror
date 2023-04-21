import { currentUser } from '@clerk/nextjs/app-beta';
export default async function Page() {
  const user = await currentUser();
  console.log(user)
}