import MainLayout from "layout/MainLayout";
import CarList from "./components/CarList";
import Filters from "./components/Filters";
import CertifiedCars from "pages/Home/components/CertifiedCars";

function index() {
  return (
    <MainLayout>
      <div className="flex flex-col space-y-6 mx-2 lg:mx-20 mt-36 mb-10 md:py-4">
        <h2 className="font-bold text-center text-secondary-color text-2xl md:text-3xl px-2 md:px-3 ">
          Powered by{" "}
          <span className="text-3xl text-primary-color font-bold">
            ExchangeCar
          </span>
        </h2>
        <div className="section-title-underline bg-secondary-color"></div>

        <div className="text-grey-color p-11 mt-10 mb-5 rounded-2xl bg-primary-color shadow-xl flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 justify-start lg:justify-around items-stretch">
          <div className="h-full flex lg:justify-center items-center">
            <div className="border-y-secondary-color">
              <p className="font-semibold">Certificate</p>
              <p className="text-3xl font-bold">ExchangeCar</p>
            </div>
          </div>

          <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
            <img
              className="w-11 h-11"
              alt=""
              src="/img/certificate-car/certificate-1.png"
            />
            <span className="font-bold text-center">Score 160 test points</span>
          </div>

          <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
            <img
              className="w-11 h-11"
              alt=""
              src="/img/certificate-car/certificate-2.png"
            />
            <span className="font-bold text-center">Free Maintenance</span>
          </div>

          <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
            <img
              className="w-11 h-11"
              alt=""
              src="/img/certificate-car/certificate-3.png"
            />
            <span className="font-bold text-center">One year warranty</span>
          </div>

          <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
            <img
              className="w-11 h-11"
              alt=""
              src="/img/certificate-car/certificate-4.png"
            />
            <span className="font-bold text-center">Quality assurance</span>
          </div>

          <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
            <img
              className="w-11 h-11"
              alt=""
              src="/img/certificate-car/certificate-5.png"
            />
            <span className="font-bold text-center">5 days money back</span>
          </div>
        </div>
        <p className="mt-5">
          At <span className="text-primary-color font-bold">ExchangeCar</span>,
          we offer you a wide range of choices.
        </p>
        <Filters />
        <CarList />
      </div>
    </MainLayout>
  );
}

export default index;
