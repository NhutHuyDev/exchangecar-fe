import { Link } from "react-router-dom"

function CreateAccountForm() {
    return (
        <div className='w-1/2 flex flex-col space-y-5 justify-center items-center'>
            <h2 className="font-semibold text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3 ">
                Tạo tài khoản
            </h2>
            <form className="w-full flex flex-col space-y-5">
                <div className="mb-2 flex flex-col justify-start items-start space-y-3">
                    <label for='login-phone' className="text-lg">Số điện thoại</label>
                    <input
                        className='p-4 border-2 border-grey-color-200 rounded-3xl w-full'
                        id='login-phone'
                        type='text'
                        name="phone_number"
                        placeholder="0xxxxxxxxx"
                    />
                </div>
                <button
                    className="p-4 rounded-3xl w-full bg-primary-color text-[white]"
                >Đăng nhập</button>
            </form>

            <div className="flex justify-center items-center w-full">
                <span className="block w-full border-[1px] border-grey-color"></span>
                <span className="block mx-2 text-grey-color-200">Hoặc</span>
                <span className="block w-full border-[1px] border-grey-color"></span>
            </div>

            <div className="w-full flex justify-around">
                <button className="flex space-x-2 items-center">
                    <img className="h-7" src="/svg/google-icon.svg" />
                    <span>Google</span>
                </button>


                <button className="flex space-x-2 items-center">
                    <img className="h-7" src="/svg/facebook-icon.svg" />
                    <span>Facebook</span>
                </button>
            </div>

            <p>Đã có tài khoản? <Link to="/login" className="font-bold">Đăng nhập</Link></p>
        </div>
    )
}

export default CreateAccountForm