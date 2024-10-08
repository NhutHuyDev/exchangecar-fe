import React, { useEffect, useState } from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessToken, removeAccessToken } from 'utils';
import authSlice from 'redux/reducers/authSlice';
import { currentUserSelector } from 'redux/selectors';
import { useClickOutside } from 'hooks/use-click-outside';

const useDropDownList = [
    {
        icon: <PersonPinIcon className='!h-7 !w-7 !text-[#03C9D7]'  />,
        title: 'Your account',
        iconColor: '#03C9D7',
        iconBg: '#E5FAFB',
        path: process.env.REACT_APP_ADMIN_URL + "/profile"
    },
    {
        icon: <FavoriteBorderIcon className='!h-7 !w-7 !text-[rgb(0,194,146)]' />,
        title: 'Your favorites',
        iconColor: 'rgb(0, 194, 146)',
        iconBg: 'rgb(235, 250, 242)',
        path: process.env.REACT_APP_ADMIN_URL + "/wishlist"
    },
    // {
    //     icon: <LogoutIcon />,
    //     title: 'Logout',
    //     iconColor: 'rgb(255, 244, 229)',
    //     iconBg: 'rgb(254, 201, 15)',
    // },
]

const UserDropdown = () => {
    const dispatch = useDispatch()
    const [isShow, setIsShow] = useState(false)
    const currentUser = useSelector(currentUserSelector)

    const nodeRef = useClickOutside(() => {
        setIsShow(false)
      })

    const handleLogout = () => {
        removeAccessToken()
        dispatch(authSlice.actions.logout())
    }

    const queryOwner = `?token=${getAccessToken()}&origin=${window.location.pathname}`

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsShow(false)
        })

        return window.addEventListener("scroll", () => {
            setIsShow(false)
        })
    }, [])

    return (

        currentUser &&
        <div>
            <div className='flex gap-4 justify-center items-center text-white relative'>
                <button className='flex gap-2 justify-center items-center py-4 bg-grey-color rounded-md px-3 relative' onClick={() => setIsShow(true)}>
                    <AccountBoxIcon width={30} height={40} />
                    <span>
                        {currentUser.first_name} {currentUser.last_name}
                    </span>
                    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                </button>
                {
                    isShow && 
                    <div ref={nodeRef} className='absolute w-[calc(100%_+_60px)] z-10 px-2 py-4 rounded-lg right-0 top-full bg-[#FFF] shadow-lg '>
                        {
                            useDropDownList.map((item,index) => (
                                <Link to={item.path + queryOwner} key={"list-profile-item-" + index} className='p-4 bg-[#FFF] flex items-center justify-start gap-3 hover:bg-[#5e5e5e33] rounded-xl'>
                                    <div style={{backgroundColor: item.iconBg}} className='rounded-full p-2 flex justify-center items-center'>
                                        {item.icon}
                                    </div>
                                    <div  className='text-base'>
                                        {
                                            item.title
                                        }
                                    </div>
                                </Link>
                            ))
                        }
                        <button onClick={() => handleLogout()} className='p-4 bg-[#FFF] w-full flex items-center justify-start gap-3 hover:bg-[#5e5e5e33] rounded-xl'>
                            <div className='rounded-full p-2 bg-[rgb(254,201,15)] flex justify-center items-center h-auto'>
                                <LogoutIcon className='!h-6 !w-6 !text-[rgb(255,244,229)]' />
                            </div>
                            <div className='text-base'>
                                Logout
                            </div>
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default UserDropdown
