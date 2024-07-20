import { Link } from "react-router-dom";

function AuthLayout({ children }) {
  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <div className="h-full flex-1 bg-primary-color flex justify-center items-center background-primary-linear">
        <div className="my-auto">
          <Link className="text-[white]">
            <span className="title-hightlight text-6xl">Citi<span>Car</span></span>
          </Link>
          <p className="mt-5 text-2xl text-[white]">
            Nền tảng mua và bán xe uy tín{" "}
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
