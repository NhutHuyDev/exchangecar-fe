import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "common/Logo";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { currentUserSelector, isAuthenticatedSelector } from "redux/selectors";
import { getAccessToken, isObjectEmpty } from "utils";

function AuthLayout({ children }) {
  const isAuthenticated = useSelector(isAuthenticatedSelector)
  const currentUser = useSelector(currentUserSelector)
  const navigate = useNavigate()

  // useEffect(() => {
  //   const access_token = getAccessToken()
  //     if((isAuthenticated && isObjectEmpty(currentUser))){
  //       navigate("/")
  //     }
  // }, [ navigate, isAuthenticated, currentUser])

  return (
    <div className="h-[100vh] flex justify-center md:bg-primary-color items-center ">
      <div className="h-full flex-1  hidden lg:flex justify-center items-center  relative">
        <div className="my-auto"> 
          <Link className="text-[white]">
            <span className="text-6xl xl:text-8xl tracking-wide text-[white] font-black italic">
              ExchangeCar
            </span>
          </Link>
          <p className="mt-5 text-xl tracking-tight text-right text-[#bab1b1] font-semibold italic">
            Model car buying and selling platform{" "}
          </p>
          <Link to={'/'} className="inline-block font-semibold mt-5 w-fit text-right text-lg text-[white] absolute top-12 left-10">
            <FontAwesomeIcon icon={faArrowLeft} className="me-2"/>
            Back
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center bg-[#fff] h-full rounded-tl-3xl rounded-bl-3xl">
        <Logo className='absolute top-[20px] right-[20px] !h-32 !w-32 xl:!w-40 xl:!h-40 rounded-full box-shadow-custom animate-fly-in' />
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
