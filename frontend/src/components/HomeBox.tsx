import { RxHamburgerMenu } from "react-icons/rx";
import PopUp from "../components/smallComponents/PopUp";

export default function HomeBox() {
  return (
    <div className="flex w-full justify-between p-5">
      <h1 className="text-xl font-semibold">Home</h1>
      <PopUp trigger={<div>hell</div>} content={<RxHamburgerMenu />} />
    </div>
  );
}
