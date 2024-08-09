import MainLayout from "layout/MainLayout";
import Contact from "components/Contact";
import Reviews from "components/Reviews";

function index() {
  return (
      <MainLayout>
        <img
          className="block w-max mt-16"
          key={"hero-image-" + index}
          src={"/img/about-us.png"}
          alt={"hero-image-" + index + 1}
        />
        <div className="my-14 px-10 lg:px-40 2xl:px-80 text-secondary-color font-semibold leading-7">
          <h2 className="font-bold text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3 ">
            About Us
          </h2>
          <div className="section-title-underline bg-primary-color"></div>
          <p className="text-justify mb-4">
            Welcome to <b>ExchangeCar</b>, the premier platform in Vietnam for
            finding and listing cars with ease and efficiency. Our mission is to
            connect car buyers and sellers, ensuring a safe, reliable, and
            convenient online experience tailored to your needs.
          </p>
          <p className="text-justify mb-4">
            At ExchangeCar, we understand that buying or selling a car is more
            than just a transaction—it’s a significant and meaningful process.
            That’s why we’ve built our platform with advanced features to meet
            all your requirements. Whether you’re looking for popular models or
            luxury vehicles, our intelligent search filters will help you
            quickly find the perfect car that suits your preferences.
          </p>
          <p className="text-justify mb-4">
            For those looking to sell their cars, ExchangeCar offers a fast and
            straightforward listing process. With just a few simple steps, you
            can create an attractive and professional listing, making your car
            easily accessible to thousands of potential buyers. Our tools, such
            as car valuation and listing enhancement suggestions, increase your
            chances of a quick and successful sale.
          </p>
          <p className="text-justify mb-4">
            We pride ourselves on our professional and dedicated customer
            support team, always ready to answer your questions and assist you
            throughout your buying or selling journey. Committed to providing
            the best experience, we continuously improve and upgrade our
            services to serve you better.
          </p>
          <p className="text-justify mb-4">
            Join the ExchangeCar community today and discover the amazing
            opportunities waiting for you. We believe that with ExchangeCar,
            your car buying and selling experience will be seamless, efficient,
            and truly enjoyable.
          </p>
        </div>
        <Reviews />
        <Contact />
      </MainLayout>
  );
}

export default index;
