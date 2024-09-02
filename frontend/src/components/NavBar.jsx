import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import AvatarMD from "@/components/smallComponents/AvatarMD";

export default function NavBar({ }) {
  const user = {
    link: `/creators/0xabc`,
    profilePic: "pfp1.jpg",
  };
  return (
    <div className="flex justify-end fixed">
      <div>
        <div className="flex flex-col gap-4 pr-14">
          <Link className="flex w-full" href={user.link}>
            <AvatarMD className="size-8" src={user.profilePic} NAME="BR" />
          </Link>
          <nav className="h-full flex-grow">
            <ul className="flex flex-col gap-8 text-xl">
              <li className="hover:text-black text-gray-400">
                <Link href="/" className="flex items-center gap-4">
                  <FaHome className="inline text-4xl" />
                  <h1>Home</h1>
                </Link>
              </li>
              <li className="hover:text-black text-gray-400">
                <Link href="/notification" className="flex items-center gap-4">
                  <IoNotifications className="inline text-4xl" />
                  <h1>Notifications</h1>
                </Link>
              </li>
              <li className="hover:text-black text-gray-400">
                <Link href="/message" className="flex items-center gap-4">
                  <AiOutlineMessage className="inline text-4xl" />
                  <h1>Messages</h1>
                </Link>
              </li>
              <li className="hover:text-black text-gray-400">
                <Link
                  href="/creator/{user}"
                  className="flex items-center gap-4"
                >
                  <CgProfile className="inline text-4xl" />
                  <h1>My Profile</h1>
                </Link>
              </li>
              <li className="hover:text-black text-gray-400">
                <Link href="#" className="flex items-center gap-4">
                  <CiCircleMore className="inline text-4xl" />
                  <h1>More</h1>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Button asChild>
          <Link className="rounded-full w-full mt-8" href="/posts/create">
            New Post
          </Link>
        </Button>
      </div>
    </div>
  );
}
