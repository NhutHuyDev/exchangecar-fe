import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";

function Reviews() {
  const list_reviews = [
    {
      num_stars: 5,
      heading: "Excellent Platform for Car Buyers",
      content:
        "ExchangeCar made my car buying process so smooth and easy. The search filters are very intuitive, and I found my dream car within days. Highly recommend!",
      user: "John Doe",
    },
    {
      num_stars: 4,
      heading: "Good Experience Overall",
      content:
        "I was able to sell my car quickly using ExchangeCar. The listing process was straightforward, and the support team was very helpful. Could use a few more features.",
      user: "Jane Smith",
    },
    {
      num_stars: 5,
      heading: "Highly Recommend!",
      content:
        "Fantastic service! The customer support team was always there to help me, and I sold my car faster than expected. Thank you, ExchangeCar!",
      user: "Alex Johnson",
    },
    {
      num_stars: 5,
      heading: "Great for Finding Rare Cars",
      content:
        "I was looking for a specific model, and ExchangeCar had a great selection. The detailed listings and photos made it easy to make a decision. Very satisfied.",
      user: "Maria Garcia",
    },
    {
      num_stars: 4,
      heading: "User-Friendly and Efficient",
      content:
        "The platform is very user-friendly, and I appreciated the advanced search options. My only suggestion is to add more payment options.",
      user: "David Lee",
    },
    {
      num_stars: 5,
      heading: "Excellent Customer Service",
      content:
        "The support team at ExchangeCar is top-notch. They were very responsive and helped me through every step of the selling process. Couldn't be happier!",
      user: "Emily Davis",
    },
    {
      num_stars: 5,
      heading: "Best Car Selling Experience",
      content:
        "I've tried several platforms to sell my car, but ExchangeCar is by far the best. The process was seamless, and I got a great price for my vehicle.",
      user: "Michael Brown",
    },
  ];

  const render_rate_stars = (stars) => {
    let total_star = [];
    for (let index = 0; index < stars; index++) {
      total_star.push(
        <span key={"rate-star-" + index + 1}>
          <FontAwesomeIcon
            icon={faStar}
            style={{ fontSize: "16px", marginRight: "5px", color: "#fdcf33" }}
          />
        </span>
      );
    }
    return <div>{total_star}</div>;
  };

  return (
    <>
      <div className="reviews bg-grey-color px-3 py-8 xl:px-20 h-3/6">
        <h2 className="font-semibold text-center text-2xl md:text-3xl text-secondary-color px-2 md:px-3 ">
          <span className="text-primary-color">ExchangeCar</span> - Customer Reviews
        </h2>
        <div className="section-title-underline bg-secondary-color"></div>
        <div className="mb-0 md:my-10">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={8}
            freeMode={true}
            modules={[Navigation, FreeMode]}
            grabCursor={true}
            breakpoints={{
              768: {},
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {list_reviews.map((review, index) => (
              <SwiperSlide
                key={"reviews-" + index}
                className="review relative w-[300px] md:w-[350px] xl:w-[400px] h-auto flex flex-col"
              >
                <div className=" p-5 bg-primary-color rounded-2xl relative h-full">
                  <div className="flex justify-between items-center">
                    {render_rate_stars(review.num_stars)}
                    <div>
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        className="text-4xl"
                      />
                    </div>
                  </div>
                  <div className="text-start flex flex-col ">
                    <h5 className="font-semibold text-xl mb-2 text-[white]">
                      {review.heading}
                    </h5>
                    <p className="text-[white]">{review.content}</p>
                    <div className="text-end mt-2 text-[white]">
                      {review.user}
                    </div>
                  </div>
                </div>
                <div className="relative -z-10 bg-primary-color w-16 h-12 -rotate-[30deg] translate-x-[50px] -translate-y-[30px]"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Reviews;
