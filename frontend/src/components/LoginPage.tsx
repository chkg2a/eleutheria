import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const url = `http://localhost:3000/api/signin`;
    const res = await axios.post(url, { email, password });
    localStorage.setItem("token", res.data.token);
    if(res.status === 200){
      navigate('/')
    }
  };
  return (
    <div>
      <form className="flex flex-col p-4 gap-2" onSubmit={handleSubmit}>
        <label>Login</label>
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
          className="rounded-2xl text-center bg-gray-200 p-1 text-sm"
        >
          LOGIN
        </button>
      </form>
      <div className="flex gap-5">
        <Link to="/signup">Don't have an Account?</Link>
        <Link to="/forgetPassword">Forgot Password?</Link>
      </div>
      <div className="flex flex-col">
        <button>SIGN IN WITH X</button>
        <button>SIGN IN WITH GOOGLE</button>
        <button>PASSWORDLESS SIGN IN</button>
      </div>
    </div>
  );
}
