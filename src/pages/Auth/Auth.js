import AuthLayout from 'layout/AuthLayout'
import LoginForm from './components/form/Login'
import CreateAccountForm from './components/form/CreateAccount'
import ActivePhoneNumberForm from './components/form/ActivePhone'

function Auth({ page }) {
    return <AuthLayout> 
        {page === 'login' && <LoginForm />}

        {page === 'create-account' && <CreateAccountForm />}

        {page === 'otp' && <ActivePhoneNumberForm />}

    </AuthLayout>
}

export default Auth