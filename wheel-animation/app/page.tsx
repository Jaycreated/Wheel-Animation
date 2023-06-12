'use client'
import { FiCamera } from 'react-icons/fi';
import { BiVolumeMute, BiCurrentLocation } from 'react-icons/bi';
import { MdOutlineWaterDrop } from 'react-icons/md';
import {RiCameraLensLine} from 'react-icons/ri';
import{AiOutlineSound} from 'react-icons/ai';
import { motion } from 'framer-motion'

const App = () => {

    const wheelVariants = {
        hidden: { rotate: 0 },
        visible: { rotate: -405 },
    };

    const buttonVariants = {
        hover: { scale: 1.1 },
    };

    return (
        <>
            <div className="flex items-center min-h-screen p-24 flex space-x-6 text-sm">
                <div className='w-1/2  p-10'>
                    <div className="flex justify-center items-center relative">
                        <div className='absolute'>
                            <div className="relative">
                                <div className="w-80 h-80 bg-gray-300 rounded-full">

                                </div>
                                <div className="absolute inset-10 w-60 h-60 bg-white rounded-full"></div>
                            </div>

                        </div>
                        <div className='absolute w-full h-60 flex justify-center items-center  '>
                            <div className='w-full'>
                                <div className='flex justify-between rotate-45'>
                                    <div>
                                        <button>
                                            <RiCameraLensLine />
                                        </button>
                                    </div>

                                    <div>
                                        <button>
                                            <AiOutlineSound />
                                        </button>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        <button>
                                            <BiCurrentLocation />
                                        </button>
                                    </div>
                                    <div>
                                        <button>
                                            <MdOutlineWaterDrop />
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/*blurred texts*/}
                <div className='space-y-4 w-full bg-blue-800'>
                    <div className='flex space-x-2 text-sm'>
                    <span className='bg-gray-900 w-64 flex space-x-4 rounded-md p-2 text-white '>
                        <span className='flex justify-center items-center'>
                            <RiCameraLensLine className='text-white w-10 h-10'/>
                        </span>
                        <p className='text-white text-sm'>Capture Stunning, details photos and videos</p>
                    </span>
                        <ul>
                            <li>Preserve Memories</li>
                            <li>Create lasting impressions</li>
                        </ul>
                    </div>
                        <div className='flex space-x-2 text-sm'>
                            <span className='bg-gray-900 w-64 flex space-x-4 rounded-md p-2 text-white'>
                                <span className='flex justify-center items-center'>
                        <AiOutlineSound className='text-white w-10 h-10'/>
                                </span>
                        <p className=''>Immerse yourself in pure, interrupted sound</p>
                        </span>
                            <ul>
                                <li>Block out background noise</li>
                                <li>Enhance your productivity</li>
                            </ul>
                        </div>

                    <div className='flex space-x-2 text-sm'>
                        <span className='bg-gray-900 w-64 flex space-x-4 rounded-md p-2 text-white'>
                            <span className='flex justify-center items-center'>
                        <BiCurrentLocation className='text-white w-10 h-10'/>
                            </span>
                        <p>Easily find your way to any destination</p>
                        </span>
                        <ul>
                            <li>Seamlessly Navigate</li>
                            <li>Save time, reduce stress</li>
                        </ul>

                    </div>

                    <div className='flex space-x-2 text-sm'>
                        <span className='bg-gray-900 w-64 flex space-x-4 rounded-md p-2 text-white'>
                            <span className='flex justify-center items-center'>
                        <FiCamera className='text-white w-10 h-10'/>
                            </span>
                        <p>use the device worry-free in various environment</p>
                         </span>
                        <ul>
                            <li>Withstand water exposure</li>
                            <li>Providing peace of mind.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </>

    )
}

export  default App
