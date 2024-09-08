import LoginBox from "../components/LoginPage";
import Banner from "../components/Banner";

export default function Login() {
  return (
    <div className="h-screen">
      <div className="h-3/4 flex">
        <div
          className="w-1/2"
          style={{
            backgroundColor: "black",
          }}
        >
          <Banner />
        </div>
        <div className="h-full flex items-center justify-center w-1/2">
          <LoginBox />
        </div>
      </div>
    </div>
  );
}
