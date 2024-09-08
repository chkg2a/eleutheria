import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface AvatarMDProps{
  className : string,
  src : string,
  NAME : string,
}

export default function AvatarMD({ className, src, NAME } : AvatarMDProps) {
  return (
    <Avatar className={className}>
      <AvatarImage
        className="w-full object-cover object-center"
        src={src}
        alt="@logo"
      />
      <AvatarFallback>{NAME}</AvatarFallback>
    </Avatar>
  );
}
