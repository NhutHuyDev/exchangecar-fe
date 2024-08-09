import "./Navbar.css";
import Collapse from "common/Collapse";
import { Link } from "react-router-dom";
import { useHover } from "react-aria";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { currentUserSelector, isAuthenticatedSelector, queryTableSelector } from "redux/selectors";
import UserDropdown from "components/UserDropdown";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { getAccessToken } from "utils";

function MainNavbar() {
  const [showPopover, setShowPopover] = useState([]);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const { car_brand } = useSelector(queryTableSelector);
  const currentUser = useSelector(currentUserSelector)
  const isAuthenticated = useSelector(isAuthenticatedSelector)

  const { hoverProps, isHovered } = useHover({
    onHoverStart: (e) =>
      setShowPopover(() => [e.target.getAttribute("data-hover-index")]),
    onHoverEnd: (e) => setShowPopover(() => []),
  });

  useEffect(() => {
    const navbar = document.querySelector("#main-navbar");

    let lastScroll = 0;

    if (navbar) {
      window.addEventListener("scroll", () => {
        let currentScroll = window.pageYOffset;

        if (currentScroll - lastScroll > 0) {
          navbar.classList.add("scroll-down");
          navbar.classList.remove("scroll-up");
        } else {
          navbar.classList.add("scroll-up");
          navbar.classList.remove("scroll-down");
        }

        lastScroll = currentScroll;
      });
    }
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");

    if (showMobileNavbar) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [showMobileNavbar]);

  const handleNavigatePost = () => {
    const access_token = getAccessToken()
    window.open(`${process.env.REACT_APP_ADMIN_URL}?token=${encodeURIComponent(access_token)}&origin=${window.location.origin}`, {target: "_blank"})
  }

  return (
    <>
      <nav
        id="main-navbar"
        className="bg-[white] p-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all fixed top-0 right-0 left-0 z-[1000]"
      >
        <div className="hidden lg:flex justify-between font-bold px-10 mb-2">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <img
                className="h-14 w-auto inline-block  rounded-full"
                src="/img/logo.png"
                alt="logo"
              />
              <p className="ms-2 text-primary-color font-bold text-2xl">
                ExchangeCar
              </p>
            </Link>
          </div>
          <div className="flex items-center gap-5 md:gap-7">
            <Link to="tel:+6494461709">
              <FontAwesomeIcon icon={faPhone} className="me-1 font-bold text-lg" />
              098 6578 655
            </Link>
            {
              isAuthenticated ? <UserDropdown /> : 
                <Link to="/auth/sign-in" className="p-2 font-bold text-lg">
                  Sign In / Sign Up
                </Link>
            }
          </div>
        </div>

        <div className="flex justify-between items-center px-10">
          <div className="block lg:hidden">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-auto inline-block bg-secondary-color rounded-full"
                src="/img/logo.png"
                alt="logo"
              />
              <p className="ms-2 text-primary-color font-bold text-2xl">
                ExchangeCar
              </p>
            </Link>
          </div>

          <div className="hidden lg:flex gap-5 md:gap-8 font-bold">
            <div
              className="p-2 flex items-center relative"
              {...hoverProps}
              data-hover-index={1}
            >
              <span className="mr-1 text-secondary-color text-lg font-bold cursor-pointer">Buy</span>
              <FontAwesomeIcon
                icon={faCaretDown}
                className="text-secondary-color"
              />
              <div
                className={`${
                  showPopover.includes("1") ? "absolute" : "hidden"
                } left-0 top-9`}
              >
                <div className="grid grid-cols-2 bg-[white] w-80 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 font-bold">
                  <Link to="/buy-car" className={`p-1 col-span-2 ${car_brand ? 'mb-2' : ''}`}>
                    All cars
                  </Link>
                  {car_brand
                    ? Object.keys(car_brand.options).map((option) => (
                        <Link to={`/buy-car/?car_brand=${option}`} className="p-1 mb-2">
                          {car_brand.options[option].value}
                        </Link>
                      ))
                    : ""}
                </div>
              </div>
            </div>
            <Link to="/about-us" className="p-2 text-lg font-bold">
              About us
            </Link>
            <Link to="/services" className="p-2 text-lg font-bold">
              Services
            </Link>
            <Link to="/faq" className="p-2  text-lg font-bold">
              FAQ
            </Link>
          </div>

          <button
            className="hidden lg:flex font-bold text-[#FFF] text-bold 
            bg-primary-color 
            shadow-xl rounded-3xl py-3 px-6 items-center justify-center"
            onClick={() => handleNavigatePost()}
          >
            <BorderColorIcon className="mr-2" />
            New Post
          </button>

          <button
            className="block lg:hidden"
            onClick={() => setShowMobileNavbar(true)}
          >
            <FontAwesomeIcon
              icon={faBars}
              className="text-2xl text-primary-color"
            />
          </button>
        </div>
      </nav>

      {/* Mobile  */}
      {showMobileNavbar && (
        <div
          className={`transition-all overlay`}
          onClick={() => setShowMobileNavbar(false)}
        ></div>
      )}

      <nav
        className={`lg:hidden w-80 p-3
                shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[white] 
                fixed top-0 left-0 bottom-0 z-[1100] 
                overflow-x-scroll
                transition-all ${
                  showMobileNavbar ? "translate-x-[0]" : "translate-x-[-100%]"
                }`}
      >
        <div className="flex flex-col space-y-2">
          <div className="pb-3 border-b-2 border-grey-color">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-auto inline-block bg-secondary-color rounded-full"
                src="/img/logo.png"
                alt="logo"
              />
              <p className="ms-2 text-primary-color font-bold text-2xl">
                ExchangeCar
              </p>
            </Link>
          </div>
          <div className="flex flex-col space-y-2 pb-3 border-b-2 border-grey-color font-bold">
            <Collapse
              title={"Buy Car"}
              className={"text-secondary-color text-left p-2 pl-0 "}
            >
              <div className="grid grid-cols-2 bg-grey-color w-auto p-2 font-bold">
                <Link to="/mua-xe" className="p-1 mb-2 col-span-2">
                  Tất cả xe
                </Link>
                <Link to="/mua-xe?car-brand=toyota" className="p-1 mb-2">
                  Toyota
                </Link>
                <Link to="#" className="p-1 mb-2">
                  Honda
                </Link>
                <Link to="#" className="p-1 mb-2">
                  Nissan
                </Link>
                <Link to="#" className="p-1 mb-2">
                  Mercedes
                </Link>
                <Link to="#" className="p-1 mb-2">
                  Mitsubishi
                </Link>
                <Link to="#" className="p-1 mb-2">
                  Ford
                </Link>
                <Link to="#" className="p-1 mb-2">
                  Kia
                </Link>
                <Link to="#" className="p-1 mb-2">
                  Mazda
                </Link>
              </div>
            </Collapse>
            <Link to="/about-us" className="p-2 pl-0 ">
              About Us
            </Link>
            <Link to="/services" className="p-2 pl-0 ">
              Services
            </Link>
            <Link to="/faqs" className="p-2 pl-0 ">
              FAQ
            </Link>
          </div>
          <div className="flex flex-col space-y-2 pb-3 font-bold">
            <a
              href="tel:02836367951"
              className="p-2 pl-0  flex items-center justify-start"
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="text-secondary-color"
              />
              <span className="ms-1">098 6578 655</span>
            </a>
            <Link
              to="/login"
              className="p-2 pl-0  flex items-center justify-start"
            >
              <img className="h-4 w-auto mr-1" src="/svg/user.svg" alt="" />
              <span>Sign In / Sign Up</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MainNavbar;
