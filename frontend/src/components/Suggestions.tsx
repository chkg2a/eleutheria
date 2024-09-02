import { Input } from "@/components/ui/input";
import { IoPricetagOutline } from "react-icons/io5";
import { FiRefreshCcw } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Suggestions() {
  return (
    <div className="fixed min-w-[368px] max-h-[128px]">
      <div>
        <Input
          className="my-4 h-12 rounded-2xl"
          type="text"
          id="search"
          placeholder="Search Posts"
        />
        <div className="flex py-1 mb-1">
          <span className="flex-grow text-xl font-semibold text-gray-700">
            Suggestions
          </span>
          <span className="flex gap-3 text-xl">
            <IoPricetagOutline />
            <FiRefreshCcw />
            <MdKeyboardArrowLeft />
            <MdKeyboardArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
}
