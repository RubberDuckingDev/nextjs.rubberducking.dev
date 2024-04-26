import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default async function Header() {
  return (
    <div className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
      <div>RubberDucking.dev</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
