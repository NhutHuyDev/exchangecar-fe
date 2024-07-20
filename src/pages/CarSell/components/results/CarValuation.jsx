import VNDFormatToWord from "utils/VNDFormatToWord"

function CarValuation() {
    const { billionPart, millionPart } = VNDFormatToWord(1823)

    return (
        <div className='col-span-2 flex w-full'>
            <div className='flex-1 rounded-tl-2xl px-10 col-span-1 border-e-[1px] pb-5 border-grey-color-200 bg-grey-color'>
                <h2 className='font-bold text-2xl text-center'>Xe của bạn</h2>
                <div className='mt-9 px-14 space-y-9'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-2'>
                            <img className='h-6' src='/img/car-detail/car-detail-icon/car-lg.png' />
                            <span>Hãng xe</span>
                        </div>
                        {/* <span>{formData?.brand}</span> */}
                        <span className='font-bold'>Isuzu</span>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-2'>
                            <img className='h-6' src='/img/car-detail/car-detail-icon/hatchback-lg.png' />
                            <span>Dòng xe</span>
                        </div>
                        {/* <span>{formData?.model}</span> */}
                        <span className='font-bold'>Dmax Hi-lander</span>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-2'>
                            <img className='h-6' src='/img/car-detail/car-detail-icon/calendar-lg.png' />
                            <span>Năm sản xuất</span>
                        </div>
                        {/* <span>{formData?.manufactureYear}</span> */}
                        <span className='font-bold'>2022</span>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-2'>
                            <img className='h-6' src='/img/car-detail/car-detail-icon/earth-lg.png' />
                            <span>Xuất xứ</span>
                        </div>
                        {/* <span>{formData?.origin}</span> */}
                        <span className='font-bold'>Nhập khẩu</span>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-2'>
                            <img className='h-6' src='/img/car-detail/car-detail-icon/transmission-lg.png' />
                            <span>Hộp số</span>
                        </div>
                        {/* <span>{formData?.gearBox}</span> */}
                        <span className='font-bold'>Số sàn</span>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-2'>
                            <img className='h-6' src='/img/car-detail/car-detail-icon/speed-lg.png' />
                            <span>Số KM đã đi</span>
                        </div>
                        <span className='font-bold'>0 - 10,000 km</span>
                    </div>
                </div>
            </div>
            <div className='flex-1 justify-center rounded-tr-2xl px-10 col-span-1 bg-grey-color'>
                <p className='text-2xl'>
                    <p><span className="title-hightlight text-3xl">Citi<span>Car</span></span> ước tính giá trị xe của bạn là: </p>
                    <p className='text-center mt-5 font-bold text-4xl'>
                        {billionPart ? billionPart : ''}
                        {billionPart ? <span className='px-1 text-xl font-normal'>Tỷ</span> : ''}
                        {millionPart}
                        <span className='px-1 text-xl font-normal'>Triệu</span>
                        <span className='text-lg font-normal'>
                            (<span className='text-[red]'>*</span>)
                        </span>
                    </p>
                </p>
                <img className='h-80 mx-auto' src='/img/car-sell/car-valuation.png' />
            </div>
        </div>
    )
}

export default CarValuation