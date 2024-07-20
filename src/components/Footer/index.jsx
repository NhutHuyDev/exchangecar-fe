import Collapse from "common/Collapse"

function Footer() {

    const contacts_infors = [
        {
            title: "Address",
            information: '19 Nguyen Huu Tho Street, Tan Hung, District 7, Ho Chi Minh City',
            icon: '',
        },
        {
            title: "Hotline",
            information: '098 6578 655',
            icon: '',
        },
        {
            title: "Email",
            information: 'info@exchangecar.vn',
            icon: '',
        }
    ]

    const footer_navigation = [
        {
            title: 'Services',
            sections: [
                {
                    section: 'Buy Car',
                    path: '/mua-xe'
                },
                {
                    section: 'Services',
                    path: '/ban-xe'
                }
            ]
        },
        {
            title: 'About Us',
            sections: [
                {
                    section: 'Reviews',
                    path: '/'
                },
                {
                    section: 'FAQs',
                    path: '/'
                },
            ]
        }
    ]
    return (
        <>
            <div className='bg-[#75370d] px-3 py-8 xl:px-20' style={{backgroundImage: 'url("/img/footer.png")'}}>
                <div className="flex flex-col items-center leading-7">                   
                    <div className="grid grid-cols-1 md:grid-cols-10 xl:grid-cols-10 gap-8 text-grey-color my-10">
                        <div className="col-span-10 md:col-span-5 xl:col-span-4 2xl:col-span-4">
                            <div className="text-4xl font-semibold mb-3">ExchangeCar</div>
                            <p className="">Professional car trading service platform. Provides customers with a seamless, fast, and reliable experience.</p>
                        </div>
                        <div className="col-span-10 md:col-span-4 xl:col-span-3 2xl:col-span-3">
                            <div className="text-2xl font-medium mb-4">Contact</div>
                            <div className="uppercase font-extrabold text-sm mb-2">ExchangeCar Technology Investment Joint Stock Company</div>
                            {
                                contacts_infors.map((contact, index) =>
                                    <div className='mb-2' key={'contact-info-' + index}>
                                        <span className='font-semibold mr-2'>{contact.title}:</span>
                                        <span>{contact.information}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="col-span-10 md:col-span-9 xl:col-span-3 2xl:col-span-3">
                            <div className="grid grid-cols-3 gap-8">
                                {
                                    footer_navigation.map((item, index) => (
                                        <div className='col-span-full md:col-span-1' key={'footer-navigation-' + index}>
                                            <Collapse light title={item.title} className={'block md:hidden text-xl font-medium mb-1 w-full transition-all duration-150'}>
                                                {
                                                    item.sections.map((section, index) =>
                                                        <div className='mb-2' key={'section-' + index}>
                                                            <a href={section.path} className='text-grey-color hover:text-grey-color-200'> {section.section}</a>
                                                        </div>
                                                    )
                                                }
                                            </Collapse>
                                            <div className="hidden md:block text-2xl font-medium mb-4">{item.title}</div>
                                            {
                                                item.sections.map((section, index) =>
                                                    <div className='hidden md:block mb-2'  key={'section-mobile-' + index}>
                                                        <a href={section.path} className='text-grey-color hover:text-grey-color-200'> {section.section}</a>
                                                    </div>
                                                )
                                            }
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '0.75px' }} className='w-full bg-grey-color rounded-full'></div>
                    <div className='mt-4 text-grey-color'>
                        <p className='text-lg mb-2'>© Copyright 2024 ExchangeCar. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer