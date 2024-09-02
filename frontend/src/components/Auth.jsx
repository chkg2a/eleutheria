import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"

export default function Auth() {
  return (
    <div className="flex flex-col justify-center h-32 gap-4 items-center">
      <h1>Sign up to View More</h1>
      <div className="flex justify-evenly gap-6">
      <SignInButton>
        <Button>
        SignIn
        </Button>
      </SignInButton>
      <SignUpButton>
        <Button>
        SignUp
        </Button>
      </SignUpButton>
      </div>
    </div>
  );
}
