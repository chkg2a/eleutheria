import { Link } from "react-router-dom";
import AvatarMD from "../components/smallComponents/AvatarMD";
import { formatDistanceToNow } from "date-fns"; // Import date-fns for easy date formatting

interface FeedProps {
  address: string;
  link: string;
  avatar: string;
  fullName: string;
  paragraph: string;
  image: string;
  createdAt: string;
}

export default function Feed(
  { address, link, avatar, fullName, paragraph, image, createdAt }: FeedProps,
) {
  const initials = fullName
    .split(" ")
    .map((word) => word[0])
    .join("");

  // Format createdAt using date-fns
  const createdAtDate = new Date(createdAt);
  const timeAgo = formatDistanceToNow(createdAtDate, { addSuffix: true });

  return (
    <div key={address} className="border-gray-300 border-l border-r">
      <div className="h-[1px] w-full border-t" />
      <div className="p-4">
        <div className="flex">
          <AvatarMD className="size-16" src={avatar} NAME={initials} />
          <Link className="flex w-full" to={link}>
            <div className="flex-grow p-2">
              <h1>{fullName}</h1>
              <p className="text-sm text-gray-400">{address}</p>
            </div>
            <div className="p-2">{timeAgo}</div>
          </Link>
        </div>
        <div className="px-2 w-full">
          <p className="py-2 text-sm md:text-lg">{paragraph}</p>
        </div>
      </div>
      {image
        ? (
          <img
            src={image}
            alt="test"
            height={1080}
            width={1920}
          />
        )
        : (null)}
    </div>
  );
}
