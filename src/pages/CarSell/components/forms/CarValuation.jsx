import { useState } from "react"

import locations from "JsonUI/locations"
import mileages from "JsonUI/mileages"
import cars, { AUTOMATIC_GEARBOX, BUILT_UP, KNOCKED_DOWN, MANUAL_GEARBOX, NOW } from "JsonUI/cars"
import getYearRange from "utils/getYearRange"

import AutoComplete from "common/AutoComplete"
import { useEffect } from "react"

function CarValuation() {
    const [infoSellCar, setInfoSellCar] = useState({
        brand: '',
        model: '',
        manufactureYear: '',
        origin: '',
        gearBox: '',
        mileage: ''
    })
    const [disabled, setDisabled] = useState(true)

    const handleOnChange = (e) => {
        setInfoSellCar({ ...infoSellCar, [e.target.name]: e.target.value })
    }

    const setValue = (name, newValue) => {
        setInfoSellCar({ ...infoSellCar, [name]: newValue })
    }

    useEffect(() => {
        const isDisabled = infoSellCar.brand === '' || infoSellCar.model === ''
            || infoSellCar.manufactureYear === '' || infoSellCar.origin === ''
            || infoSellCar.gearBox === '' || infoSellCar.mileage === ''

        setDisabled(isDisabled)
    }, [infoSellCar])
    
    return (
        <>
            <div>
                <h2 className="text-primary-color text-xl text-center font-bold mb-3">Định giá xe của bạn chỉ trong vài bước đơn giản</h2>
                <div className="flex flex-col space-y-5">
                    <div className="space-y-3">
                        <div className="grid grid-cols-2">
                            <div className="mx-3">
                                <AutoComplete
                                    placeholder='Chọn hãng xe'
                                    viewOptions={Object.keys(cars)}
                                    valueOptions={Object.keys(cars)}
                                    name='brand'
                                    value={infoSellCar.brand}
                                    setValue={setValue}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="mx-3">
                                <AutoComplete
                                    placeholder='Chọn model'
                                    viewOptions={Object.keys(cars[infoSellCar.brand] || {})}
                                    valueOptions={Object.keys(cars[infoSellCar.brand] || {})}
                                    name='model'
                                    value={infoSellCar.model}
                                    setValue={setValue}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="mt-3 mx-3">
                                <AutoComplete
                                    placeholder='Năm sản xuất'
                                    viewOptions={getYearRange(2018, NOW)}
                                    valueOptions={getYearRange(2018, NOW)}
                                    name='manufactureYear'
                                    value={infoSellCar.manufactureYear}
                                    setValue={setValue}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="mt-3 mx-3">
                                <AutoComplete
                                    placeholder='Xuất xứ'
                                    viewOptions={[KNOCKED_DOWN, BUILT_UP]}
                                    valueOptions={[KNOCKED_DOWN, BUILT_UP]}
                                    name='origin'
                                    value={infoSellCar.origin}
                                    setValue={setValue}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="mt-3 mx-3">
                                <AutoComplete
                                    placeholder='Hộp số'
                                    viewOptions={[MANUAL_GEARBOX, AUTOMATIC_GEARBOX]}
                                    valueOptions={[MANUAL_GEARBOX, AUTOMATIC_GEARBOX]}
                                    name='gearBox'
                                    value={infoSellCar.gearBox}
                                    setValue={setValue}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="mt-3 mx-3">
                                <AutoComplete
                                    placeholder='Số Km đã đi'
                                    viewOptions={mileages}
                                    valueOptions={mileages}
                                    name='mileage'
                                    value={infoSellCar.mileage}
                                    setValue={setValue}
                                    onChange={handleOnChange} />
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

export default CarValuation