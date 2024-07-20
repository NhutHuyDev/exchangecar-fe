import { Link } from "react-router-dom"
import { MuiOtpInput } from "mui-one-time-password-input"
import CountDown from 'common/CountDown'

function ActivePhoneForm() {
    return (
        <div className='w-1/2 flex flex-col space-y-5 justify-center items-center'>
            <h2 className="font-semibold text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3 ">
                Xác thực số điện thoại
            </h2>
            <span>* (Vui lòng nhập mã gồm 6 chữ số được gửi đến điện thoại di động của bạn)</span>
            <form className="w-full flex flex-col space-y-5">
                <div className="mb-2">
                    <MuiOtpInput
                        length={6}
                        TextFieldsProps={{ variant: "standard" }}
                    />
                </div>
                <button
                    className="p-4 rounded-3xl w-full bg-primary-color text-[white]">
                    Xác nhận
                </button>
            </form>
            <div className="flex flex-row justify-end items-end">
                <CountDown seconds={3600} />
            </div>
            <Link className="text-end d-inline-block w-100">Chưa nhận được mã OTP?<span style={{ fontWeight: 'bold' }}> Gửi lại</span></Link>
        </div>
    )
}

export default ActivePhoneForm