export default function Banner() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col text-white">
        <div className="flex">
          <img src="/logo.png" alt="logo" width={150} height={150} />
          <h1 className="text-2xl flex mx-4 items-center">Eleutheria</h1>
        </div>
        <div>
          <p>Sign up to support your favorite creators</p>
        </div>
      </div>
    </div>
  );
}
