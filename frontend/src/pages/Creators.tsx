import PopUp from "../components/smallComponents/PopUp";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CiShare1, CiStar } from "react-icons/ci";
import AvatarMD from "@/components/smallComponents/AvatarMD";
import ConnectWallet from "@/components/ConnectWallet";
import axios from "axios";
import useWeb3State from "../store/Web3State";
import { ethers } from "ethers";
import LatestFeeds from "@/components/LatestFeeds";
import { Button } from "@/components/ui/button";

interface Web3State {
  address: string;
  provider: string;
  signer: any;
  contract: any;
  member: boolean; // Ensure `member` is part of the Web3State
}

interface Creator {
  user: Record<string, any>;
}

interface User {
  address: string;
  _id: string;
  name: string;
  profilePic?: string;
  profileBanner?: string;
}

export default function Creator() {
  const { id } = useParams(); // Extract the id parameter from the route
  const { user, contract, member } = useWeb3State((state: Web3State) => ({
    user: state.user,
    contract: state.contract,
    member: state.member,
  }));

  const [sameCreator, setSameCreator] = useState(false);
  const [creator, setCreator] = useState<Creator>();
  const [creatorAddress, setcreatorAddress] = useState("");



  const { contract, setCreatorAddress,member } = useWeb3State((state: Web3State) => state);
  console.log(member);


  const [bannerPic, setBannerPic] = useState<string>(""); // For banner picture
  const [profilePic, setProfilePic] = useState<string>(""); // For profile picture

  useEffect(() => {
    const handleCreator = async () => {
      try {
        const url = `http://localhost:3000/user/post/${id}`;
        const res = await axios.get(url);
        setCreatorAddress(res.data.user.address);
        setCreator(res.data);
      } catch (error) {
        console.error("Error fetching creator:", error);
      }
    };
    handleCreator();
  }, [id]);

  useEffect(() => {
    if (creator && user) {
      setSameCreator(creator.user._id === user._id);
    }
  }, [creator, user]);

  const uploadBanner = async (base64: string) => {
    if (!base64) return;

    const url = `http://localhost:3000/user/update/bannerpic`;
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        url,
        { base64 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      console.error("Error uploading banner image:", error);
    }
  };

  const uploadProfilePic = async (base64: string) => {
    if (!base64) return;

    const url = `http://localhost:3000/user/update/imageupdate`;
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        url,
        { base64 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      console.error("Error uploading profile image:", error);
    }
  };

  const changetoBase64Banner = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = () => {
        if (reader.result) {
          const base64 = reader.result as string;
          setBannerPic(base64);
          uploadBanner(base64);
        }
      };

      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
    }
  };

  const changetoBase64ProfilePic = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = () => {
        if (reader.result) {
          const base64 = reader.result as string;
          setProfilePic(base64);
          uploadProfilePic(base64);
        }
      };

      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
    }
  };

  const join = async () => {
    try {
      const tx = await contract.join(creatorAddress, {
        value: ethers.parseEther("0.0001"),
      });
      await tx.wait();
      alert("Joined successfully");
    } catch (error) {
      console.error("Error joining:", error);
      alert("Failed to join");
    }
  };

  if (!creator || !user) {
    return (
      <div className="flex justify-center items-center h-full text-4xl font-bold">
        <span className="loading-text"></span>
      </div>
    );
  }

  const creatorUser = creator.user;
  const { name = "Unknown", address = "Unknown Address" } = creatorUser; // Default values for user data

  return (
    <>
      <div className="w-full h-full">
        <div className="flex flex-col">
          <div className="w-full h-[400px]">
            {sameCreator
              ? (
                <PopUp
                  trigger={
                    <div className="relative w-full h-[400px] overflow-hidden">
                      <img
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src={bannerPic || user.profileBanner}
                        alt="Cover"
                      />
                    </div>
                  }
                  content={
                    <input
                      accept="image/*"
                      type="file"
                      onChange={changetoBase64Banner}
                    />
                  }
                />
              )
              : (
                <div className="relative w-full h-[400px] overflow-hidden">
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={creatorUser.profilePic}
                    alt="Cover"
                  />
                </div>
              )}
          </div>

          <div className="w-full">
            <div className="px-16 flex relative">
              <div className="flex-grow relative bottom-[4rem]">
                {sameCreator
                  ? (
                    <PopUp
                      trigger={
                        <AvatarMD
                          className="size-32"
                          src={profilePic || user.profilePic || "/pfp1.jpg"}
                          NAME={user.name}
                        />
                      }
                      content={
                        <input
                          accept="image/*"
                          type="file"
                          onChange={changetoBase64ProfilePic}
                        />
                      }
                    />
                  )
                  : (
                    <AvatarMD
                      className="size-32"
                      src={creatorUser.profilePic}
                      NAME={name}
                    />
                  )}
              </div>
              <div className="px-16 flex text-4xl m-4">
                <Link to="#" className="mx-4">
                  <CiStar />
                </Link>
                <Link to="#">
                  <CiShare1 />
                </Link>
              </div>
            </div>
            <div className="px-16 mt-[-3rem] mb-10">
              <h1 className="font-bold text-2xl">{name}</h1>
              <p className="font-semibold text-gray-400 text-md">{address}</p>
              <p className="font-semibold text-gray-400 text-sm">
                Last seen 24hrs ago
              </p>
            </div>
            {sameCreator
              ? (
                null
              )
              : (
                <div className="border-t border-b border-gray-400 w-full p-6">
                  <h1 className="font-semibold text-gray-800 text-xl mb-4">
                    Subscription
                  </h1>
                  <div className="flex justify-evenly">
                    <ConnectWallet />
                    <Button
                      onClick={join}
                      className="w-full flex justify-between"
                    >
                      <span>SUBSCRIBE</span>
                      <span>FOR FREE</span>
                    </Button>
                  </div>
                </div>
              )}
            {sameCreator
              ? (
                <LatestFeeds
                  onlyCreator
                  userId={creatorUser._id}
                  isMember={true}
                />
              )
              : (
                <LatestFeeds
                  onlyCreator
                  userId={creatorUser._id}
                  isMember={member}
                />
              )}
          </div>
        </div>
      </div>
    </>
  );
}
