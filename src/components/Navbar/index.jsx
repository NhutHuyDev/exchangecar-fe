import "./Navbar.css";
import Collapse from "common/Collapse";
import { Link } from "react-router-dom";
import { useHover } from "react-aria";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faEarthAsia,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { queryTableSelector } from "redux/selectors";

function MainNavbar() {
  const [showPopover, setShowPopover] = useState([]);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
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

  const { car_brand } = useSelector(queryTableSelector);

  return (
    <>
      <nav
        id="main-navbar"
        className="bg-[white] p-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all fixed top-0 right-0 left-0 z-[1000]"
      >
        <div className="hidden lg:flex justify-between font-bold px-10">
          <div className="flex">
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
          <div className="flex items-center gap-5">
            <Link to="#" className="p-2 flex items-center justify-between">
              <svg
                width="30"
                height="30"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <a href="tel:+6494461709">
              <FontAwesomeIcon icon={faPhone} className="me-1" />
              098 6578 655
            </a>
            <Link to="/login" className="p-2 ">
              Sign In / Sign Up
            </Link>
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

          <div className="hidden lg:flex gap-5 font-bold">
            <div
              className="p-2 flex items-center relative"
              {...hoverProps}
              data-hover-index={1}
            >
              <span className="mr-1 text-secondary-color">Buy Car</span>
              <FontAwesomeIcon
                icon={faCaretDown}
                className="text-secondary-color"
              />
              <div
                className={`${
                  showPopover.includes("1") ? "absolute" : "hidden"
                } left-0 top-9`}
              >
                <div className="grid grid-cols-2 bg-[white] w-80  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 font-bold">
                  <Link to="/buy-car" className={`p-1 col-span-2 ${car_brand ? 'mb-2' : ''}`}>
                    Tất cả xe
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
            <Link to="/about-us" className="p-2 ">
              About Us
            </Link>
            <Link to="/services" className="p-2 ">
              Services
            </Link>
            <Link to="/faq" className="p-2 ">
              FAQ
            </Link>
          </div>

          <button
            className="hidden lg:block font-bold 
            text-secondary-color text-bold 
            bg-primary-color 
            shadow-xl rounded-3xl py-4 px-8"
          >
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
