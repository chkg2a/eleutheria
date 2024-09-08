import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Creators from "./pages/Creators";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Posts from "./pages/Posts";
import Suggestions from "./components/Suggestions";
import NavBar from "./components/NavBar";
import CreatePostTest from "./components/CreatePostTest";
import TestGetPost from "./components/TestGetPost";
import ConnectWallet from "./components/ConnectWallet";
import TestToken from "./components/TestToken";
function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </>
  );
}

function MainLayout() {
  const location = useLocation(); // Hook to get the current location
  
  // Check if the current path is for signup or signin
  const isAuthPage = location.pathname === "/signup" || location.pathname === "/login";

  return (
    <>
      {isAuthPage ? (
        <div className="auth-container">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      ) : (
        <div className="h-screen grid grid-cols-10 gap-7 px-10">
          <div className="p-8 col-span-3 hidden lg:block">
            <div className="flex justify-end">
              <NavBar />
            </div>
          </div>
          <div className="col-span-full md:col-span-6 lg:col-span-4 flex flex-col border-gray-300 border-l border-r">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/creator/:id" element={<Creators />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/createpost" element={<CreatePostTest />} />
              <Route path="/getpost" element={<TestGetPost />} />
              <Route path="/connectwallet" element={<ConnectWallet />} />
              <Route path="/testtoken" element={<TestToken />} />
            </Routes>
          </div>
          <div className="col-span-4 md:col-span-3 hidden md:block w-full">
            <Suggestions />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
