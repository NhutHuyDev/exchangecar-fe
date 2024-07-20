import { Button } from "@mui/material"
import "./auth.css"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
// import authSlice from "../../redux/reducers/authSlice"
import { currentUserSelector, isFailAuthSelector, messageAuthSelector, emailRequestSelector, statusAuthSelector } from "../../redux/selectors"
import { changePassword } from "../../redux/reducers/authSlice"
import { MuiOtpInput } from "mui-one-time-password-input"
import CountDown from '../../common/CountDown'

function ActiveUser() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [confirmPassword, setConfirmPassword] = useState('')
    let isFail = useSelector(isFailAuthSelector)
    let message = useSelector(messageAuthSelector)
    const emailRequest = useSelector(emailRequestSelector)
    const statusAuth = useSelector(statusAuthSelector)

    const [passwordNotMatch, setPasswordNotMatch] = useState(false)

    const initChangePasswordForm = {
        email: emailRequest,
        new_password: '',
        forgot_password_token: ''
    }
    const [changePasswordForm, setChangePasswordForm] = useState(initChangePasswordForm)

    const handleOnChange = (e) => {
        setChangePasswordForm({ ...changePasswordForm, [e.target.name]: e.target.value })
    }

    const handleOTPChange = (newValue) => {
        setChangePasswordForm({ ...changePasswordForm, forgot_password_token: newValue })
    }

    const handleChangePasswordSubmit = () => {
        if (changePasswordForm.new_password !== confirmPassword) {
            setPasswordNotMatch(true)
        } else {
            dispatch(changePassword(changePasswordForm))
            setPasswordNotMatch(false)
        }
    }

    // useEffect(() => {
    //     dispatch(authSlice.actions.setInitialError())
    // }, [])

    useEffect(() => {
        if (emailRequest === '') {
            navigate('/login')
        }
    }, [emailRequest])

    return (
        <div className="auth-container">
            <div className="auth-banner">
            </div>
            <div style={{ flex: '1' }}>
                <div className='form-container'>
                    <div className='form-wapper otp'>
                        <span className='title'>Đổi mật khẩu</span>
                        <form style={{ width: '100%' }}>
                            <div className="input-wapper mb-2" style={{ display: 'none' }}>
                                <span>Email</span>
                                <input
                                    type='text'
                                    name="email"
                                    placeholder="you@gmail.com"
                                    value={changePasswordForm.email}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="input-wapper mb-2">
                                <span>Mật khẩu mới</span>
                                <input
                                    type='password'
                                    name="new_password"
                                    placeholder="Ít nhất 6 ký tự"
                                    value={changePasswordForm.new_password}
                                    onChange={handleOnChange} />
                            </div>
                            <div className="input-wapper mb-2">
                                <span>Xác nhận mật khẩu</span>
                                <input
                                    type='password'
                                    placeholder="Ít nhất 6 ký tự"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            <div className="mb-2">
                                <span>Mã OTP</span>
                                <MuiOtpInput
                                    length={6}
                                    TextFieldsProps={{ variant: "standard" }}
                                    value={changePasswordForm.forgot_password_token}
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

                            {
                                passwordNotMatch ?
                                    <div className="input-wapper">
                                        <span style={{ color: 'red' }}>password are not match</span>
                                    </div>
                                    : ""
                            }
                            <Button
                                disabled={statusAuth === 'loading'}
                                fullWidth
                                className="mt-2"
                                variant="contained"
                                sx={{ backgroundColor: '#173559', "&:hover": { backgroundColor: '#173559' } }}
                                onClick={handleChangePasswordSubmit}
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