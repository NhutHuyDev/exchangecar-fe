
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import CarImageSlide from './CarImageSlide'
import VNDFormatToWord from 'utils/VNDFormatToWord'
import { WaterMask } from 'components/WaterMask'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import './CarCard.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { currentUserSelector, isAuthenticatedSelector } from 'redux/selectors'
import { getAccessToken, isObjectEmpty, showToastError, showToastSuccess } from 'utils'
import { customerService } from 'services/customer.service'
import { setLoading } from 'redux/reducers/appSlice'

function CarCard({ postData }) {
    const user = useSelector(currentUserSelector)
    const isAuthenticated = useSelector(isAuthenticatedSelector)
    const [isFavorite, setIsFavorite] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { billionPart, millionPart } = VNDFormatToWord(postData.car.selling_price)

    const handleAddWishList = async (post_id) => {
        const access_token = getAccessToken()

        console.log(access_token);
        

        if(access_token !== null && !isObjectEmpty(user) && isAuthenticated !== null && isAuthenticated){
            dispatch(setLoading(true))
            try {
                await customerService.addWishList({post_id: post_id, access_token: access_token})
                showToastSuccess({message: "Add to wishlist success!"})
                setIsFavorite(true)
            } catch (error) {
                showToastError({message: error.message})
            } finally {
                dispatch(setLoading(false))
            }
        }
        else {
            navigate("/auth/sign-in")
        }
    }

    const handleRemoveWishList = async (post_id) => {
        const access_token = getAccessToken()

        if(access_token !== null && !isObjectEmpty(user) && isAuthenticated !== null && isAuthenticated){
            dispatch(setLoading(true))
            try {
                await customerService.removeWishList({post_id: post_id, access_token: access_token})
                showToastSuccess({message: "Remove from wishlist success!"})
                setIsFavorite(false)
            } catch (error) {
                showToastError({message: error.message})
            } finally {
                dispatch(setLoading(false))
            }
        }
        else {
            navigate("/auth/sign-in")
        }
    }

    return (
        <div className='rounded-2xl h-full flex flex-col shadow-md relative'>
                <div className='h-72 relative'>
                    <CarImageSlide images={postData.car.car_galleries} srcThumb={postData.car.car_galleries[0].gallery_url} />
                </div>  

                <div className="flex flex-col flex-auto justify-between bg-[white] rounded-b-2xl relative">
                    <Link to={`/${postData.car.car_slug}`} className="flex flex-col flex-auto justify-between py-4 px-6 bg-[white] rounded-b-2xl">
                        <div className='py-3 grid grid-cols-2'>
                            <div className="flex space-x-2 items-center bg-primary-color text-grey-color w-fit py-1 px-2 rounded-2xl text-xs">
                                <FontAwesomeIcon icon={faCertificate} />
                                <span className='font-bold'>New Post</span>
                            </div>

                            <p className="mt-2 text-xl font-bold hover:text-primary-color capitalize col-span-2">
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
                    </Link>
                    <div className='flex items-center justify-end absolute z-50 top-4 right-4 cursor-pointer'>
                        {
                            isFavorite ? <BookmarkIcon onClick={() => handleRemoveWishList(postData.id)} className='text-[#FDCF33] !w-8 !h-8' /> : <BookmarkBorderIcon className='text-[#FDCF33] !w-8 !h-8' onClick={() => handleAddWishList(postData.id)}  />
                        }

                    </div>
                </div>
                <WaterMask url={postData.car.car_slug} />
            </div>
    )
}

export default CarCard