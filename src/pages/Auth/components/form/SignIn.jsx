import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  return (
    <div className="w-3/4 lg:w-1/2 flex flex-col  space-y-5 justify-center items-center">
      <h2 className="font-semibold text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3 ">
        Sign In
      </h2>
      <form className="w-full flex flex-col space-y-5">
        <div className="mb-2 flex flex-col justify-start items-start space-y-3">
          <label for="login-phone" className="text-lg">
            Mobile Phone
          </label>
          <input
            className="p-4 border-2 border-grey-color-200 rounded-3xl w-full"
            id="login-phone"
            type="text"
            name="phone_number"
            placeholder="0xxxxxxxxx"
          />
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
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          className="p-4 rounded-3xl w-full bg-primary-color text-[white]"
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

      <div className="flex justify-center items-center w-full">
        <span className="block w-full border-[1px] border-grey-color"></span>
        <span className="block mx-2 text-grey-color-200">Hoặc</span>
        <span className="block w-full border-[1px] border-grey-color"></span>
      </div>

      <p>
        Did you Forgot password?{" "}
        <Link to="/auth/forgot-password" className="font-bold">
          Reset password
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
