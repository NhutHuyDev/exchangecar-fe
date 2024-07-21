import MainLayout from "layout/MainLayout";
import CarList from "./components/CarList";
import Filters from "./components/Filters";
import { Link } from "react-router-dom";

function index() {
  return (
    <>
      <MainLayout>
        <div className="flex flex-col space-y-3 mx-2 lg:mx-20 mt-36 mb-10">
          <div class="flex">
            <Link
              to="/"
              className="font-bold after:content-['/\00a0'] after:px-1"
            >
              Home
            </Link>
            <Link to="#" className="font-bold">
              Buy Car
            </Link>
          </div>
          <p>At <span className="text-primary-color font-bold">ExchangeCar</span>, we offer you a wide range of choices.</p>
          <Filters />
          {/* <CarList /> */}
        </div>
      </MainLayout>
    </>
  );
}

export default index;
