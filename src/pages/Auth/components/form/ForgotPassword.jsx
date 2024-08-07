import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { schemaChangePassword } from "utils/schemaForm";

function ForgotPasswordForm() {
  const navigate = useNavigate();
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

    const {current_password, new_password, confirmed_password} = data;

    console.log(data);
    
  }

  return (
    <div className="w-3/4 lg:w-1/2 flex flex-col space-y-4 justify-center items-center">
      <h2 className="font-semibold text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3 ">
        Reset your password
      </h2>
      <form className="w-full flex flex-col space-y-4" onSubmit={handleSubmit(onHandleSubmit, onInvalid)}>
      <div className="mb-2 flex flex-col justify-start items-start space-y-3">
          <label htmlFor="current-password" className="text-lg">
            Phone number
          </label>
          <input
            className={`p-4 border border-grey-color-200 rounded-3xl w-full ${ errors.current_password && 'block peer border-[#C93B32] outline-none focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]'}`}
            id="current-password"
            type="password"
            placeholder="Enter your current password"
            {...register("current_password")}
          />
          {errors.current_password && <span className='place-self-start text-[14px] text-[#C93B32]'>{errors.current_password?.message}</span>} 
        </div>
        <div className="mb-2 flex flex-col justify-start items-start space-y-3">
          <label htmlFor="current-password" className="text-lg">
            Current password
          </label>
          <input
            className={`p-4 border border-grey-color-200 rounded-3xl w-full ${ errors.current_password && 'block peer border-[#C93B32] outline-none focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]'}`}
            id="current-password"
            type="password"
            placeholder="Enter your current password"
            {...register("current_password")}
          />
          {errors.current_password && <span className='place-self-start text-[14px] text-[#C93B32]'>{errors.current_password?.message}</span>} 
        </div>

        <div className="mb-2 flex flex-col justify-start items-start space-y-3">
          <label htmlFor="new-password" className="text-lg">
            New password
          </label>
          <input
            className={`p-4 border border-grey-color-200 rounded-3xl w-full ${ errors.new_password && 'block peer border-[#C93B32] outline-none focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]'}`}
            id="new-password"
            type="password"
            placeholder="Enter your new password"
            {...register("new_password")}
          />
          {errors.new_password && <span className='place-self-start text-[14px] text-[#C93B32]'>{errors.new_password?.message}</span>} 
        </div>

        <div className="mb-2 flex flex-col justify-start items-start space-y-3">
          <label htmlFor="confirmed-password" className="text-lg">
            Confirm password
          </label>
          <input
            className={`p-4 border border-grey-color-200 rounded-3xl w-full ${ errors.confirmed_password && 'block peer border-[#C93B32] outline-none focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]'}`}
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
          className="p-4 rounded-3xl w-full bg-primary-color text-[white]"
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
