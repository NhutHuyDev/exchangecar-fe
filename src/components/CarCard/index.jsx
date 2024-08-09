
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import CarImageSlide from './CarImageSlide'
import VNDFormatToWord from 'utils/VNDFormatToWord'

import './CarCard.css'

function CarCard({ postData }) {
    const { billionPart, millionPart } = VNDFormatToWord(postData.car.selling_price)

    return (
        <div className='rounded-2xl h-full flex flex-col shadow-md'>
            <div className='h-72'>
                <CarImageSlide images={postData.car.car_galleries} srcThumb={postData.car.car_galleries[0].gallery_url} />
            </div>  

            <div className="flex flex-col flex-auto justify-between py-4 px-6 bg-[white] rounded-b-2xl">
                <div className='py-3'>
                    <div className="flex space-x-2 items-center bg-primary-color text-grey-color w-fit py-1 px-2 rounded-2xl text-xs">
                        <FontAwesomeIcon icon={faCertificate} />
                        <span className='font-bold'>New Post</span>
                    </div>

                    <p className="mt-2 text-xl font-bold hover:text-primary-color capitalize">
                        {postData.car.car_name}
                    </p>
                </div>

                <div className='mb-2' style={{ fontSize: '12px' }}>
                    <div className='bg-grey-color rounded-lg flex flex-wrap p-2'>
                        <div className='w-1/2'>
                            <span className='flex space-x-2 items-center'>
                                <img height="15" width="15" src="/img/car-detail/car-detail-icon/calendar-lg.png" alt="" />
                                <span className='truncate font-semibold text-sm'>{postData.car.manufacturing_date ?? "-"}</span>
                            </span>
                        </div>

                        <div className='truncate w-1/2'>
                            <span className='flex space-x-2 items-center'>
                                <img height="15" width="15" src="/img/car-detail/car-detail-icon/speed-lg.png" alt="" />
                                <span className='truncate font-semibold text-sm'>{postData.car.car_mileage ?? "-"}</span>
                            </span>
                        </div>

                        <div className='truncate w-1/2 mt-2'>
                            <span className='flex space-x-2 items-center'>
                                <img height="15" width="15" src="/img/car-detail/car-detail-icon/steering-wheel-lg.png" alt="" />
                                <span className='truncate font-semibold text-sm'>{postData.car.transmission ?? "-"}</span>
                            </span>
                        </div>
                        <div className='truncate w-1/2 mt-2'>
                            <span className='flex space-x-2 items-center'>
                                <img height="15" width="15" src="/img/car-detail/car-detail-icon/earth-lg.png" alt="" />
                                <span className='truncate font-semibold text-sm'>{postData.car.city ?? "-"}</span>
                            </span>
                        </div>
                    </div>

                    <div className="mt-2 text-2xl text-right text-primary-color">
                        <span className='font-bold'>
                            {billionPart ? billionPart : ''}
                            {billionPart ? <span className='px-1 text-xl font-semibold'>billion</span> : ''}
                            {millionPart}
                            <span className='px-1 text-xl font-semibold'>million</span>
                        </span>
                        <span className='text-lg font-semibold'>(VND)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCard