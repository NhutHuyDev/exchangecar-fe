import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Detail from "./components/Detail";
import OverviewCar from "./components/OverviewCar";
import Certified from "./components/Certified";
import StickyNav from "components/StickyNav";

import MainNavbar from "components/Navbar";
import Footer from "components/Footer";
import RelevantCars from "components/RelevantCars";

import { getCar } from "redux/reducers/carsSlice";
import { currentPostSelector, relevantCarsSelector } from "redux/selectors";
import scrollActiveFunction from "utils/scrollActive";
import Contact from "components/Contact";

function CarDetail() {
  const { slug } = useParams();

  const dispatch = useDispatch();
  const currentPost = useSelector(currentPostSelector);
  const relevantPosts = useSelector(relevantCarsSelector);

  useEffect(() => {
    dispatch(getCar(slug));
    scrollActiveFunction();
  }, [slug]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    scrollActiveFunction();
  }, [slug]);

  return (
    <>
      <MainNavbar />
      {Object.keys(currentPost).length !== 0 ||
      currentPost.constructor !== Object ? (
        <div id="car-detail-wrapper" className="mt-8 sm:mt-12 lg:mt-32">
          <Detail
            image={currentPost?.car?.car_galleries}
            currentPost={currentPost}
          />

          <StickyNav />

          <OverviewCar currentCar={currentPost.car} />

          <Certified />

          <RelevantCars
                        car_brand={currentPost.car.car_brand}
                    />
        </div>
      ) : (
        <div className="px-3 py-8 xl:px-20 h-[100vh] bg-grey-color"></div>
      )}
      <Contact />
      <Footer />
    </>
  );
}

export default CarDetail;
