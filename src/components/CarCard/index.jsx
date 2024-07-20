
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import CarImageSlide from './CarImageSlide'
import constaints from 'constaints'
import VNDFormatToWord from 'utils/VNDFormatToWord'

import './CarCard.css'

function CarCard({ carData: { name, odo, wheel_drive, origin, price, thumbnail, year_of_manufacture, image } }) {
    const { billionPart, millionPart } = VNDFormatToWord(price)

    return (
        <div className='rounded-2xl h-full flex flex-col shadow-md'>
            <div className='h-72'>
                <CarImageSlide images={image} srcThumb={thumbnail ? thumbnail : image[0]} />
            </div>  

            <div className="flex flex-col flex-auto justify-between px-3 bg-[white] rounded-b-2xl">
                <div className='py-3'>
                    <div className="flex space-x-2 items-center bg-primary-color text-secondary-color w-fit p-1 rounded-2xl text-xs">
                        <FontAwesomeIcon icon={faCertificate} />
                        <span className='font-bold'>New Car</span>
                    </div>

                    <p className="mt-2 text-xl font-bold hover:text-primary-color">
                        {name}
                    </p>
                </div>

                <div className='mb-2' style={{ fontSize: '12px' }}>
                    <div className='bg-grey-color rounded-lg flex flex-wrap p-2'>
                        <div className='w-1/2'>
                            <span className='flex space-x-2 items-center' title={year_of_manufacture}>
                                <img height="15" width="15" src="/img/car-detail/car-detail-icon/calendar-lg.png" alt="" />
                                <span className='truncate'>{year_of_manufacture}</span>
                            </span>
                        </div>

                        <div className='truncate w-1/2'>
                            <span className='flex space-x-2 items-center' title={odo}>
                                <img height="15" width="15" src="/img/car-detail/car-detail-icon/speed-lg.png" alt="" />
                                <span className='truncate'>{odo}</span>
                            </span>
                        </div>

                        <div className='truncate w-1/2 mt-2'>
                            <span className='flex space-x-2 items-center' title={wheel_drive}>
                                <img height="15" width="15" src="/img/car-detail/car-detail-icon/steering-wheel-lg.png" alt="" />
                                <span className='truncate'>{wheel_drive}</span>
                            </span>
                        </div>
                        <div className='truncate w-1/2 mt-2'>
                            <span className='flex space-x-2 items-center' title={origin}>
                                <img height="15" width="15" src="/img/car-detail/car-detail-icon/earth-lg.png" alt="" />
                                <span className='truncate'>{origin}</span>
                            </span>
                        </div>
                    </div>

                    <div className="mt-2 text-2xl text-right text-primary-color">
                        <strong>
                            {billionPart ? billionPart : ''}
                            {billionPart ? <span className='px-1 text-xl font-normal'>billion</span> : ''}
                            {millionPart}
                            <span className='px-1 text-xl font-normal'>million</span>
                        </strong>
                        <span className='text-lg'>(VND)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCard