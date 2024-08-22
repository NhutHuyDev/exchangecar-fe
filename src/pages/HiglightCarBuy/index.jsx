import MainLayout from "layout/MainLayout";
import CarList from "./components/CarList";
import Filters from "./components/Filters";

function index() {
  return (
    <MainLayout>
      <div className="flex flex-col space-y-6 mx-2 lg:mx-20 mt-36 mb-10 md:py-4">
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
