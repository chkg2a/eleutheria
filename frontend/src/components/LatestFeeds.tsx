import Feed from "../components/Feed";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LatestFeeds() {
  const [posts, setPosts] = useState<any[]>([]); // Typing as array of any objects for TypeScript

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:3000/home/getpost";
        const res = await axios.get(url);
        setPosts(res.data.post); // Correctly setting the posts
        console.log(res)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const creator = {
    address: "5123k1j23",
    profilePic: "logo.png",
    name: "pk",
  };

  // Display a loading message if posts are still being fetched
  if (!posts || posts.length === 0) {
    return (
      <div className="flex justify-center items-center h-full text-4xl font-bold">
        <span className="loading-text"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {posts.map((post) => {
        const imageUrl =
          post.image && post.image.length > 0 ? post.image[0].imageUrl : "";

        return (
          <Feed
            key={post.id} // Use post.id as the unique key
            address={creator.address}
            link={`/creators/${creator.address}`}
            avatar={`/images/${creator.profilePic}`} // No backticks here, just direct string
            fullName={creator.name}
            paragraph={post.description || "No description available"} // Provide default description
            image={`/images/${imageUrl}`} // Direct string without template literal inside JSX
          />
        );
      })}
    </div>
  );
}
