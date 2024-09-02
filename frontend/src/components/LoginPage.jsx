import Link from "next/link";
import prisma from "@/lib/db";
export default async function loginBox() {
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value; // Directly accessing the input value from the form
    const password = e.target.password.value;
    const user = await prisma.sign.findUnique({
      where: {
        email: email,
      },
    });
  };
  return (
    <>
      <div>
        <form className="flex flex-col p-4 gap-2">
          <label>Log in</label>
          <input
            className="border border-gray-300 rounded-lg text-lg p-2"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          // onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded-lg  text-lg  p-2"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          //   onChange={(e)=>setPassoword(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-2xl text-center bg-gray-200 p-1 text-sm"
          >
            LOG IN
          </button>
        </form>
        <div>
          <Link href="#">Forget Password?</Link>
          <Link href="#">Sign up for CryptoFans</Link>
        </div>
        <div className="flex flex-col">
          <button>SIGN IN WITH X</button>
          <button>SIGN IN WITH GOOGLE</button>
          <button>PASSWORDLESS SIGN IN</button>
        </div>
      </div>
    </>
  );
}
