import * as React from "react";
import AvatarMD from "@/components/smallComponents/AvatarMD";

export default function CardWithForm({ profilePic, profileBanner, name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div className="mb-2 w-full h-[128px] relative rounded-lg border overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${profileBanner})` }}
      />
      <div className="relative flex items-center gap-3 p-4">
        <AvatarMD
          className="size-24 border-4 border-white relative"
          src={profilePic}
          NAME={initials}
        />
        <div className="text-white font-bold">
          <h1 className="text-xl">{name}</h1>
        </div>
      </div>
    </div>
  );
}
