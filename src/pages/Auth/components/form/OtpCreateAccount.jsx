import { Link, useLocation, useNavigate } from "react-router-dom";
import { MuiOtpInput } from "mui-one-time-password-input";
import CountDown from "common/CountDown";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formDataSelector } from "redux/selectors";
import { authService } from "services/auth.service";
import { isObjectEmpty, showToastError } from "utils";
import formSlice from "redux/reducers/formSlice";

function OtpCreateAccountForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const formData = useSelector(formDataSelector)
  const [optNumber, setOtpNumber] = useState("");
  
  const handleOtpNumberOnChange = (e) => {
    setOtpNumber(e);
  };

  const hanleNextOtp = async () => {
    try {
        const res = await authService.signUp({...formData})

        if(res.status === 201) {
          // dispatch(formSlice.actions.resetFormData())
          navigate("/auth/sign-in")
        }
    } catch (error) {
      showToastError({message: "Verify OTP failed!"})
      console.log(error);
      
    }
  }

  useEffect(() => {
    if(isObjectEmpty(formData)) navigate("/auth/sign-up")
  }, [])

  return (
    <div className="w-3/4 lg:w-7/12 flex flex-col space-y-5 justify-center items-center">
      <h2 className="font-bold italic text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3 ">
        Phone number verification
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
          disabled={isObjectEmpty(formData) || (!isObjectEmpty(formData) && formData.verify_otp !== optNumber)}
          className="p-4 rounded-3xl w-full bg-primary-color text-[white] disabled:bg-opacity-70"
        >
          Next
        </button>
      </form>
      <div className="flex flex-row justify-end items-end">
        <CountDown seconds={600} />
      </div>
      <span className="text-end d-inline-block w-100 cursor-pointer">
        Didn't receive the OTP?
        <span className="font-bold">Send Again</span>
      </span>
    </div>
  );
}

export default OtpCreateAccountForm;
