import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();

  const [mobilePhone, setMobilePhone] = useState("");

  return (
    <div className="w-3/4 lg:w-1/2 flex flex-col space-y-4 justify-center items-center">
      <h2 className="font-semibold text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3 ">
        Sign Up
      </h2>
      <form className="w-full flex flex-col space-y-4">
        <div className="mb-2 flex flex-col justify-start items-start space-y-3">
          <label for="login-phone" className="text-lg">
            Mobile Phone
          </label>
          <input
            className="p-4 border-2 border-grey-color-200 rounded-3xl w-full"
            id="login-phone"
            type="text"
            name="phone_number"
            value={mobilePhone}
            onChange={(e) => {
              setMobilePhone(e.target.value);
            }}
            placeholder="0xxxxxxxxx"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-2 flex flex-col justify-start items-start space-y-3 grid-cols-1">
            <label for="login-phone" className="text-lg">
              First Name
            </label>
            <input
              className="p-4 border-2 border-grey-color-200 rounded-3xl w-full"
              id="login-phone"
              type="text"
              name="phone_number"
              placeholder="Enter first name"
            />
          </div>
          <div className="mb-2 flex flex-col justify-start items-start space-y-3 grid-cols-1">
            <label for="login-phone" className="text-lg">
              Last Name
            </label>
            <input
              className="p-4 border-2 border-grey-color-200 rounded-3xl w-full"
              id="login-phone"
              type="text"
              name="phone_number"
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div className="mb-2 flex flex-col justify-start items-start space-y-3">
          <label for="login-phone" className="text-lg">
            Password
          </label>
          <input
            className="p-4 border-2 border-grey-color-200 rounded-3xl w-full"
            id="login-phone"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-2 flex flex-col justify-start items-start space-y-3">
          <label for="login-phone" className="text-lg">
            Confirm Password
          </label>
          <input
            className="p-4 border-2 border-grey-color-200 rounded-3xl w-full"
            id="login-phone"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/auth/otp/create-account", {
              state: { mobilePhone: mobilePhone },
            });
          }}
          className="p-4 rounded-3xl w-full bg-primary-color text-[white]"
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
