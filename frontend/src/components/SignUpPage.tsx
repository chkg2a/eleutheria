import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const url = `http://localhost:3000/api/signup`;
    const res = await axios.post(url, { email, password, name });
    console.log(res);
    if(res.status === 200){
      navigate('/login')
    }
  };
  return (
    <div className='w-[350px]'>
      <form className="flex flex-col p-4 gap-2" onSubmit={handleSubmit}>
        <label className="text-xl font-bold">Sign Up</label>
        <input
          className="border border-gray-300 rounded-lg text-lg p-2"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border border-gray-300 rounded-lg text-lg p-2"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border border-gray-300 rounded-lg  text-lg  p-2"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-2xl text-center bg-gray-200 p-2 text-sm font-bold h-[40px]"
        >
          SIGN UP
        </button>
      </form>
      <div className="flex items-center justify-evenly gap-5 text-sm text-gray-500">
        <Link to="/login">Already Have Account?</Link>
        <Link to="/login">Sign in for Eleutheria</Link>
      </div>
    </div>
  );
}
