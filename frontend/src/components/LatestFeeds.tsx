import Feed from "../components/Feed";
import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  public: boolean; // Add a public field to the Post interface
}

interface User {
  _id: string;
  address: string;
  email: string;
  name: string;
  profilePic: string;
  posts: Post[];
}

interface LatestFeedsProps {
  onlyCreator: boolean;
  userId?: string; // Fix userId type to be string
  isMember?: boolean; // Add isMember prop to handle post visibility
}

export default function LatestFeeds({ onlyCreator, userId, isMember = false }: LatestFeedsProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null); // Handle user as nullable

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:3000/home/getpost`;
        const res = await axios.get(url);
        setUsers(res.data.user);
        console.log("All Users", res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchSingleUser = async () => {
      try {
        const url = `http://localhost:3000/user/post/${userId}`;
        const res = await axios.get(url);
        setUser(res.data.user);
        console.log("Single User", res.data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (onlyCreator && userId) {
      fetchSingleUser(); // Only fetch single user if `onlyCreator` is true and `userId` exists
    } else {
      fetchData();
    }
  }, [onlyCreator, userId]); // Add onlyCreator and userId to the dependency array

  // Loading state handling
  if (onlyCreator && !user) {
    return (
      <div className="w-full flex justify-center items-center h-full text-4xl font-bold">
        <span className="loader"></span>
      </div>
    );
  }

  if (!onlyCreator && (!users || users.length === 0)) {
    return (
      <div className="w-full flex justify-center items-center h-full text-4xl font-bold">
        <span className="loader"></span>
      </div>
    );
  }

  // Filter posts based on `isMember`
  const filterPosts = (posts: Post[]) => {
    return isMember ? posts : posts.filter(post => post.public);
  };

  if (onlyCreator && user) {
    return (
      <div className="w-full flex flex-col">
        {user.posts && user.posts.length > 0
          ? filterPosts(user.posts).map((post) => (
              <Feed
                key={post._id}
                address={user.address}
                link={`/creator/${user._id}`}
                avatar={`${user.profilePic}`}
                fullName={user.name}
                createdAt={post.createdAt}
                paragraph={post.description || "No description available"}
                image={`${post.image}`}
              />
            ))
          : null}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {users.map((user) => (
        <div key={user._id}>
          {user.posts && user.posts.length > 0
            ? filterPosts(user.posts).map((post) => (
                <Feed
                  key={post._id}
                  address={user.address}
                  link={`/creator/${user._id}`}
                  avatar={`${user.profilePic}`}
                  fullName={user.name}
                  createdAt={post.createdAt}
                  paragraph={post.description || "No description available"}
                  image={`${post.image}`}
                />
              ))
            : null}
        </div>
      ))}
    </div>
  );
}
