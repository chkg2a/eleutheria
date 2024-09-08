import { Input } from "../components/ui/input";
import { IoPricetagOutline } from "react-icons/io5";
import { FiRefreshCcw } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import CardSuggest from "../components/CardSuggest";
import axios from "axios";

interface User {
  _id: string;
  address: string;
  email: string;
  name: string;
  profilePic: string;
  profileBanner: string;
}

export default function Suggestions() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:3000/home/getpost";
        const res = await axios.get(url);
        setUsers(res.data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Slice the array to get only the first 3 users
  const limitedUsers = users.slice(0, 3);

  console.log(limitedUsers)
  return (
    <div className="fixed min-w-[368px] max-h-[128px]">
      <div>
        <Input
          className="my-4 h-12 rounded-2xl"
          type="text"
          id="search"
          placeholder="Search Posts"
        />
        <div className="flex py-1 mb-1">
          <span className="flex-grow text-xl font-semibold text-gray-700">
            Suggestions
          </span>
          <span className="flex gap-3 text-xl">
            <IoPricetagOutline />
            <FiRefreshCcw />
            <MdKeyboardArrowLeft />
            <MdKeyboardArrowRight />
          </span>
        </div>
        <div>
          {limitedUsers.length > 0 ? (
            limitedUsers.map((user) => (
              <CardSuggest
                key={user._id}
                profilePic={user.profilePic}  // Use data from user
                profileBanner={user.profileBanner}
                name={user.name} // Use data from user
              />
            ))
          ) : (
            <p>Not available</p>
          )}
        </div>
      </div>
    </div>
  );
}
