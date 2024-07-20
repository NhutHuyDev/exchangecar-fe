import VNDFormatToWord from "utils/VNDFormatToWord"

function TradeIn() {
    const { billionPart, millionPart } = VNDFormatToWord(423)

    return (
        <>
            <div className='col-span-2 flex justify-between rounded-tr-2xl px-10 bg-grey-color'>
                <div className="flex-1 flex justify-center items-center">
                    <p className='text-2xl text-center'>
                        <p><span className="title-hightlight text-3xl">Citi<span>Car</span></span> ước tính mức chênh lệch là: </p>
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
                </div>
                <div className="flex-1">
                    <h2 className='font-bold text-2xl text-center'>Thông tin liên hệ</h2>
                    <div className='mt-5 px-14 space-y-7'>
                        <div className='space-x-3 flex justify-between'>
                            <span>Số điện thoại:</span>
                            <span className='font-bold'>0365599266</span>
                        </div>

                        <div className='space-x-3 flex justify-between'>
                            <span>Địa chỉ:</span>
                            <span className='font-bold'>TP Hồ Chí Minh</span>
                        </div>

                        <div className='space-x-3 flex justify-between'>
                            <span>Ngày hẹn:</span>
                            <span className='font-bold'>Chờ liên hệ từ CitiCar (hoặc thông qua Hotline)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 col-span-2 flex'>
                <div className='flex-1 rounded-tl-2xl px-10 col-span-1 border-e-[1px] pb-5 border-grey-color-200 bg-grey-color'>
                    <h2 className='font-bold text-2xl text-center'>Xe của bạn</h2>
                    <div className='mt-9 px-14 space-y-9'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-2'>
                                <img className='h-6' src='/img/car-detail/car-detail-icon/car-lg.png' />
                                <span>Hãng xe</span>
                            </div>
                            <span className='font-bold'>Isuzu</span>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-2'>
                                <img className='h-6' src='/img/car-detail/car-detail-icon/hatchback-lg.png' />
                                <span>Dòng xe</span>
                            </div>
                            <span className='font-bold'>Dmax Hi-lander</span>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-2'>
                                <img className='h-6' src='/img/car-detail/car-detail-icon/calendar-lg.png' />
                                <span>Năm sản xuất</span>
                            </div>
                            <span className='font-bold'>2022</span>
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
                <div className='flex-1 rounded-tl-2xl px-10 col-span-1 border-e-[1px] border-grey-color-200 bg-grey-color'>
                    <h2 className='font-bold text-2xl text-center'>Xe muốn đổi</h2>
                    <div className='mt-9 px-14 space-y-9'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-2'>
                                <img className='h-6' src='/img/car-detail/car-detail-icon/car-lg.png' />
                                <span>Hãng xe</span>
                            </div>
                            <span className='font-bold'>Isuzu</span>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-2'>
                                <img className='h-6' src='/img/car-detail/car-detail-icon/hatchback-lg.png' />
                                <span>Dòng xe</span>
                            </div>
                            <span className='font-bold'>Dmax Hi-lander</span>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-2'>
                                <img className='h-6' src='/img/car-detail/car-detail-icon/calendar-lg.png' />
                                <span>Năm sản xuất</span>
                            </div>
                            <span className='font-bold'>2022</span>
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
            </div>
        </>

    )
}

export default TradeIn