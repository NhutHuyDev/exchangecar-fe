import MainLayout from "layout/MainLayout";
import Contact from "components/Contact";
import HowItWorks from "components/HowItWorks";
import Reviews from "components/Reviews";

function index() {
  return (
    <>
      <MainLayout>
        <img
          className="block w-max mt-16"
          key={"hero-image-" + index}
          src={"/img/services.png"}
          alt={"hero-image-" + index + 1}
        />
        <HowItWorks />
        <Reviews />
        <Contact />
      </MainLayout>
    </>
  );
}

export default index;
