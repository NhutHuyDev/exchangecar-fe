import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'

import Detail from './components/Detail';
import OverviewCar from './components/OverviewCar';
import Certified from './components/Certified';
import StickyNav from "components/StickyNav";

import MainNavbar from "components/Navbar";
import Footer from "components/Footer";
import RelevantCars from "components/RelevantCars";

import { getCar } from "redux/reducers/carsSlice";
import { currentCarSelector } from 'redux/selectors'
import scrollActiveFunction from "utils/scrollActive";
import Contact from "components/Contact";

function CarDetail() {

    const { slug } = useParams()

    const dispatch = useDispatch();
    const car = useSelector(currentCarSelector)

    useEffect(() => {
        dispatch(getCar(slug))
        scrollActiveFunction()
    }, [slug])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
        scrollActiveFunction()
    }, [slug]);

    return (
        <>
            <MainNavbar />
            {car ? (
                <div id='car-detail-wrapper' className="mt-8 sm:mt-12 lg:mt-32">
                    <Detail
                        image={car.image}
                        car={car}
                    />

                    <StickyNav />

                    <OverviewCar currentCar={car} />

                    <Certified />

                    <RelevantCars
                        carNew={car}
                    />
                </div >
            ) : (
                ''
            )
            }
            <Contact />
            <Footer />
        </>
    )
}

export default CarDetail