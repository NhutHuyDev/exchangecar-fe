// UI Component
import CarCard from "components/CarCard";
import LoadingCarCard from "components/CarCard/LoadingCarCard";
import PaginationPage from "../Pagination";

// react-router-dom
import {
  Link,
  useSearchParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

// Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Reducers
import { getPoweredCars, getPremiumOrHigherCars } from "redux/reducers/carsSlice";
import filtersSlice from "redux/reducers/filtersSlice";

// Selectors
import {
  allCarsSelector,
  statusCarsSelector,
  carTotalPageSelector,
  queryFilterSelector,
  byPageFilterSelector,
  queryTableSelector,
  totalCarsSelector,
} from "redux/selectors";

function CarList() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const cars = useSelector(allCarsSelector);
  const totalPage = useSelector(carTotalPageSelector);
  const totalCars = useSelector(totalCarsSelector);
  const statusCars = useSelector(statusCarsSelector);
  const queryFilter = useSelector(queryFilterSelector);
  const queryTable = useSelector(queryTableSelector);
  const pageFilter = useSelector(byPageFilterSelector);

  useEffect(() => {
    const { car_brand } = queryTable;

    if (car_brand) {
      dispatch(filtersSlice.actions.setInitialFilterState(searchParams));
      dispatch(filtersSlice.actions.setQueryFilter(queryTable));
    }
  }, [dispatch, queryTable]);

  useEffect(() => {
    const updatedUrl =
      queryFilter !== "" ? "/highlight?" + queryFilter : "/highlight";
    window.history.replaceState(null, "", updatedUrl);
    dispatch(getPremiumOrHigherCars());
  }, [queryFilter, dispatch]);

  return (
    <>
      {statusCars === "idle" ? (
        <>
          <p className="font-bold text-primary-color text-right">
            {totalCars + (totalCars > 1 ? " Cars" : " Car")}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {cars.map((carPost) => (
              <Link
                key={carPost.car.car_slug}
                className="mx-2 my-2"
                to={`/${carPost.car.car_slug}`}
                reloadDocument
              >
                <CarCard postData={carPost} />
              </Link>
            ))}
          </div>

          {cars.length ? (
            <div className="flex justify-center my-2">
              <PaginationPage
                totalPage={totalPage}
                currentPage={pageFilter}
                queryFilter={queryFilter}
                queryTable={queryTable}
              />
            </div>
          ) : (
            <div className="mt-4 d-flex flex-column justify-content-center text-center">
              <h2 className="font-bold text-secondary-color">No cars found for sale</h2>
              <img
                src={"/img/not-found-car.png"}
                className="w-100 d-block m-auto mt-4"
                alt={"/img/not-found-car.png"}
              />
            </div>
          )}
        </>
      ) : (
        <div className="grid grid-cols-3">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="mx-2 my-2">
              <LoadingCarCard />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default CarList;
