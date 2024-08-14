import { Link, useLocation, useNavigate } from "react-router-dom";
import { MuiOtpInput } from "mui-one-time-password-input";
import CountDown from "common/CountDown";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formDataSelector } from "redux/selectors";
import { isObjectEmpty, showToastError } from "utils";
import { authService } from "services/auth.service";
import formSlice from "redux/reducers/formSlice";

function OtpCreateAccountForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = useSelector(formDataSelector)

  const [optNumber, setOtpNumber] = useState("");
  const dispatch = useDispatch()

  const handleOtpNumberOnChange = (e) => {
    setOtpNumber(e);
    dispatch(formSlice.actions.setFormData({...formData, otp: e}))
  };

  const hanleNextOtp = async () => {
    try {
        const res = await authService.resetPassWord({...formData})

        if(res.status === 200) {
          navigate("/auth/sign-in")
        }
    } catch (error) {
      showToastError({message: "Verify OTP failed!"})
      console.log(error);
      
    }
  }

  useEffect(() => {
    if(isObjectEmpty(formData)) navigate("/auth/forgot-password")
  }, [])

  return (
    <div className="w-3/4 lg:w-7/12 flex flex-col space-y-5 justify-center items-center">
      <h2 className="font-bold italic text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3 ">
        Verification Request
      </h2>
      <span>
        * (Please enter the 6-digit code sent to{" "}
        <span className="font-bold">{formData?.mobile_phone}</span>.)
      </span>
      <form className="w-full flex flex-col space-y-5">
        <div className="mb-2">
          <MuiOtpInput
            length={6}
            value={optNumber}
            onChange={handleOtpNumberOnChange}
            TextFieldsProps={{ variant: "standard" }}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            hanleNextOtp()
          }}
          className="p-4 rounded-3xl w-full bg-primary-color text-[white]"
        >
          Next
        </button>
      </form>
      <div className="flex flex-row justify-end items-end">
        <CountDown seconds={600} />
      </div>
      {/* <span className="text-end d-inline-block w-100 cursor-pointer">
        Didn't receive the OTP?
        <span style={{ fontWeight: "bold" }}> Send Again</span>
      </span> */}
    </div>
  );
}

export default OtpCreateAccountForm;
