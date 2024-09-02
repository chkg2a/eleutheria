import Image from "next/image";
import Link from "next/link";
import AvatarMD from "@/components/smallComponents/AvatarMD";
import prisma from "@/lib/db"

export default function Feed(
  { address, link, avatar, fullName, paragraph, image },
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
          <Link className="flex w-full" href={link}>
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
      <Image
        src={image}
        alt="test"
        height={1080}
        width={1920}
      />
    </div>
  );
}
