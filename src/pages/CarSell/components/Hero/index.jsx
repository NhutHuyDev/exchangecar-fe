import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SellCar from "../forms/SellCar"
import CarValuation from "../forms/CarValuation"
import TradeIn from "../forms/TradeIn"

function Hero() {
    const [pathname, setPathname] = useState(window.location.pathname.replace('/', ''))

    useEffect(() => {
        setPathname(window.location.pathname.replace('/', ''))
    }, [window.location.pathname])

    return (
        <div className="p-5 lg:p-15 pb-5 lg:mt-[64px] bg-secondary-color grid grid-cols-2">
            <div className="col-span-2 lg:col-span-1 p-16 pb-0">
                <div>
                    <h2 className="text-5xl font-bold">
                        Bán xe dễ dàng và nhanh chóng tại <span className="title-hightlight second text-6xl">Citi<span>Car</span></span>
                    </h2>
                    <p className="my-5 text-3xl font-bold">
                        Nơi bán xe đáng tin cậy dành cho bạn.
                    </p>
                </div>

                <div className="hidden lg:block">
                    <img className="h-96" src="/img/car-sell/car-sell-hero.png" />
                </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <div className="bg-[white] p-6 rounded-2xl flex flex-col space-y-4">
                    <div className="flex rounded-2xl bg-grey-color">
                        <button className={`${pathname === 'dinh-gia' ? 'bg-secondary-color' : 'bg-grey-color'} flex-1 py-5 rounded-2xl`}>
                            <Link to='/dinh-gia' className="flex flex-col space-y-1 justify-center items-center">
                                <img src="/img/car-sell/tab-images/primary-get-price-car.svg" alt="" />
                                <span className="font-bold">
                                    Định Giá
                                </span>
                            </Link>
                        </button>

                        <button className={`${pathname === 'ban-xe' ? 'bg-secondary-color' : 'bg-grey-color'} flex-1 py-5 rounded-2xl`}>
                            <Link to='/ban-xe' className="flex flex-col space-y-1 justify-center items-center">
                                <img src="/img/car-sell/tab-images/primary-sell-car.svg" alt="" />
                                <span className="font-bold">
                                    Bán Xe
                                </span>
                            </Link>
                        </button>

                        <button className={`${pathname === 'thu-cu-doi-moi' ? 'bg-secondary-color' : 'bg-grey-color'} flex-1 py-5 rounded-2xl`}>
                            <Link to='/thu-cu-doi-moi' className="flex flex-col space-y-1 justify-center items-center">
                                <img src="/img/car-sell/tab-images/primary-trade-in-car.svg" alt="" />
                                <span className="font-bold">
                                    Thu Cũ Đổi Mới
                                </span>
                            </Link>
                        </button>
                    </div>
                    <div>
                        {pathname === 'ban-xe' && <SellCar />}
                        {pathname === 'dinh-gia' && <CarValuation />}
                        {pathname === 'thu-cu-doi-moi' && <TradeIn />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero