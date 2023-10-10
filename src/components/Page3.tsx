import React, { useState } from 'react';
import logo from "../assets/logo.png"
import merica from "../assets/merica.png"

function Page3() {
    const [countryCode, setCountryCode] = useState('+1'); // You can set your default country code here

    const events = [
        {
            date: '2023-10-15',
            title: 'Event 1',
            description: 'Description for Event 1',
        },
        {
            date: '2023-10-20',
            title: 'Event 2',
            description: 'Description for Event 2',
        },
        {
            date: '2023-10-25',
            title: 'Event 3',
            description: 'Description for Event 3',
        },
    ];

    return (
        <>
            <div className="flex">
                <aside id="default-sidebar"
                    className="h-screen sidebar-block text-white" style={{
                        width: "27%"
                    }}
                    aria-label="Sidebar">
                    <div className="h-full overflow-y-auto sidebar-section px-14 pr-12 pt-4" style={{
                        backgroundColor: "#01264A"
                    }}>
                        <img src={logo} style={{
                            width: 131
                        }} />

                        <ol className="relative border-l-4 border-white mt-16">
                            <li className="mb-10 ml-2">
                                <div className="absolute w-5 h-5 bg-white rounded-full mt-1.5 -left-3 border border-white"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-white px-2">Name</time>
                            </li>
                            <li className="ml-4">
                                <div className="absolute w-5 h-5 bg-white rounded-full mt-1.5  -left-3 border border-white"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-white">Contact Information</time>
                            </li>
                        </ol>
                        <ol className="relative border-l-4 border-white border-dotted">
                            <li className="mb-1 ml-2">
                                <time className="mb-1 text-sm font-normal leading-none text-white opacity-0">Gender</time>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-5 h-5 bg-white rounded-full mt-1.5  -left-3 border border-white"></div>
                                <time className="mb-1 text-sm font-normal leading-none" style={{ color: "#D2D2D2" }}>Birth Information</time>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-5 h-5 bg-white rounded-full mt-1.5  -left-3 border border-white"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-white" style={{ color: "#D2D2D2" }}>Country of Eligibility</time>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-5 h-5 bg-white rounded-full mt-1.5  -left-3 border border-white"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-white" style={{ color: "#D2D2D2" }}>Photograph</time>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-5 h-5 bg-white rounded-full mt-1.5  -left-3 border border-white"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-white" style={{ color: "#D2D2D2" }}>Mailing Address</time>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-5 h-5 bg-white rounded-full mt-1.5  -left-3 border border-white"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-white" style={{ color: "#D2D2D2" }}>Additional Information</time>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-5 h-5 bg-white rounded-full mt-1.5  -left-3 border border-white"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-white" style={{ color: "#D2D2D2" }}>Payment</time>
                            </li>
                        </ol>
                    </div>
                </aside>
                <div className=" w-full pt-7 px-10">
                    <nav className="flex  justify-end w-full">
                        <div className='flex gap-14'>
                            <button className='font-semibold flex items-center gap-2'><span>
                                <img src={merica} className='w-7 h-5' /></span> English <span>
                                    <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.99999 5.9757C5.51542 5.9757 5.03085 5.78879 4.66396 5.4219L0.150563 0.908509C-0.0501876 0.707759 -0.0501876 0.375483 0.150563 0.174733C0.351313 -0.0260177 0.683589 -0.0260177 0.88434 0.174733L5.39774 4.68813C5.73002 5.0204 6.26996 5.0204 6.60224 4.68813L11.1157 0.174733C11.3164 -0.0260177 11.6487 -0.0260177 11.8494 0.174733C12.0502 0.375483 12.0502 0.707759 11.8494 0.908509L7.33602 5.4219C6.96913 5.78879 6.48456 5.9757 5.99999 5.9757Z" fill="#01264A" />
                                    </svg>
                                </span></button>
                            <button className='font-semibold outline-btn-light py-3 px-12'>Live Chat</button>
                        </div>

                    </nav>
                    <div className='flex items-center justify-center'>
                        <div className="flex flex-col pt-36 items-start justify-center">
                            <p className="cta-question">2.1. - Phone number</p>
                            <div className="flex items-end gap-5 w-full mt-5">

                                <div className="relative">
                                    <select
                                        className="appearance-none bg-transparent border-b border-gray-300 outline-none pr-10  py-2"
                                        value={countryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                    >
                                        {/* Add country code options here */}
                                        <option value="+1">+1 (USA)</option>
                                        <option value="+44">+44 (UK)</option>
                                        <option value="+49">+49 (Germany)</option>
                                        {/* Add more country codes as needed */}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pl-2 pointer-events-none">
                                        <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.60156 2L10.9016 11.3L20.2016 2" stroke="#01264A" stroke-width="3.1" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <input type="text" formEncType='tel' placeholder='+1 604 123 4567' className="border-b w-full border-gray-300 focus:border-blue-500 outline-none big-input"
                                    />
                                </div>
                            </div>
                            <button style={{
                                borderRadius: 14,
                                background: "#D2D2D2"
                            }} className="flex items-center gap-2 py-3 px-10 text-white mt-8 font-bold">Ok <span><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 9.33333L8.76471 16L25 2" stroke="white" stroke-width="3" />
                            </svg>
                                </span>
                            </button>
                        </div>
                        <div className='absolute flex bottom-0 right-0 m-14 flex-col justify-end items-end'>

                            <svg width="100" height="64" viewBox="0 0 195 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="193" height="62" rx="7" fill="#01264A" />
                                <path d="M98.5 62V1.5" stroke="#083B6D" stroke-width="2" />
                                <path d="M71.4039 41L53.9498 23.546C51.8885 21.4847 48.5155 21.4847 46.4542 23.546L29 41" stroke="white" stroke-width="4.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M126 22L143.455 39.454C145.516 41.5153 148.889 41.5153 150.95 39.454L168.404 22" stroke="white" stroke-width="4.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <rect x="1" y="1" width="193" height="62" rx="7" stroke="#01264A" stroke-width="2" />
                            </svg>
                            <p>Copyright © 2016-2023 GovAssist, LLC All Rights Reserved</p>

                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Page3