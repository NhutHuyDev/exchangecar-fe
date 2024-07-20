import { useState } from 'react'
import OverviewModal from './OverviewModal';

function OverviewCar({ currentCar }) {
    const [overviewShow, setOverviewShow] = useState(false)

    const infors = [
        {
            attr: "origin",
            name: "Origin",
            icon: "earth-lg.png",
        },
        {
            attr: "body_type",
            name: "Body Type",
            icon: "hatchback-lg.png",
        },
        {
            attr: "manufacturing_date",
            name: "Manufacturing Date",
            icon: "seat-lg.png",
        },
        {
            attr: "transmission",
            name: "Transmission",
            icon: "transmission-lg.png",
        },
        {
            attr: "fuel_type",
            name: "Engine Type",
            icon: "fuel-sm.png",
        },
    ]

    const features = [
        {
            attr: "out_color",
            name: "Out Color"
        },
        {
            attr: "total_seating",
            name: "Number of Seats"
        },
        {
            attr: "number_of_car_doors",
            name: "Number of Doors"
        },
        {
            attr: "wheel_drive",
            name: "Drivetrain"
        },
    ]

    return (
        <>
            <section id='overview' className="bg-primary-color px-3 py-8 xl:px-20">
                <div>
                    <h1 className="text-center text-grey-color font-semibold">Overview</h1>
                    <div className='mt-6'>
                        <Tabs>
                            <Tab label="Specifications">
                                <div className="py-4">
                                    <div>
                                        <div className="grid grid-cols-5 gap-4">
                                            {
                                                infors.map(infor => (
                                                    <div className="col-span-5 md:col-span-1 flex flex-row gap-1 xl:gap-0 justify-between items-center md:justify-normal md:flex-col rounded-2xl p-3 bg-grey-color">
                                                        <span className='flex justify-center items-center gap-2'>
                                                            <img
                                                                alt=''
                                                                src={
                                                                    "/img/car-detail/car-detail-icon/" +
                                                                    infor.icon
                                                                }
                                                                className={`` + infor.icon}
                                                                width="18"
                                                                height="18" />

                                                            <span className='font-medium'>
                                                                {infor.name}
                                                            </span>
                                                        </span>
                                                        <p title={currentCar[infor.attr]} className="text-center font-bold mt-auto xl:mt-1">
                                                            {currentCar[infor.attr] ? currentCar[infor.attr] : "-"}
                                                        </p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <button onClick={() => setOverviewShow(true)} className='bg-primary-color text-grey-color text-lg font-semibold p-3 mt-3 mx-auto w-max block md:hidden'>Xem toàn bộ thông số</button>
                                        <div className="hidden md:grid grid-cols-2 md:gap-x-14 xl:gap-x-20 gap-y-5 md:px-0 xl:px-32 pt-8">
                                            {
                                                features.map(feature => (
                                                    <div className="text-grey-color text-lg font-semibold flex justify-between border-b-grey-color-200 border-b border-opacity-20 pb-2">
                                                        <span>{feature.name}</span>
                                                        <span title={currentCar[feature.attr]}>
                                                            {currentCar[feature.attr] === "" ? "-"
                                                                : (
                                                                    currentCar[feature.attr]
                                                                )}
                                                        </span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab label="Description">
                                <div className="py-4">
                                    <div className="font-semibold text-lg text-grey-color mx-auto w-max">{currentCar.description}</div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
            <OverviewModal
                show={overviewShow}
                onHide={() => setOverviewShow(false)}
                currentCar={currentCar}
            />
        </>
    )
}

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div className="">
            <div className="flex max-w-md mx-auto">
                {children.map(child => (
                    <button
                        key={child.props.label}
                        className={`${activeTab === child.props.label ? ' border-grey-color border-b-[3px]' : 'border-primary-color'} flex-1 text-grey-color text-lg font-bold py-2`}
                        onClick={e => handleClick(e, child.props.label)}
                    >
                        {child.props.label}
                    </button>
                ))}
            </div>
            <div className="py-4">
                {children.map(child => {
                    if (child.props.label === activeTab) {
                        return <div key={child.props.label}>{child.props.children}</div>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

const Tab = ({ label, children }) => {
    return (
        <div label={label} className="hidden">
            {children}
        </div>
    );
};

export default OverviewCar