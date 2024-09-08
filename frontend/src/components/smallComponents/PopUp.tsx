import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ReactNode } from "react";

interface PopUpProps {
  trigger : ReactNode,
  content : ReactNode
}

export default function PopUp({trigger, content} : PopUpProps) {
  return (
    <Popover>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent>{content}</PopoverContent>
    </Popover>
  );
}
