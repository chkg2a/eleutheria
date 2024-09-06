import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Creators from "./pages/Creators"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Posts from "./pages/Posts"
import Suggestions from "./components/Suggestions"
import NavBar from "./components/NavBar"
import TestUser from "./components/TestUserSignUp";
import TestUserSignin from "./components/TestUserSignin";
import CreatePostTest from "./components/CreatePostTest";
import TestGetPost from "./components/TestGetPost";
import ConnectWallet from "./components/ConnectWallet";
import UplaodImage from "./components/UplaodImage";
function App() {

  return (
    <>
      <BrowserRouter>

          <div className="h-screen grid grid-cols-10 gap-7 px-10">
            <div className="p-8 col-span-3 hidden lg:block">
              <div className="flex justify-end">
                <NavBar />
              </div>
            </div>
            <div className="col-span-full md:col-span-6 lg:col-span-4 flex flex-col border-gray-300 border-l border-r">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/user/:id" element={<TestUser/>} />  
          <Route path="/signin" element={<TestUserSignin/>} />
          <Route path="/createpost" element={<CreatePostTest/>} />
          <Route path="/getpost" element={<TestGetPost/>} />
          <Route path="/connectwallet" element={<ConnectWallet/>} />
          <Route path="/uploadimage" element={<UplaodImage/>} />
        </Routes>
            </div>
            <div className="col-span-4 md:col-span-3 hidden md:block w-full">
              <Suggestions />
            </div>
          </div>
      </BrowserRouter>
    </>
  )
}

export default App
