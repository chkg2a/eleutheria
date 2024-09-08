import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast"

export default function SignUp() {
  const {toast} = useToast()
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // Added loading state

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting the request

    const url = `http://localhost:3000/api/signup`;
    try {
      const res = await axios.post(url, { email, password, name });
      console.log(res);
      if (res.status === 200) {
        toast({
          title: "Succesfull",
          description: "Succesfully created your account"
        });
        navigate('/login');
      }
    } catch (error) {
      console.error("Sign up failed:", error);
      // Optionally handle the error state here
    } finally {
      setLoading(false); // Set loading to false when the request is done
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
            "SIGN UP"
          )}
        </button>
      </form>
      <div className="flex items-center justify-evenly gap-5 text-sm text-gray-500 mt-4">
        <Link to="/login">Already Have Account?</Link>
        <Link to="/login">Sign in for Eleutheria</Link>
      </div>
    </div>
  );
}
