import { headers } from "next/headers";

import { SignOutButton } from "@/components/sign-out-button";
import { auth } from "@/lib/auth";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return <p className="text-destructive">Unauthorised</p>;
  }
  return (
    <div className="container mx-auto max-w-screen-lg space-y-8 px-8 py-16">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Profile</h1>
      </div>
      <SignOutButton />
      <pre className="overflow-clip text-sm">
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
}
