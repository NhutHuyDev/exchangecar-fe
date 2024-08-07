import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaSignIn } from "utils/schemaForm";
import authSlice, { signIn } from "redux/reducers/authSlice";
import { useDispatch } from "react-redux";
import { authService } from "services/auth.service";
import { saveAccessToken } from "utils";

function LoginForm() {
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    trigger,
  } = useForm({ resolver: yupResolver(schemaSignIn), mode: 'onChange' })

  const onInvalid = (errors) => console.error(errors)

  const dispatch = useDispatch();

  const onPhoneNumberChange = (event) => {
    const { value } = event.target
    const sanitizedValue = value.replace(/\D/g, '')
    setValue('phoneNumber', sanitizedValue)
    trigger('phoneNumber')
  }

  const onHandleSubmit = async (data, event) => {
    event.preventDefault()

    const { phoneNumber, password } = data;

    const resTokens = await authService.signIn({mobile_phone: phoneNumber, password: password})

    const resProfile = await authService.getProfile({access_token: resTokens.data.access_token})

    const allResults = await Promise.all([resTokens, resProfile])

    saveAccessToken(allResults[0].data.access_token)

    dispatch(authSlice.actions.setCurrentUser(allResults[1].data.data.currentUser))
    navigate("/")
  }

  return (
    <div className="w-3/4 lg:w-1/2 flex flex-col  space-y-5 justify-center items-center">
      <h2 className="text-center font-black italic text-2xl md:text-3xl text-primary-color px-2 md:px-3 ">
        Sign In
      </h2>
      <form className="w-full flex flex-col space-y-5" onSubmit={handleSubmit(onHandleSubmit, onInvalid)}>
        <div className="mb-2 flex flex-col justify-start items-start space-y-3">
          <label htmlFor="login-phone" className="text-lg font-semibold">
            Mobile Phone
          </label>
          <input
            className={`p-4 border border-grey-color-200 rounded-xl w-full 
              ${ errors.phoneNumber
                    && ' border-[#C93B32] ring-[#C93B32] focus:border-[#C93B32] focus:ring-1 focus:ring-[#C93B32]'}`}
            id="login-phone"
            type="tel"
            name="phone_number"
            placeholder="0xxxxxxxxx"
            {...register("phoneNumber")}
            maxLength={10}
            onChange={onPhoneNumberChange}
          />
          {errors.phoneNumber && <span className='place-self-start text-[14px] text-[#C93B32]'>{errors.phoneNumber?.message}</span>}
        </div>
        <div className="mb-2 flex flex-col justify-start items-start space-y-3">
          <label htmlFor="login-phone" className="text-lg font-semibold">
            Password
          </label>
          <input
            className={`p-4 border border-grey-color-200 rounded-xl w-full ${ errors.password && 'block peer border-[#C93B32] outline-none focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]'}`}
            id="login-phone"
            type="password"
            // name="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors.password && <span className='place-self-start text-[14px] text-[#C93B32]'>{errors.password?.message}</span>} 
        </div>
        <button
          type="submit"
          className="p-4 rounded-xl w-full bg-primary-color font-bold text-[white]"
        >
          Sign In
        </button>
      </form>

      <p>
        Don't have an account?{" "}
        <Link to="/auth/sign-up" className="font-bold">
          Sign Up
        </Link>
      </p>

      {/* <div className="flex justify-center items-center w-full">
        <span className="block w-full border-[1px] border-grey-color"></span>
        <span className="block mx-2 text-grey-color-200">Or</span>
        <span className="block w-full border-[1px] border-grey-color"></span>
      </div> */}

      {/* <p>
        Did you forgot password?{" "}
        <Link to="/auth/forgot-password" className="font-bold">
          Reset password
        </Link>
      </p> */}
    </div>
  );
}

export default LoginForm;
