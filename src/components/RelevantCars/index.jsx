import React, { useEffect, useState, memo } from 'react'
import { useDispatch, useSelector } from "react-redux";
import CarSwiper from "../CarSwiper";
import { getRelevantCars } from "../../redux/reducers/carsSlice";
import { statusCarsSelector, relevantCarsSelector } from '../../redux/selectors'

function RelevantCars({ carNew, }) {
    const [carBrand, setCarBrand] = useState(carNew)

    const dispatch = useDispatch();

    useEffect(() => {
        setCarBrand(carNew)
        if (Object.keys(carNew).length !== 0) {
            dispatch(getRelevantCars(carNew.car_version.car_model.car_brand.brand_name))
            console.log(carBrand);
        }
    }, [carNew])

    const relevantCars = useSelector(relevantCarsSelector)
    const statusCars = useSelector(statusCarsSelector)
    return (
        <section id='similarcar' className="px-3 py-8 xl:px-20 my-8">
            <div>
                <h1 className="text-center text-primary-color font-bold">Relevant Cars</h1>
            </div>
            <div className="mt-5">
                {
                    relevantCars ? <CarSwiper
                        statusCars={statusCars}
                        cars={relevantCars}
                    /> : null
                }
            </div>
        </section>
    )
}

export default memo(RelevantCars)