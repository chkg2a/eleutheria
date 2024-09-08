import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import useWeb3State from "../store/Web3State";
export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const {setUser}= useWeb3State((state)=>state);
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const url = `http://localhost:3000/api/signin`;
    const res = await axios.post(url, { email, password });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
    if(res.status === 200){
      navigate('/')
    }
  };
  return (
    <div className="w-[350px]">
      <form className="flex flex-col p-4 gap-2" onSubmit={handleSubmit}>
        <label className="text-2xl font-bold">Login</label>
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
          LOGIN
        </button>
      </form>
      <div className="flex items-center justify-evenly gap-5 text-sm text-gray-500">
        <Link to="/signup">Don't have an Account?</Link>
        <Link to="/forgetPassword">Forgot Password?</Link>
      </div>
    </div>
  );
}
