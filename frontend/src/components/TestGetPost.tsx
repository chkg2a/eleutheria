import React from 'react'
import axios from 'axios'
import useWeb3State from "../store/Web3State";
const TestGetPost = () => {
    const {address,provider,signer}=useWeb3State((state)=>state);
    console.log(address,provider,signer);
    const handle=async()=>{
        try {
            const url="http://localhost:3000/get/getpost";
        const res=await axios.get(url);
        console.log(res.data.user.posts[0].title);
        } catch (error) {
            console.log(error);
        }
        
    }
  return (
    <div>
      <button onClick={handle}>GetPost</button>
    </div>
  )
}

export default TestGetPost
