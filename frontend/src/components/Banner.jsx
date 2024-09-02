import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex justify-end w-full py-16 px-32">
      <div className="flex flex-col">
        <div className="flex">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className="text-2xl flex mx-4 items-center">CryptoFans</h1>
        </div>
        <div>
          <p>Sign up to support your favorite creators</p>
        </div>
      </div>
    </div>
  );
}
