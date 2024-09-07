import PopUp from "../components/smallComponents/PopUp";
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { CiShare1 } from "react-icons/ci";
import AvatarMD from "@/components/smallComponents/AvatarMD";
import axios from "axios"

export default function Creator() {
  const { id } = useParams(); // Extract the id parameter from the route
  const [creator, setCreator] = useState(null);

  if (!creator) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    // Construct the URL with the dynamic id
    const url = `http://localhost:3000/api/creators/${id}`;
    
    // Fetch the creator data
    axios.get(url)
      .then(response => {
        setCreator(response.data); // Set the data to state
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching creator data:', error);
      });
  }, [id]);

  // const creator = await prisma.user.findUnique({
  //   where: {
  //     address: params.address,
  //   },
  //   include: {
  //     posts: {
  //       include: {
  //         image: true, // Include images related to each post
  //       },
  //     },
  //   },
  // });
  //
  // const initials = creator.name
  //   .split(" ")
  //   .map((field) => field[0])
  //   .join("");

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
                      src="logo.png"
                      NAME="hello"
                    />
                  }
                  content={<div>bro</div>}
                />
              </div>
              <div className="flex text-4xl m-4">
                <Link href="#" className="mx-4">
                  <CiStar />
                </Link>
                <Link href="#">
                  <CiShare1 />
                </Link>
              </div>
            </div>
            <div className="mt-[-3rem]">
              <h1 className="font-bold text-2xl">name</h1>
              <p className="font-semibold text-gray-400 text-md">
                Address
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
