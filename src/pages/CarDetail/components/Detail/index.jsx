import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Zoom } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faPhone } from "@fortawesome/free-solid-svg-icons";

import VNDFormatToWord from "utils/VNDFormatToWord";
import constaints from "constaints";

import "./Detail.css";
import { formatPhoneNumber } from "utils/fomatPhoneNumber";

function Detail({ image, currentPost }) {
  const BASE_URL = constaints.host;
  const [activeThumb, setActiveThumb] = useState(null);
  const { billionPart, millionPart } = VNDFormatToWord(currentPost.car.selling_price);

  console.log(billionPart, millionPart, currentPost.car.selling_price)

  useEffect(() => {
    console.log(activeThumb);
  }, [activeThumb]);

  return (
      <div className="CitiCar-DetailImagesInfor px-3 py-8 xl:px-20">
        <div className="grid grid-cols-8 gap-6">
          <div className="col-span-8 xl:col-span-5">
            <div>
              <Swiper
                zoom={true}
                navigation={true}
                modules={[Navigation, Thumbs, Zoom]}
                grabCursor={true}
                thumbs={{
                  swiper:
                    activeThumb && !activeThumb.destroyed ? activeThumb : null,
                }}
                className="swiper-detail-main mb-2 h-auto rounded-2xl"
                style={{ maxHeight: "500px" }}
              >
                {image
                  ? image.map((item, index) => (
                      <SwiperSlide key={"big-image" + item.gallery_url+ index}>
                        <div
                          className="detail-big-image"
                          style={{
                            backgroundImage: `url(${item.gallery_url})`,
                            backgroundRepeat: "no-repeat",
                            width: "100%",
                            height: "420px",
                            backgroundPosition: "50% 70%",
                            backgroundSize: "cover",
                          }}
                        ></div>
                      </SwiperSlide>
                    ))
                  : ""}
              </Swiper>
              <Swiper
                onSwiper={setActiveThumb}
                slidesPerView={3}
                spaceBetween={6}
                navigation={true}
                grabCursor={true}
                modules={[Navigation, Thumbs]}
                className="swiper-detail-thumb h-auto"
                breakpoints={{
                  768: {
                    slidesPerView: 5,
                  },
                  1220: {
                    slidesPerView: 6,
                  },
                }}
              >
                {image
                  ? image.map((item, index) => (
                      <SwiperSlide key={"small-image" + item.gallery_url + index}>
                        <div
                          className="thumb-image rounded-2xl cursor-pointer"
                          style={{
                            backgroundImage: `url(${item.gallery_url})`,
                            backgroundRepeat: "no-repeat",
                            width: "100%",
                            height: "90px",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></div>
                      </SwiperSlide>
                    ))
                  : ""}
              </Swiper>
            </div>
          </div>
          <div className="col-span-8 xl:col-span-3">
            <div className="rounded-2xl shadow-2xl bg-grey-color h-full p-6">
              <div>
                <div className="flex space-x-2 items-center bg-primary-color text-[#fff] w-fit p-2 rounded-2xl text-xs">
                  <FontAwesomeIcon icon={faCertificate}/>
                  <span className="font-bold text-[#FFF]">ExchangeCar</span>
                </div>
                <div className="mt-2">
                  <h1 className="font-extrabold text-2xl text-primary-color capitalize">
                    {currentPost?.car?.car_name}
                  </h1>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <p className="text-secondary-color text-lg font-medium">
                    Posted Price:
                  </p>
                  <div className=" text-3xl text-start text-primary-color">
                    <strong className="!font-extrabold">
                      {billionPart ? billionPart : ""}
                      {billionPart && billionPart === 1 ? (
                        <span className="px-1 text-xl font-semibold">
                          billion
                        </span>
                      ) : (
                        ""
                      )}
                      {millionPart}
                      <span className="px-1 text-xl font-semibold">
                        million
                      </span>
                    </strong>
                    <span className="text-lg font-semibold">(VND)</span>
                  </div>
                </div>
                <div className="italic font-medium text-sm xl:text-end mt-2">
                  (Installments from only 50 million VND per month)
                </div>
                <div className="my-4 p-6 rounded-2xl bg-grey-color-200 bg-opacity-10">
                  <div className="h-full  grid grid-cols-2 gap-3">
                    {/* <div className='flex items-center gap-2'>
                                            <img className='detai-img' src="/img/car-detail/car-detail-icon/user-groups-sm.png" alt="" />
                                            <span className='text-base text-primary-color font-semibold'>{car.number_of_owner ? car.number_of_owner : 0} Chủ Sở Hữu  Cũ</span>
                                        </div> */}
                    <div className="flex items-center gap-2">
                      <img
                        className="detai-img"
                        src="/img/car-detail/car-detail-icon/speed-lg.png"
                        alt=""
                      />
                      <span className="text-base text-primary-color font-semibold">
                        {currentPost?.car?.car_mileage}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        className="detai-img"
                        src="/img/car-detail/car-detail-icon/calendar-lg.png"
                        alt=""
                      />
                      <span className="text-base text-primary-color font-semibold">
                        {currentPost?.car?.manufacturing_date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        className="detai-img"
                        src="/img/car-detail/car-detail-icon/car-status-lg.png"
                        alt=""
                      />
                      <span className="text-base text-primary-color font-semibold">
                        {currentPost?.car?.car_status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        className="detai-img"
                        src="/img/car-detail/car-detail-icon/earth-lg.png"
                        alt=""
                      />
                      <span className="text-base text-primary-color font-semibold">
                        {currentPost?.car?.city}
                      </span>
                    </div>
                    {/* <div className='flex items-center gap-2'>
                                            <img className='detai-img' src="/img/car-detail/car-detail-icon/transmission-lg.png" alt="" />
                                            <span className='text-base text-primary-color font-semibold'>{car.transmission}</span>
                                        </div> */}
                  </div>
                  <div className="mt-3">
                    <a
                      href="#overview"
                      className="text-base text-secondary-color underline font-extrabold hover:underline"
                    >
                      View all specifications
                    </a>
                  </div>
                </div>
                <div className="my-4 p-3 rounded-full bg-grey-color-200 bg-opacity-10">
                  <div className="grid grid-cols-4 items-center">
                    <img
                      src="/img/default-avatar.png"
                      alt=""
                      className="col-span-1 w-12 mx-auto"
                    />
                    <div className="col-span-2 text-secondary-color">
                        <p className="font-bold">{currentPost?.customer?.first_name + currentPost?.customer?.last_name}</p>
                        <span>District 7, Ho Chi Minh City</span>
                    </div>
                  </div>
                </div>
                <a
                  href="tel:0917174050"
                  className="text-center block py-3 rounded-full w-full bg-primary-color text-grey-color text-lg font-bold"
                >
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  {formatPhoneNumber(currentPost?.customer?.mobile_phone)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Detail;
