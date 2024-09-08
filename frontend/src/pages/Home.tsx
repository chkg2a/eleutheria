import LatestFeeds from "../components/LatestFeeds"
import HomeBox from "../components/HomeBox"
import ComposeNewPost from "../components/ComposeNewPost"
import { jwtDecode } from "jwt-decode"; // Defa

import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
export default function Home() {
  const token = localStorage.getItem("token");
    const navigate = useNavigate();
  useEffect(()=>{
    const isTokenExpired = () => {
      if (token) {
          const decodedToken = jwtDecode(token); // Call jwt_decode to decode the token
          console.log(decodedToken.exp); // Add some logic here to check token expiration;
          const currentTime=Date.now()/1000;
          const tokenTime=decodedToken.exp;
          console.log(tokenTime);
          if(tokenTime<currentTime){
              localStorage.removeItem("token");
              console.log("token removed");
              navigate('/login');
          }
         
      }
      else{
          navigate('/login');
      }
  };
  isTokenExpired();
  })
  return (
  <>
      <HomeBox/>
      <ComposeNewPost/>
      <LatestFeeds/>
  </>
  )
}

