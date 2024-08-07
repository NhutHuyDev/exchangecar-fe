// UI Component
import CarSwiper from "components/CarSwiper";

// Hooks
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

// Reducers
import { getLatestPosts } from 'redux/reducers/carsSlice'

// Selectors
import { latestPostsSelector, statusCarsSelector } from 'redux/selectors';
import { Link } from "react-router-dom";

function CertifiedCars() {
    const dispatch = useDispatch()
    const statusCars = useSelector(statusCarsSelector)
    const latestPosts = useSelector(latestPostsSelector)

    console.log(latestPosts)

    useEffect(() => {
        dispatch(getLatestPosts())
    }, [])


    return (
        <div className="bg-grey-color py-12">
            <div className="px-3 lg:px-0 w-full lg:w-4/5 m-auto">
                <h2 className="font-bold text-center text-secondary-color text-2xl md:text-3xl px-2 md:px-3 ">
                    New cars at <span className="text-3xl text-primary-color font-bold">ExchangeCar</span>
                </h2>
                <div className="section-title-underline bg-secondary-color"></div>

                <div className="text-grey-color p-11 mt-10 mb-5 rounded-2xl bg-primary-color shadow-2xl flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 justify-start lg:justify-around items-stretch">
                    <div className="h-full flex lg:justify-center items-center">
                        <div className="border-y-secondary-color">
                            <p className="font-semibold">Certificate</p>
                            <p className="text-3xl font-bold">ExchangeCar</p>
                        </div>
                    </div>

                    <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
                        <img className="w-11 h-11" alt="" src="/img/certificate-car/certificate-1.png" />
                        <span className="font-bold text-center">Score 160 test points</span>
                    </div>

                    <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
                        <img className="w-11 h-11" alt="" src="/img/certificate-car/certificate-2.png" />
                        <span className="font-bold text-center">Free Maintenance</span>
                    </div>

                    <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
                        <img className="w-11 h-11" alt="" src="/img/certificate-car/certificate-3.png" />
                        <span className="font-bold text-center">One year warranty</span>
                    </div>

                    <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
                        <img className="w-11 h-11" alt="" src="/img/certificate-car/certificate-4.png" />
                        <span className="font-bold text-center">Quality assurance</span>
                    </div>

                    <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
                        <img className="w-11 h-11" alt="" src="/img/certificate-car/certificate-5.png" />
                        <span className="font-bold text-center">5 days money back</span>
                    </div>
                </div>

                <div className="mt-10">
                    <CarSwiper
                        statusCars={statusCars}
                        posts={latestPosts}
                    />

                </div>

                <div className="mt-3">
                    <Link to='/mua-xe'>
                        <p className="font-bold text-primary-color text-center">
                            View More
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CertifiedCars