function OverviewModal(props) {
    const currentCar = props.currentCar
    const show = props.show

    const features = [
        {
            attr: "origin",
            name: "Xuất xứ"
        },
        {
            attr: "body_type",
            name: "Loại xe"
        },
        {
            attr: "number_of_seats",
            name: "Số ghế"
        },
        {
            attr: "transmission",
            name: "Truyền động"
        },
        {
            attr: "fuel_type",
            name: "Loại nhiên liệu"
        },
        {
            attr: "out_color",
            name: "Ngoại thất"
        },
        {
            attr: "in_color",
            name: "Nội thất"
        },
        {
            attr: "number_of_car_doors",
            name: "Số cửa"
        },
        {
            attr: "wheel_drive",
            name: "Dẫn động"
        },
        {
            attr: "horsepower",
            name: "Mã lực"
        },
        {
            attr: "car_dimensions",
            name: "Kích thước"
        },
        {
            attr: "torque",
            name: "Mô-men xoắn"
        },
    ]
    return (
        show && <>
            <div className="md:hidden fixed left-0 right-0 bottom-0 top-0 bg-grey-color z-[99999] px-3 py-8 overflow-y-auto w-[100vw] !h-screen">
                <div>
                    <div className="mb-8">
                        <i onClick={props.onHide} className="fa-solid fa-angle-left fa-xl inline p-3  cursor-pointer "></i>
                    </div>
                    {
                        features.map(feature => (
                            <div className="flex justify-between items-center rounded-3xl p-4 my-4 shadow-lg text-primary-color">
                                <span className='font-semibold'>{feature.name}</span>
                                <span className='font-bold text-base'>
                                    {currentCar[feature.attr] ? currentCar[feature.attr] : '-'}
                                </span>
                            </div >
                        ))
                    }
                </div >
            </div >
        </>
    )
}

export default OverviewModal