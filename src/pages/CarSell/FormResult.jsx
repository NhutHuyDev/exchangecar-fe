import { faAngleLeft, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainLayout from 'layout/MainLayout';
import { Link } from 'react-router-dom';
import CarValuationResult from './components/results/CarValuation';
import SellCarResult from './components/results/SellCar';
import TradeIn from './components/results/TradeIn';

function FormResult({ type }) {

    return (
        <MainLayout>
            <div className='m-24 space-y-5'>
                <div className='space-x-3'>
                    <FontAwesomeIcon icon={faAngleLeft} />
                    <Link to='/' className='font-bold'>Trang Chủ</Link>
                </div>

                <div className='grid grid-cols-2 rounded-2xl pt-10 shadow-xl bg-grey-color'>
                    {type === 1 && <CarValuationResult />}
                    {type === 2 && <SellCarResult />}
                    {type === 3 && <TradeIn />}

                    <div className='p-5 col-span-2 bg-grey-color'>
                        <span className='italic text-sm'>
                            (<span className='text-[red]'>*</span>) Giá trị ước tính trên chỉ mang tính chất tham khảo
                        </span>
                    </div>
                    <div className='col-span-2 flex px-10 py-14 bg-primary-color rounded-b-2xl text-[white]'>
                        <div className='flex-1'>
                            <h2 className='font-bold text-2xl'>Giá xe của bạn được chúng tôi ước tính dựa trên:</h2>
                            <div className='mt-5 space-y-3'>
                                <div className='flex space-x-2 items-center'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='text-secondary-color' />
                                    <p>Thông tin cơ bản bạn cung cấp</p>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='text-secondary-color' />
                                    <p>Tình trạng xe bạn lựa chọn</p>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='text-secondary-color' />
                                    <p>(Chưa hoàn thành) xác thực tình trạng xe trên thực tế</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <h2 className='font-bold text-2xl'>Kiểm tra nhanh để biết giá cho chiếc xe của bạn!</h2>
                            <div className='mt-5 space-y-5'>
                                <div className='flex items-center space-x-3'>
                                    <div className='font-bold text-secondary-color text-3xl'>01</div>
                                    <div>
                                        <h3 className='font-bold'>Đặt lịch hẹn</h3>
                                        <p>Thời gian và địa điểm do bạn quyết định</p>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-3'>
                                    <div className='font-bold text-secondary-color text-3xl'>02</div>
                                    <div>
                                        <h3 className='font-bold'>Kiểm tra thực tế</h3>
                                        <p>Chuyên viên kỹ thuật kiểm tra xe trực tiếp</p>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-3'>
                                    <div className='font-bold text-secondary-color text-3xl'>03</div>
                                    <div>
                                        <h3 className='font-bold'>Nhận giá cuối cùng</h3>
                                        <p>Nhận phiếu đánh giá chi tiết và giá cuối từ chuyên viên CitiCar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout >
    )
}

export default FormResult