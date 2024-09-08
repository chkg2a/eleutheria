import LatestFeeds from "../components/LatestFeeds";
import HomeBox from "../components/HomeBox";
import ComposeNewPost from "../components/ComposeNewPost";
import { jwtDecode } from "jwt-decode"; // Defa
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    const isTokenExpired = () => {
      if (token) {
        const decodedToken = jwtDecode(token); // Call jwt_decode to decode the token
        const currentTime = Date.now() / 1000;
        const tokenTime = decodedToken.exp;
        if (tokenTime < currentTime) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    };
    isTokenExpired();
  });
  return (
    <>
      <HomeBox />
      <ComposeNewPost />
      <LatestFeeds onlyCreator={false}/>
    </>
  );
}
