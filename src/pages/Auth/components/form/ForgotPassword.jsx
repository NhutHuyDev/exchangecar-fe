import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import formSlice from "redux/reducers/formSlice";
import { authService } from "services/auth.service";
import { showToastError } from "utils";
import { schemaChangePassword } from "utils/schemaForm";

function ForgotPasswordForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    trigger,
  } = useForm({ resolver: yupResolver(schemaChangePassword), mode: 'onChange' })
  const onInvalid = (errors) => console.error(errors)

  const onHandleSubmit = async (data, event) => {
    event.preventDefault()

    const {mobile_phone} = data;

    try {
      const res = await authService.requestOtpResetPassword({mobile_phone: mobile_phone})

      dispatch(formSlice.actions.setFormData({
        ...data,
        mobile_phone: "+84" + mobile_phone,
        otp: res.data.otp
      }))

      navigate("/auth/otp/reset-password")
      
    } catch (error) {
      showToastError({message: "Some thing went wrong!"})
      console.log(error);
    }
    
  }

  return (
    <div className="w-3/4 lg:w-1/2 flex flex-col space-y-4 justify-center items-center">
      <h2 className="text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3 italic font-bold">
        Reset your password
      </h2>
      <form className="w-full flex flex-col space-y-4" onSubmit={handleSubmit(onHandleSubmit, onInvalid)}>
      <div className="mb-2 flex flex-col justify-start items-start space-y-3">
          <label htmlFor="current-password" className="text-lg font-semibold">
            Phone number
          </label>
          <input
            className={`p-4 border border-grey-color-200 rounded-xl w-full ${ errors.mobile_phone && 'block peer border-[#C93B32] outline-none focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]'}`}
            id="current-password"
            type="tel"
            placeholder="Enter your phone"
            {...register("mobile_phone")}
          />
          {errors.mobile_phone && <span className='place-self-start text-[14px] text-[#C93B32]'>{errors.mobile_phone?.message}</span>} 
        </div>
        <div className="mb-2 flex flex-col justify-start items-start space-y-3">
          <label htmlFor="new-password" className="text-lg font-semibold">
            New password
          </label>
          <input
            className={`p-4 border border-grey-color-200 rounded-xl w-full ${ errors.new_password && 'block peer border-[#C93B32] outline-none focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]'}`}
            id="new-password"
            type="password"
            placeholder="Enter your new password"
            {...register("new_password")}
          />
          {errors.new_password && <span className='place-self-start text-[14px] text-[#C93B32]'>{errors.new_password?.message}</span>} 
        </div>

        <div className="mb-2 flex flex-col justify-start items-start space-y-3">
          <label htmlFor="confirmed-password" className="text-lg font-semibold">
            Confirm password
          </label>
          <input
            className={`p-4 border border-grey-color-200 rounded-xl w-full ${ errors.confirmed_password && 'block peer border-[#C93B32] outline-none focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]'}`}
            id="confirmed-password"
            type="password"
            placeholder="Enter your cofirmed password"
            {...register("confirmed_password")}
          />
          {errors.confirmed_password && <span className='place-self-start text-[14px] text-[#C93B32]'>{errors.confirmed_password?.message}</span>} 
        </div>

        <button
          // onClick={(e) => {
          //   e.preventDefault();
          //   navigate("/auth/otp/reset-password", {
          //     state: { mobilePhone: mobilePhone },
          //   });
          // }}
          type="submit"
          className="p-4 rounded-xl w-full bg-primary-color text-[white]"
        >
          Next
        </button>
      </form>

      <p>
        Do you have an account?{" "}
        <Link to="/auth/sign-in" className="font-bold">
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default ForgotPasswordForm;
