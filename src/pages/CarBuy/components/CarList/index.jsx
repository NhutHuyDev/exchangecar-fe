// UI Component
import CarCard from 'components/CarCard'
import LoadingCarCard from 'components/CarCard/LoadingCarCard'
import PaginationPage from '../Pagination'

// react-router-dom
import { Link, useSearchParams, useLocation, useNavigate } from 'react-router-dom'

// Hooks
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

// Reducers
import { getCars } from 'redux/reducers/carsSlice'
import filtersSlice from 'redux/reducers/filtersSlice'

// Selectors
import { allCarsSelector, statusCarsSelector, carTotalPageSelector, queryFilterSelector, byPageFilterSelector } from 'redux/selectors';

function CarList() {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();

    const cars = useSelector(allCarsSelector)
    const totalPage = useSelector(carTotalPageSelector)
    const statusCars = useSelector(statusCarsSelector)
    const queryFilter = useSelector(queryFilterSelector)
    const pageFilter = useSelector(byPageFilterSelector)

    useEffect(() => {
        dispatch(filtersSlice.actions.setInitialFilterState(searchParams))
        dispatch(filtersSlice.actions.setQueryFilter())
    }, [])

    useEffect(() => {
        const updatedUrl = queryFilter !== '' ? "/mua-xe?" + queryFilter : '/mua-xe'
        window.history.replaceState(null, '', updatedUrl);
        dispatch(getCars())
        console.log(cars);
    }, [queryFilter])

    return (
        <>
            {
                statusCars === 'idle' ?
                    (
                        <>
                            <div className="grid grid-cols-1 lg:grid-cols-3">
                                {
                                    cars.map((car) =>
                                        <Link key={car.slug} className='mx-2 my-2' to={`/${car.slug}`} reloadDocument>
                                            <CarCard carData={car} />
                                        </Link>)
                                }
                            </div>

                            {cars.length ?
                                <div className="flex justify-center my-2">
                                    <PaginationPage totalPage={totalPage} currentPage={pageFilter} queryFilter={queryFilter} />
                                </div> :
                                <div className="mt-4 d-flex flex-column justify-content-center text-center">
                                    <h2> Không tìm thấy xe được rao bán</h2>
                                    <img src={'/img/banner-img.png'} className="w-100 d-block m-auto mt-4" alt={'/img/banner-img.png'} />
                                </div>
                            }
                        </>
                    )
                    :
                    (
                        <div className="grid grid-cols-3">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) =>
                                <div key={item} className='mx-2 my-2'>
                                    <LoadingCarCard />
                                </div>
                            )}
                        </div>
                    )
            }
        </>
    )
}

export default CarList