import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import formSlice from "redux/reducers/formSlice";
import { authService } from "services/auth.service";
import { showToastError } from "utils";
import { schemaSignUp } from "utils/schemaForm";

function SignUpForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    trigger,
  } = useForm({ resolver: yupResolver(schemaSignUp), mode: 'onChange' })

  const onInvalid = (errors) => console.error(errors)

  const onPhoneNumberChange = (event) => {
    const { value } = event.target
    const sanitizedValue = value.replace(/\D/g, '')
    setValue('mobile_phone', sanitizedValue)
    trigger('mobile_phone')
  }

  const onHandleSubmit = async (data, event) => {
    event.preventDefault()

    const { mobile_phone, password, confirmed_password, first_name, last_name } = data;

    try {
      const res = await authService.requestOTPSignUp({mobile_phone: mobile_phone})

      dispatch(formSlice.actions.setFormData({
        ...data,
        mobile_phone: "+84" + mobile_phone,
        verify_otp: res.data.otp
      }))

      navigate("/auth/otp/create-account")
      
    } catch (error) {
      showToastError({message: "Some thing went wrong!"})
      console.log(error);
    }
  }

  return (
    <div className="w-3/4 lg:w-1/2 flex flex-col space-y-4 justify-center items-center">
      <h2 className="font-black italic text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3 ">
        Sign Up
      </h2>
      <form className="w-full flex flex-col space-y-4" onSubmit={handleSubmit(onHandleSubmit, onInvalid)}>
        <div className="mb-2 flex flex-col justify-start items-start space-y-3">
          <label htmlFor="login-phone" className="text-lg font-semibold">
            Mobile Phone
          </label>
          <input
            className={`p-4 border border-grey-color-200 rounded-xl w-full ${ errors.mobile_phone
              && ' border-[#C93B32] ring-[#C93B32] focus:border-[#C93B32] focus:ring-1 focus:ring-[#C93B32]'}`}
            id="login-phone"
            type="tel"
            maxLength={10}
            name="phone_number"
            placeholder="0xxxxxxxxx"
            onChange={onPhoneNumberChange}
            {...register("mobile_phone")}
          />
          {errors.mobile_phone && <span className='place-self-start text-[14px] text-[#C93B32]'>{errors.mobile_phone?.message}</span>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-2 flex flex-col justify-start items-start space-y-3 grid-cols-1">
            <label htmlFor="first_name" className="text-lg font-semibold">
              First Name
            </label>
            <input
              className={`p-4 border border-grey-color-200 rounded-xl w-full ${ errors.first_name
                && ' border-[#C93B32] ring-[#C93B32] focus:border-[#C93B32] focus:ring-1 focus:ring-[#C93B32]'}`}
              id="first_name"
              type="text"
              name="phone_number"
              placeholder="Enter first name"
              {...register("first_name")}
            />
            {errors.first_name && <span className='place-self-start text-[14px] text-[#C93B32]'>{errors.first_name?.message}</span>}
          </div>
          <div className="mb-2 flex flex-col justify-start items-start space-y-3 grid-cols-1">
            <label htmlFor="last_name" className="text-lg font-semibold">
              Last Name
            </label>
            <input
              className={`p-4 border border-grey-color-200 rounded-xl w-full ${ errors.last_name
                && ' border-[#C93B32] ring-[#C93B32] focus:border-[#C93B32] focus:ring-1 focus:ring-[#C93B32]'}`}
              id="last_name"
              type="text"
              name="phone_number"
              placeholder="Enter last name"
              {...register("last_name")}
            />
            {errors.last_name && <span className='place-self-start text-[14px] text-[#C93B32]'>{errors.last_name?.message}</span>}
          </div>
        </div>

        <div className="mb-2 flex flex-col justify-start items-start space-y-3">
          <label htmlFor="password" className="text-lg font-semibold">
            Password
          </label>
          <input
            className={`p-4 border border-grey-color-200 rounded-xl w-full ${ errors.password
              && ' border-[#C93B32] ring-[#C93B32] focus:border-[#C93B32] focus:ring-1 focus:ring-[#C93B32]'}`}
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors.password && <span className='place-self-start text-[14px] text-[#C93B32]'>{errors.password?.message}</span>}
        </div>

        <div className="mb-2 flex flex-col justify-start items-start space-y-3">
          <label htmlFor="confirm_password" className="text-lg font-semibold">
            Confirm Password
          </label>
          <input
            className={`p-4 border border-grey-color-200 rounded-xl w-full ${ errors.confirmed_password
              && ' border-[#C93B32] ring-[#C93B32] focus:border-[#C93B32] focus:ring-1 focus:ring-[#C93B32]'}`}
            id="confirm_password"
            type="password"
            name="password"
            placeholder="Enter your password"
            {...register("confirmed_password")}
          />
          {errors.confirmed_password && <span className='place-self-start text-[14px] text-[#C93B32]'>{errors.confirmed_password?.message}</span>}
        </div>

        <button
          // onClick={(e) => {
          //   e.preventDefault();
          //   navigate("/auth/otp/create-account", {
          //     state: { mobilePhone: mobilePhone },
          //   });
          // }}
          type="submit"
          className="p-4 rounded-xl w-full bg-primary-color text-[white] font-semibold"
        >
          Sign Up
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

export default SignUpForm;
