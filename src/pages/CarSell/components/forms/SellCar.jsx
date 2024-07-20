import { useState } from "react"

import locations from "JsonUI/locations"
import mileages from "JsonUI/mileages"
import cars, { AUTOMATIC_GEARBOX, BUILT_UP, KNOCKED_DOWN, MANUAL_GEARBOX, NOW } from "JsonUI/cars"
import getYearRange from "utils/getYearRange"

import AutoComplete from "common/AutoComplete"
import { useEffect } from "react"

function SellCar() {
    const [infoSellCar, setInfoSellCar] = useState({
        brand: '',
        model: '',
        manufactureYear: '',
        origin: '',
        gearBox: '',
        mileage: '',
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
        const isDisabled = infoSellCar.brand === '' || infoSellCar.model === ''
            || infoSellCar.manufactureYear === '' || infoSellCar.origin === ''
            || infoSellCar.gearBox === '' || infoSellCar.mileage === ''
            || infoSellCar.address === '' || infoSellCar.phone.length !== 10

        setDisabled(isDisabled)
    }, [infoSellCar])

    return (
        <>
            <div>
                <h2 className="text-primary-color text-xl text-center font-bold mb-3">Nhập thông tin cần thiết để chúng tôi có thể liên hệ với bạn</h2>
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

export default SellCar