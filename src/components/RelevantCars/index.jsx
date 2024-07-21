import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarSwiper from "../CarSwiper";
import { getRelevantCars } from "../../redux/reducers/carsSlice";
import {
  statusCarsSelector,
  relevantCarsSelector,
} from "../../redux/selectors";

function RelevantCars({ car_brand }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRelevantCars(car_brand));
  }, [car_brand, dispatch]);

  const relevantCars = useSelector(relevantCarsSelector);

  const statusCars = useSelector(statusCarsSelector);
  return (
    <section id="similarcar" className="px-3 py-8 xl:px-20 my-8">
      <div>
        <h1 className="text-center text-primary-color font-bold">
          Relevant Cars {car_brand}
        </h1>
      </div>
      <div className="mt-5">
        {relevantCars.length ? (
          <CarSwiper statusCars={statusCars} posts={relevantCars} />
        ) : <p>Loading...</p>}
      </div>
    </section>
  );
}

export default memo(RelevantCars);
