import {useToast} from "@/hooks/use-toast"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import useWeb3State from "../store/Web3State";

export default function SignUp() {
  const {toast} = useToast()
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // Added loading state
  const { setUser } = useWeb3State((state) => state);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting the request
    const url = `http://localhost:3000/api/signin`;

    try {
      const res = await axios.post(url, { email, password });
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);

      if (res.status === 200) {
        toast({
          title: "Succesfull",
          description: "Succesfully Logged IN"
        });
        navigate('/');
      }
    } catch (error) {
      console.error("Login failed:", error);

      // Optionally handle the error state here
    } finally {
      setLoading(false); // Set loading to false when the request is done
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
          className="border border-gray-300 rounded-lg text-lg p-2"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-2xl text-center bg-gray-200 p-2 text-sm font-bold h-[40px] flex items-center justify-center"
          disabled={loading} // Disable the button when loading
        >
          {loading ? (
            <span className="loader"></span> // Add a spinner or loading indicator
          ) : (
            "LOGIN"
          )}
        </button>
      </form>
      <div className="flex items-center justify-evenly gap-5 text-sm text-gray-500 mt-4">
        <Link to="/signup">Don't have an Account?</Link>
        <Link to="/forgetPassword">Forgot Password?</Link>
      </div>
    </div>
  );
}
