"use client"
import Link from "next/link";
import { useState } from "react";
import bcrypt from "bcryptjs";
import { createUser } from "@/app/actions/auth";

export default function SignUp() {  
  const [email,setEmail]=useState("");
  const [Password,setPassoword]=useState("");
  const handleSignUp=async()=>{
    const password=bcrypt.hashSync(Password,10);
    const userData={
      email,
      password
    }
    await createUser(userData);
  }
  return (
    <div>
      <form className="flex flex-col p-4 gap-2">
        <label>Sign Up</label>
        <input
          className="border border-gray-300 rounded-lg text-lg p-2"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          className="border border-gray-300 rounded-lg  text-lg  p-2"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e)=>setPassoword(e.target.value)}
        />
        <button onClick={handleSignUp} className="rounded-2xl text-center bg-gray-200 p-1 text-sm">
          SIGN Up
        </button>
      </form>
      <div>
        <Link href="#">Already Have Account?</Link>
        <Link href="#">Sign in for CryptoFans</Link>
      </div>
      <div className="flex flex-col">
        <button>SIGN IN WITH X</button>
        <button>SIGN IN WITH GOOGLE</button>
        <button>PASSWORDLESS SIGN IN</button>
      </div>
    </div>
  );
}
