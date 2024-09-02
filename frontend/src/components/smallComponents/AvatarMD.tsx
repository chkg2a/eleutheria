import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarMD({ className, src, NAME }) {
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
