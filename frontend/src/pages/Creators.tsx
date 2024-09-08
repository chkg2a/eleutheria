import PopUp from "../components/smallComponents/PopUp";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { CiShare1 } from "react-icons/ci";
import AvatarMD from "@/components/smallComponents/AvatarMD";
import ConnectWallet from "@/components/ConnectWallet";
import axios from "axios";
import useWeb3State from "../store/Web3State";
import { ethers } from "ethers";

interface Web3State {
  address: string;
  provider: string;
  signer: any;
  contract: any;
}

interface Creator {
  user: Record<string, any>;  // or a more specific type for `user`
}

export default function Creator() {
  const { id } = useParams(); // Extract the id parameter from the route
  const [creator, setCreator] = useState<Creator>();
  const [creatorAddress,setcreatorAddress]=useState("");
  const {contract,setCreatorAddress}=useWeb3State((state : Web3State)=>state);
 
  useEffect(() => {
      const handleCreator = async () => {
      try {
        const url = `http://localhost:3000/user/post/${id}`;

        const res = await axios.get(url);
        setCreatorAddress(res.data.user.address);
        setcreatorAddress(res.data.user.address);
        setCreator(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleCreator();
 
  }, [id,]); // Added `id` to the dependency array to avoid warnings

  if (!creator) {
    return (
      <div className="flex justify-center items-center h-full text-4xl font-bold">
        <span className="loading-text"></span>
      </div>
    );
  }
  const join=async()=>{
    const tx=await contract.join(creatorAddress,{value:ethers.parseEther("0.0001")});
   await tx.wait();  
    alert("tx");
  }
  
  const user = creator?.user || {};
  const {
    name = "Unknown",
    address = "Unknown Address",
    profilePic = "defaultAvatar.png",
  } = user; // Default values for user data

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col">
          <PopUp
            trigger={
              <div className="w-full h-[400px]">
                <img
                  style={{
                    overflow: "hidden",
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  src="path-to-image.jpg" // Replace with actual image URL
                  alt="Cover"
                  height={1080}
                  width={1920}
                />
              </div>
            }
            content={<div>bro</div>}
          />
          <div className="px-16">
            <div className="flex relative">
              <div className="flex-grow relative bottom-[4rem]">
                <PopUp
                  trigger={
                    <AvatarMD
                      className="size-32"
                      src={profilePic} // Replace with actual avatar image
                      NAME={name} // Using the fetched user name
                    />
                  }
                  content={<div>bro</div>}
                />
              </div>
              <div className="flex text-4xl m-4">
                <Link to="#" className="mx-4">
                  <CiStar />
                </Link>
                <Link to="#">
                  <CiShare1 />
                </Link>
              </div>
            </div>
            <div className="mt-[-3rem]">
              <h1 className="font-bold text-2xl">{name}</h1>
              <p className="font-semibold text-gray-400 text-md">
                {address}
              </p>
              <p className="font-semibold text-gray-400 text-sm">
                Last seen 24hrs ago
              </p>
            </div>
            <main className="mt-4 mb-4">
              <p className="text-xl">href</p>
            </main>
            <div className="border border-gray-400 w-full p-6">
              <h1 className="font-semibold text-gray-800 text-xl mb-4">
                Subscription
              </h1>
              <ConnectWallet />
            </div>
            <button onClick={join}>join</button>
          </div>
        </div>
      </div>
    </>
  );
}
