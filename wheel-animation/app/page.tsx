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
            <div className="md:flex items-center h-screen md:p-24 pt-60 space-x-6 text-sm bg-gray-300 space-y-40">
                <div className='w-full md:p-10  p-10'>
                    <div className="flex justify-center items-center relative">
                        <div className='absolute'>
                            <div className="relative">
                                <div className="w-80 h-80 bg-gray-500 rounded-full">
                                </div>
                                <div className="absolute inset-10 w-60 h-60 bg-white rounded-full"></div>
                            </div>

                        </div>
                        <div className='absolute w-72 h-72 flex  rotate-45  '>
                            <div className='w-full flex flex-col'>
                                <div className='flex justify-between '>
                                    <div className='flex space-x-4 -rotate-45 '>
                                        <button className=' bg-gray-800 rounded-full p-8 space-x-4'>
                                                <FiCamera className='text-white' size={30} />
                                        </button>
                                    </div>

                                    <div>
                                        <button className='-rotate-45 flex items-center space-x-4'>
                                            <div className='bg-gray-800 rounded-full p-8'>
                                                <AiOutlineSound className='text-white' size={30} />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex justify-between mt-auto'>
                                    <div>
                                        <button className='-rotate-45 flex space-x-4'>
                                            <div className='bg-gray-800 rounded-full p-8'>
                                                <BiCurrentLocation className='text-white' size={30} />
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                        <button className='-rotate-45 flex space-x-4'>
                                            <div className='bg-gray-800 rounded-full p-8'>
                                                <MdOutlineWaterDrop className='text-white' size={30} />
                                            </div>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/*blurred texts*/}
                <div className='space-y-4 w-full md:pt-0'>
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
