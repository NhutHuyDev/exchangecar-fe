function LoadingCarCard() {
    return (
        <div className='rounded-2xl h-full flex flex-col shadow-md'>
            <div className='h-72'>
                <div className='rounded-t-2xl flex justify-center align-center h-full bg-grey-color-200'>
                    <h1 className="text-[white] font-bold my-auto">ExchangeCar</h1>
                </div>
            </div>

            <div className="flex flex-col justify-between p-3 bg-[white] rounded-b-2xl">
                <div className='mt-2 h-12 rounded-xl bg-grey-color'>

                </div>

                <div className='mt-2'>
                    <div className='bg-grey-color rounded-xl h-20'>
                        
                    </div>

                    <div className="mt-2 flex justify-end">
                        <div className="w-20 h-8 rounded-xl bg-grey-color"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingCarCard