import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper";
import "./HowItWorks.css";

function HowItWorks() {
  const list_hiw = [
    {
      title: "Buy Car",
      cards: [
        {
          card_title: "Find a Car",
          card_content:
            "Find the car you need on our website, with all listings carefully reviewed and professionally inspected.",
          card_image: "img/how-it-works/how-it-works-1.png",
        },
        {
          card_title: "Schedule a Viewing",
          card_content:
            "Contact the car owner or showroom to schedule a test drive, ensuring you have a real experience before making a purchase decision.",
          card_image: "img/how-it-works/how-it-works-2.png",
        },
        {
          card_title: "Delivers the Car to Your Location",
          card_content:
            "Record the desired delivery location and receive the car keys directly from the owner.",
          card_image: "img/how-it-works/how-it-works-3.png",
        },
        {
          card_title: "Reliable After-Sales Service",
          card_content:
            "ExchangeCar ensures that all buying and selling procedures are conducted quickly and reliably, providing peace of mind to our customers.",
          card_image: "img/how-it-works/how-it-works-4.png",
        },
      ],
    },
    {
      title: "Sell Car",
      cards: [
        {
          card_title: "Post Your Listing",
          card_content:
            "Create a detailed and attractive listing for your car, including photos and descriptions, to attract potential buyers.",
          card_image: "img/how-it-works/how-it-works-sell-1.png",
        },
        {
          card_title: "Meet with Buyers",
          card_content:
            "Choose a listing package and complete the payment process to get your car advertised on our platform.",
          card_image: "img/how-it-works/how-it-works-sell-2.png",
        },
        {
          card_title: "Make a Payment",
          card_content:
            "Coordinate with interested buyers to schedule viewings and test drives, allowing them to inspect the car in person.",
          card_image: "img/how-it-works/how-it-works-sell-3.png",
        },
        {
          card_title: "Complete the Transaction",
          card_content:
            "Finalize the sale by completing all necessary paperwork and transferring ownership of the car to the buyer.",
          card_image: "img/how-it-works/how-it-works-sell-4.png",
        },
      ],
    },
  ];

  return (
    <>
      <div className="py-14 pr-3 xl:px-0">
        <h2 className="font-semibold text-center text-2xl md:text-3xl text-secondary-color px-2 md:px-3 ">
          The Car Buying and Selling Process at{" "}
          <span className="text-primary-color font-bold">ExchangeCar</span>
        </h2>
        <div className="section-title-underline bg-secondary-color"></div>
        <div className="mt-10">
          <div className="custom1-pagination h-max mb-8 mt-6 mx-auto md:!w-max text-center"></div>
          <Swiper
            slidesPerView={1}
            allowTouchMove={false}
            spaceBetween={20}
            modules={[Navigation, FreeMode, Pagination]}
            navigation={false}
            pagination={{
              el: ".custom1-pagination",
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<span class="swiper-pagination-bullet w-max !mx-2 p-3 md:p-3 inline rounded-none bg-[white] text-grey-color-200 text-sm md:text-lg font-extrabold cursor-pointer transition-all !opacity-100">' +
                  list_hiw[index].title +
                  "</span>"
                );
              },
            }}
            className="swiper-wrapper-hiw"
          >
            {list_hiw.map((item, index) => (
              <SwiperSlide key={"how-it-works-tabs-" + index}>
                <Swiper
                  slidesPerView={"auto"}
                  allowTouchMove={true}
                  spaceBetween={8}
                  freeMode={true}
                  modules={[Navigation, FreeMode, Pagination]}
                  navigation={false}
                  pagination={false}
                  breakpoints={{
                    768: {
                      spaceBetween: 8,
                    },
                    1200: {
                      slidesPerView: 4,
                      spaceBetween: 16,
                      allowTouchMove: false,
                    },
                  }}
                  className="swiper-inner-hiw pb-7 pt-5 px-3 md:pt-7 xl:px-20 "
                >
                  {item.cards.map((card, cardIndex) => (
                    <SwiperSlide
                      className="w-[70vw] md:w-[45vw]"
                      key={"how-it-works-cards-" + cardIndex}
                    >
                      <div className="relative  bg-grey-color rounded-xl shadow-[0_0px_15px_4px_rgba(0,0,0,0.2)] overflow-hidden">
                        <div
                          className={`h-[185px] items-center ${
                            index === 0 ? " pt-8 mx-auto " : ""
                          }`}
                        >
                          <img
                            src={card.card_image}
                            className={`${
                              index === 0 ? " w-[300px] " : " w-full h-full"
                            } mx-auto block`}
                            alt=""
                          />
                        </div>
                        <div className="p-5 h-[172px]">
                          <p className="text-primary-color text-lg font-semibold mb-2">
                            {card.card_title}
                          </p>
                          <p>{card.card_content}</p>
                        </div>
                        <div className="absolute top-0 right-0 rounded-bl-full shadow-xl pl-6 pr-5 py-2 text-lg text-[white] font-semibold bg-primary-color ">
                          {cardIndex + 1}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
