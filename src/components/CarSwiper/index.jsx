// UI Component
import CarCard from "../CarCard";
import LoadingCarCard from "../CarCard/LoadingCarCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

// react-router-dom
import { Link } from "react-router-dom";

import "./CarSwiper.css";
import { useCallback, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function CarSwiper({ statusCars, posts }) {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="car-slider relative">
      <Swiper
        ref={sliderRef}
        slidesPerView={"auto"}
        slidesPerGroup={3}
        spaceBetween={15}
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{
          976: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {statusCars === "idle" && posts.length !== 0 ? (
          <>
            {posts.map((post, index) => (
              <SwiperSlide className="py-3" key={"car-swipper-" + index}>
                  <CarCard postData={post} />
                {/* <Link to={`/${post.car.car_slug}`}>
                </Link> */}
              </SwiperSlide>
            ))}
          </>
        ) : (
          [1, 2, 3, 4].map((current, index) => (
            <SwiperSlide className="py-3" key={"car-swipper-" + index}>
              <div>
                <LoadingCarCard />
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>

      <button
        className="hidden md:block text-primary-color absolute top-1/2 -left-[5%]"
        onClick={handlePrev}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-3xl" />
      </button>
      <button
        className="hidden md:block text-primary-color absolute top-1/2 -right-[5%]"
        onClick={handleNext}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-3xl" />
      </button>
    </div>
  );
}

export default CarSwiper;
