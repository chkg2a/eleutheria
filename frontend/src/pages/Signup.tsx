import SignUpPage from "../components/SignUpPage";
import Banner from "../components/Banner";

export default function Login() {
  return (
    <div className="h-full">
      <div className="h-4/5 flex">
        <div
          className="w-1/2"
          style={{
            backgroundColor: "lightblue",
          }}
        >
          <Banner />
        </div>
        <div className="h-full flex items-start justify-start p-40">
          <SignUpPage />
        </div>
      </div>
    </div>
  );
}
