import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link"

export default function HomeBox() {
  return (
    <div className="flex w-full justify-between p-5">
      <h1 className="text-xl font-semibold">Home</h1>
      <Link href="#"><RxHamburgerMenu/></Link>
    </div>
  );
}
