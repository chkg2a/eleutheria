import { Link } from "react-router-dom";
import AvatarMD from "../components/smallComponents/AvatarMD";

interface FeedProps {
  address : string,
  link : string,
  avatar : string,
  fullName : string, 
  paragraph : string,
  image : string
}

export default function Feed(
  { address, link, avatar, fullName, paragraph, image } : FeedProps,
) {
  const initials = fullName
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div key={address}>
      <div className="p-4">
        <div className="flex">
          <AvatarMD className="size-16" src={avatar} NAME={initials} />
          <Link className="flex w-full" to={link}>
            <div className="flex-grow p-2">
              <h1>{fullName}</h1>
              <p className="text-sm text-gray-400">{address}</p>
            </div>
            <div className="p-2">5 hours ago</div>
          </Link>
        </div>
        <div className="px-2 w-full">
          <p className="py-2 text-sm md:text-lg">{paragraph}</p>
        </div>
      </div>
      <img
        src={image}
        alt="test"
        height={1080}
        width={1920}
      />
    </div>
  );
}
