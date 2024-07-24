import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function AuthLayout({ children }) {
  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <div className="h-full flex-1 bg-primary-color hidden lg:flex justify-center items-center background-primary-linear">
        <div className="my-auto"> 
          <Link className="text-[white]">
            <span className="text-6xl text-[white]">
              ExchangeCar
            </span>
          </Link>
          <p className="mt-5 text-xl text-secondary-color italic">
            Model car buying and selling platform{" "}
          </p>
          <Link to={'/'} className="inline-block mt-5 w-full text-right text-lg text-[white]">
            <FontAwesomeIcon icon={faArrowLeft} className="me-2"/>
            Back to Home{" "}
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">{children}</div>
    </div>
  );
}

export default AuthLayout;
