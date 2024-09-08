import PopUp from "../components/smallComponents/PopUp";
import { CiImageOn } from "react-icons/ci";
import { BiPoll } from "react-icons/bi";
import { GoQuestion } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NewPost() {
  return (
    <form className="w-full border-t border-b border-gray-300">
      <textarea
        placeholder="Compose a new Post"
        className="p-4 w-full border-gray-300 focus:border-blue-500 outline-none resize-none"
        rows="3"
      />
      <div className="flex p-4">
        <div className="flex-grow flex text-2xl gap-2">
          <div>
            <PopUp trigger={<CiImageOn />} content={<div>hello</div>} />
          </div>
          <Link to="#">
            <BiPoll />
          </Link>
          <Link to="#">
            <GoQuestion />
          </Link>
        </div>
        <div className="">
          <Button>
            New Post
          </Button>
        </div>
      </div>
    </form>
  );
}
