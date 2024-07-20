import { useState } from "react"

import locations from "JsonUI/locations"
import mileages from "JsonUI/mileages"
import cars, { BUILT_UP, KNOCKED_DOWN, NOW } from "JsonUI/cars"
import getYearRange from "utils/getYearRange"

import AutoComplete from "common/AutoComplete"
import { useEffect } from "react"

function TradeIn() {
    const [infoSellCar, setInfoSellCar] = useState({
        own_brand: '',
        own_model: '',
        own_manufactureYear: '',
        own_mileage: '',
        trade_brand: '',
        trade_model: '',
        trade_manufactureYear: '',
        trade_origin: '',
        address: '',
        phone: ''
    })
    const [disabled, setDisabled] = useState(true)

    const handleOnChange = (e) => {
        setInfoSellCar({ ...infoSellCar, [e.target.name]: e.target.value })
    }

    const setValue = (name, newValue) => {
        setInfoSellCar({ ...infoSellCar, [name]: newValue })
    }

    useEffect(() => {
        const isDisabled = infoSellCar.own_brand === '' || infoSellCar.trade_brand === ''
            || infoSellCar.own_model === '' || infoSellCar.trade_model === ''
            || infoSellCar.own_manufactureYear === '' || infoSellCar.trade_manufactureYear === ''
            || infoSellCar.own_mileage === '' || infoSellCar.trade_origin === ''
            || infoSellCar.address === '' || infoSellCar.phone.length !== 10

        setDisabled(isDisabled)
    }, [infoSellCar])

    return (
        <>
            <div>
                <h2 className="text-primary-color text-xl text-center font-bold mb-3">Tiết kiệm chi phí khi đổi lấy một chiếc xe mới với CitiCar</h2>
                <div className="flex flex-col space-y-5">
                    <div className="space-y-3">
                        <div className="flex justify-start items-center space-x-2">
                            <span className="flex justify-center items-center p-1 rounded-[50%] h-6 w-6 bg-primary-color text-secondary-color text-center font-bold ">
                                <span>1</span>
                            </span>
                            <span className="font-bold">Thông tin xe</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="mx-3">
                                <p className="font-bold">Xe của bạn</p>
                            </div>
                            <div className="mx-3">
                                <p className="font-bold">Xe muốn đổi</p>
                            </div>
                            <div className="mt-3 mx-3">
                                <AutoComplete
                                    placeholder='Hãng xe'
                                    viewOptions={Object.keys(cars)}
                                    valueOptions={Object.keys(cars)}
                                    name='own_brand'
                                    value={infoSellCar.own_brand}
                                    setValue={setValue}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="mt-3 mx-3">
                                <AutoComplete
                                    placeholder='Hãng xe'
                                    viewOptions={Object.keys(cars)}
                                    valueOptions={Object.keys(cars)}
                                    name='trade_brand'
                                    value={infoSellCar.trade_brand}
                                    setValue={setValue}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="mt-3 mx-3">
                                <AutoComplete
                                    placeholder='Dòng xe'
                                    viewOptions={Object.keys(cars[infoSellCar.own_brand] || {})}
                                    valueOptions={Object.keys(cars[infoSellCar.own_brand] || {})}
                                    name='own_model'
                                    value={infoSellCar.own_model}
                                    setValue={setValue}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="mt-3 mx-3">
                                <AutoComplete
                                    placeholder='Dòng xe'
                                    viewOptions={Object.keys(cars[infoSellCar.trade_brand] || {})}
                                    valueOptions={Object.keys(cars[infoSellCar.trade_brand] || {})}
                                    name='trade_model'
                                    value={infoSellCar.trade_model}
                                    setValue={setValue}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="mt-3 mx-3">
                                <AutoComplete
                                    placeholder='Năm sản xuất'
                                    viewOptions={getYearRange(2018, NOW)}
                                    valueOptions={getYearRange(2018, NOW)}
                                    name='own_manufactureYear'
                                    value={infoSellCar.own_manufactureYear}
                                    setValue={setValue}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="mt-3 mx-3">
                                <AutoComplete
                                    placeholder='Năm sản xuất'
                                    viewOptions={getYearRange(2018, NOW)}
                                    valueOptions={getYearRange(2018, NOW)}
                                    name='trade_manufactureYear'
                                    value={infoSellCar.trade_manufactureYear}
                                    setValue={setValue}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="mt-3 mx-3">
                                <AutoComplete
                                    placeholder='Số Km đã đi'
                                    viewOptions={mileages}
                                    valueOptions={mileages}
                                    name='own_mileage'
                                    value={infoSellCar.own_mileage}
                                    setValue={setValue}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="mt-3 mx-3">
                                <AutoComplete
                                    placeholder='Xuất xứ'
                                    viewOptions={[KNOCKED_DOWN, BUILT_UP]}
                                    valueOptions={[KNOCKED_DOWN, BUILT_UP]}
                                    name='trade_origin'
                                    value={infoSellCar.trade_origin}
                                    setValue={setValue}
                                    onChange={handleOnChange} />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-start items-center space-x-2">
                            <span className="flex justify-center items-center p-1 rounded-[50%] h-6 w-6 bg-primary-color text-secondary-color text-center font-bold ">
                                <span>2</span>
                            </span>
                            <span className="font-bold">Thông tin liên hệ</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="mx-3">
                                <AutoComplete
                                    placeholder='Địa chỉ'
                                    viewOptions={locations}
                                    valueOptions={locations}
                                    name='address'
                                    value={infoSellCar.address}
                                    setValue={setValue}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="mx-3">
                                <input
                                    className='p-4 border-2 border-grey-color-200 rounded-3xl w-full'
                                    type='text'
                                    placeholder='Số điện thoại'
                                    maxLength={10}
                                    name='phone'
                                    value={infoSellCar.phone}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                    </div>
                    <button disabled={disabled} className='disabled:bg-grey-color-200 font-bold text-[white] text-bold bg-primary-color shadow-xl rounded-3xl p-4'>
                        Tiếp tục
                    </button>
                </div>
            </div>
        </>
    )
}

export default TradeIn