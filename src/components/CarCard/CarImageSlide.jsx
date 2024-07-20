import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper'
import { v4 as uuidv4 } from 'uuid';

import constaints from 'constaints'

function CarImageSlide({ images, srcThumb }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = srcThumb
    }, [srcThumb])

    return (
        <>
            {
                imageLoaded ?
                    <div className='rounded-t-2xl flex justify-center align-center h-full bg-grey-color-200'>
                        <h1 className="text-[white] font-bold my-auto">ExchangeCar</h1>
                    </div>
                    :
                    <Swiper
                        slidesPerView={1}
                        navigation={true}
                        pagination={{
                            type: 'fraction',
                        }}
                        modules={[Navigation, Pagination]}
                        className="w-full images-swiper-inner">
                        {
                            images.map((image, index) => (
                                <SwiperSlide className="h-full" key={'car-image-' + index + uuidv4()}>
                                    <div
                                        className="bg-no-repeat bg-center bg-cover h-full rounded-t-2xl"
                                        style={{
                                            backgroundImage: `url(${constaints.host + image})`,
                                        }}></div>
                                </SwiperSlide>

                            ))
                        }
                    </Swiper>
            }
        </>
    )
}

export default CarImageSlide