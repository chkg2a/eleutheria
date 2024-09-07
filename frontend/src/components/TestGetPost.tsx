import React from 'react'
import axios from 'axios'
import useWeb3State from "../store/Web3State";
const TestGetPost = () => {
    const {address,provider,signer,contract}=useWeb3State((state)=>state);
    console.log(address,provider,signer,contract);
    const handle=async()=>{
        try {
            // const url="http://localhost:3000/home/getpost";
        // const res=await axios.get(url);
        // console.log(res.data.user.posts[0].title);
        const url1=`http://localhost:3000/data/getuser`;  
        const token=localStorage.getItem('token');
        const ress=await axios.get(url1, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(ress.data.user.address);
        const addressCreator=ress.data.user.address;
        const member=await contract.members(address,addressCreator);
       console.log(member);
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
