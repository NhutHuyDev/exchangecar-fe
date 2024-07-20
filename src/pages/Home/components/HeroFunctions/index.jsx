import Autocomplete from "common/AutoComplete";

import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";
import { Link } from "react-router-dom";

import carBrandJson from "JsonUI/carBrand";
import bodyTypeJson from "JsonUI/bodyType";
import brandModelJson from "JsonUI/brandModel";
import priceScope from "JsonUI/priceScope";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentsDollar,
  faFileCircleCheck,
  faMagnifyingGlass,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

import capitalization from "utils/capitalization";
import brandModel from "JsonUI/brandModel";
import mileages from "JsonUI/mileages";

function HeroFunctions() {
  const [brandSellCar, setBrandSellCar] = useState("");
  const [modelSellCar, setModelSellCar] = useState("");
  const [mileage, setMileage] = useState("");

  return (
    <>
      <div className="m-auto xl:-mt-[5rem] mb-[4rem] px-3 w-full lg:w-2/3 relative z-[99] background-opacity-0">
        <div className="mx-auto background-opacity-0 rounded-2xl shadow-xl h-full">
          <div className="flex flex-col space-y-6 bg-primary-color p-5 rounded-t-3xl">
            <p className="hidden xl:block text-2xl font-bold">
              <Link to="/mua-xe" style={{ color: "white" }}>
                Buy Car
              </Link>
            </p>
            <div className="rounded-3xl p-4 bg-[white] flex items-center space-x-2">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-primary-color"
              />
              <input
                className="text-[black] w-full"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="p-5">
            <Swiper
              slidesPerView={5}
              slidesPerGroup={5}
              breakpoints={{
                768: {
                  slidesPerView: 7,
                  slidesPerGroup: 7,
                },
              }}
            >
              {carBrandJson.map((carBrand, index) => (
                <SwiperSlide key={"hero-function-car-brand-" + index}>
                  <div className="group">
                    <Link to={`/mua-xe?car_brand=${carBrand.name}`}>
                      <div className="flex justify-center">
                        <img
                          className="w-auto h-6 xl:h-8"
                          src={carBrand.logo}
                          alt="car's brand logo"
                        />
                      </div>
                      <p className="text-center mt-2 group-hover:font-bold">
                        {capitalization(carBrand.name)}
                      </p>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-3 p-5">
            <Swiper
              slidesPerView={5}
              slidesPerGroup={5}
              breakpoints={{
                768: {
                  slidesPerView: 7,
                  slidesPerGroup: 7,
                },
              }}
            >
              {bodyTypeJson.map((bodyType, index) => (
                <SwiperSlide key={"hero-function-body-type-" + index}>
                  <Link to={`/mua-xe?body_type=${bodyType.name.toLowerCase()}`}>
                    <div className="group">
                      <div className="flex justify-center">
                        <img className="w-auto h-6 xl:h-8" src={bodyType.img} alt=""/>
                      </div>
                      <p className="text-center mt-2 group-hover:font-bold">
                        {bodyType.name}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex space-x-4 p-6">
            {priceScope.map((price, index) => (
              <Link
                key={"hero-function-price-" + index}
                to={`/mua-xe?price=${price.value}`}
                className="w-full bg-grey-color p-2 rounded-2xl flex justify-center items-center"
              >
                <p className="text-center text-sm font-bold">{price.text}</p>
              </Link>
            ))}

            <Link
              to={"/mua-xe"}
              className="w-full bg-primary-color p-2 rounded-2xl flex justify-center items-center"
            >
              <p className="font-bold text-center text-secondary-color">
                <strong>Tất cả xe</strong>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroFunctions;
