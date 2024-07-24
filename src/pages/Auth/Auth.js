import AuthLayout from "layout/AuthLayout";
import SignInForm from "./components/form/SignIn";

import SignUpForm from "./components/form/SignUp";
import OtpCreateAccountForm from "./components/form/OtpCreateAccount";

import ForgotPasswordForm from "./components/form/ForgotPassword";
import OtpResetPasswordForm from "./components/form/OtpResetPassword";

function Auth({ page }) {
  return (
    <AuthLayout>
      {page === "sign-in" && <SignInForm />}

      {page === "sign-up" && <SignUpForm />}

      {page === "otp-create-account" && <OtpCreateAccountForm />}

      {page === "forgot-password" && <ForgotPasswordForm />}

      {page === "otp-reset-password" && <OtpResetPasswordForm />}
    </AuthLayout>
  );
}

export default Auth;
