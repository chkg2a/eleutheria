import Feed from "../components/Feed";
import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string
}

interface User {
  _id: string;
  address: string;
  email: string;
  name: string;
  profilePic: string;
  posts: Post[];
}

export default function LatestFeeds() {
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

  if (!users || users.length === 0) {
    return ( <div className="flex justify-center items-center h-full text-4xl font-bold">
        <span className="loading-text"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {users.map((user) => (
        <div
          key={user._id}
        >
          {user.posts.length > 0
            ? (
              user.posts.map((post) => (
                <Feed
                  key={post._id}
                  address={user.address}
                  link={`/creators/${user.address}`}
                  avatar={`/images/${user.profilePic}`}
                  fullName={user.name}
                  createdAt={post.createdAt}
                  paragraph={post.description || "No description available"}
                  image={`${post.image}`}
                />
              ))
            )
            : null}
        </div>
      ))}
    </div>
  );
}
