import { Button } from "@mui/material"
import "./auth.css"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { currentUserSelector, isFailAuthSelector, messageAuthSelector } from "../../redux/selectors"
import { activeUser } from "../../redux/reducers/authSlice"
import { MuiOtpInput } from "mui-one-time-password-input"
import CountDown from '../../common/CountDown'
// import authSlice from "../../redux/reducers/authSlice"

function ActiveUser() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const curUser = useSelector(currentUserSelector)
    const isFail = useSelector(isFailAuthSelector)
    const message = useSelector(messageAuthSelector)

    // useEffect(() => {
    //     dispatch(authSlice.actions.setInitialError())
    // }, [])

    useEffect(() => {
        if (curUser && curUser.is_active) {
            navigate('/login')
        }
    }, [curUser])


    const initActiveUserForm = {
        user_id: curUser ? curUser.email : '',
        active_token: ''
    }
    const [activeUserForm, setActiveUserForm] = useState(initActiveUserForm)

    const handleOnChange = (e) => {
        setActiveUserForm({ ...activeUserForm, [e.target.name]: e.target.value })
    }

    const handleOTPChange = (newValue) => {
        setActiveUserForm({ ...activeUserForm, active_token: newValue })
    }

    const handleOnActiveUserOnClick = () => {
        dispatch(activeUser(activeUserForm))
    }

    return (
        <div className="auth-container">
            <div className="auth-banner">
            </div>
            <div style={{ flex: '1' }}>
                <div className='form-container'>
                    <div className='form-wapper otp'>
                        <span className='title'>Xác thực Email</span>
                        <span>Mã OTP đã được gửi đến email. Vui lòng kiểm tra</span>
                        <form style={{ width: '100%' }}>
                            <div className="input-wapper mb-2" style={{ display: 'none' }}>
                                <span>Email</span>
                                <input
                                    type='text'
                                    name="user_id"
                                    placeholder="you@gmail.com"
                                    value={activeUserForm.user_id}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="mb-2">
                                <span>Mã OTP</span>
                                <MuiOtpInput
                                    length={6}
                                    TextFieldsProps={{ variant: "standard" }}
                                    value={activeUserForm.active_token}
                                    onChange={handleOTPChange}
                                />
                            </div>
                            {
                                isFail ?
                                    <div className="input-wapper">
                                        <span style={{ color: 'red' }}>{message}</span>
                                    </div>
                                    : ""
                            }
                            <Button
                                fullWidth
                                className="mt-2"
                                variant="contained"
                                sx={{ backgroundColor: '#173559', "&:hover": { backgroundColor: '#173559' } }}
                                onClick={handleOnActiveUserOnClick}
                            >
                                Xác nhận
                            </Button>
                        </form>
                        <div className="w-100 mt-2 d-flex justify-content-between">
                            <CountDown seconds={3600} />
                            <Link className="text-end d-inline-block w-100">Chưa nhận được mã OTP?<span style={{ fontWeight: 'bold' }}> Gửi lại</span></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ActiveUser