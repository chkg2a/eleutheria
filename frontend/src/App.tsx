import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TestUser from "./components/TestUserSignUp";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<TestUser/>} />  
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
