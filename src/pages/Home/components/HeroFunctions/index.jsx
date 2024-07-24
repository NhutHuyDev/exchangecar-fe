import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";

import priceScope from "JsonUI/priceScope";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import capitalization from "utils/capitalization";
import { useSelector } from "react-redux";
import { queryTableSelector } from "redux/selectors";

function HeroFunctions() {
  const queryTable = useSelector(queryTableSelector);
  const { car_brand, body_type } = queryTable;

  return (
    <>
      {car_brand && body_type ? (
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
                <input className="text-[black] w-full" placeholder="Search" />
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
                {Object.keys(car_brand.options).map((brandParam, index) => (
                  <SwiperSlide key={"hero-function-car-brand-" + index}>
                    <div className="group">
                      <Link to={`/buy-car?car_brand=${brandParam}`}>
                        <div className="flex justify-center">
                          <img
                            className="w-auto h-6 xl:h-8"
                            src={car_brand.options[brandParam].logo}
                            alt="car's brand logo"
                          />
                        </div>
                        <p className="text-center mt-2 group-hover:font-bold">
                          {capitalization(car_brand.options[brandParam].value)}
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
                {Object.keys(body_type.options).map((bodyTypeParam, index) => (
                  <SwiperSlide key={"hero-function-body-type-" + index}>
                    <Link to={`/buy-car?body_type=${bodyTypeParam}`}>
                      <div className="group">
                        <div className="flex justify-center">
                          <img
                            className="w-auto h-6 xl:h-8"
                            src={body_type.options[bodyTypeParam].icon}
                            alt=""
                          />
                        </div>
                        <p className="text-center mt-2 group-hover:font-bold">
                          {body_type.options[bodyTypeParam].value}
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
                  to={`/buy-car?selling_price=${price.value}`}
                  className="w-full bg-grey-color p-2 rounded-2xl flex justify-center items-center"
                >
                  <p className="text-center text-sm font-bold">{price.text}</p>
                </Link>
              ))}

              <Link
                to={"/buy-car"}
                className="w-full bg-primary-color p-2 rounded-2xl flex justify-center items-center"
              >
                <p className="font-bold text-center text-secondary-color">
                  <strong>All Cars</strong>
                </p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default HeroFunctions;
