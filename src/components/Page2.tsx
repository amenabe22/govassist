import logo from "../assets/logo.png"
import merica from "../assets/merica.png"

function Page2() {
    return (
        <>
            <div className="flex">
                <aside id="default-sidebar"
                    className="h-screen sidebar-block text-white w-3/4"
                    aria-label="Sidebar">
                    <div className="h-full overflow-y-auto sidebar-section pl-14 pr-12 pt-4" style={{
                        backgroundColor: "#01264A"
                    }}>
                        <img src={logo} style={{
                            width: 131
                        }} />
                        <p className="hero-header">Eletronic <span className='primary-txt'>diversity visa</span> entry form</p>
                        <p className="pt-10 secondary-txt">Here you will fill all your information to reach your dream.</p>
                        <div className="flex items-center gap-4 mt-14">
                            <svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.1187 5.94436L16.0006 2.05469" stroke="white" stroke-width="2.34791" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M28.6139 25.6128C26.362 30.3056 21.5589 33.5497 15.9999 33.5497C8.26767 33.5497 2 27.282 2 19.5498C2 11.8176 8.26767 5.54993 15.9999 5.54993C17.0707 5.54993 18.1101 5.69174 19.118 5.92795" stroke="white" stroke-width="2.34791" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M27.1658 11.1885C28.9138 13.5192 30.0005 16.4009 30.0005 19.5505" stroke="#4AC97D" stroke-width="2.34791" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.1259 23.9757V15.5665L9.76367 18.1964" stroke="white" stroke-width="2.34791" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.1502 15.5665C20.8824 15.5665 22.2998 16.9838 22.2998 18.7161V20.8421C22.2998 22.5743 20.8824 23.9916 19.1502 23.9916C17.4179 23.9916 16.0006 22.5743 16.0006 20.8421V18.7161C16.0006 16.9681 17.4179 15.5665 19.1502 15.5665Z" stroke="white" stroke-width="2.34791" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <p>10 minutes to finish</p>
                        </div>
                        <div className="flex items-center mb-10 mt-10" style={{ gap: 29 }}>
                            <div style={{
                                width: 6,
                                height: 81
                            }} className="rounded-md bg-white"></div>
                            <p>This is a full copy of the official DV Lottery application form. Use it for training only. You will need to apply on the official website www.dvlottery.state.gov when it opens to take part in the lottery.</p>
                        </div>
                    </div>
                </aside>
                <div className=" w-full pt-7 px-10">
                    <nav className="flex  justify-end w-full">
                        <div className='flex gap-14'>
                            <button className='font-semibold flex items-center gap-2'><span>
                                <img src={merica} className='w-7 h-5' /></span> English</button>
                            <button className='font-semibold outline-btn-light py-3 px-12'>Live Chat</button>
                        </div>

                    </nav>
                    <div className="flex flex-col pt-56 items-center justify-center">
                        <p className="cta-question">Are you ready to begin?</p>
                        <button style={{
                            width: "65%",
                            borderRadius: 14,
                            background: "#4AC97D"
                        }} className="py-3 mt-28 text-white font-bold">Start</button>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Page2