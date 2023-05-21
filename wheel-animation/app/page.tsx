
import { FiCamera } from 'react-icons/fi';
import { BiVolumeMute, BiCurrentLocation } from 'react-icons/bi';
import { MdOutlineWaterDrop } from 'react-icons/md';

const App = () => {
    return (
        <>
            <div className="flex min-h-screen  p-24 flex space-x-6">
            <div className='text-white'>
                <FiCamera className='bg-gray-900 text-white p-4 rounded-full' />
                <BiVolumeMute />
                <BiCurrentLocation />
                <MdOutlineWaterDrop />
            </div>
                <div className='space-y-4'>
                    <span className='bg-gray-900 flex space-x-4 rounded-md p-4'>
                        <FiCamera className='text-white'/>
                        <p>Capture Stunning, details photos and videos</p>
                    </span>
                    <span className='bg-gray-900 flex space-x-4 rounded-md p-4'>
                        <FiCamera className='text-white'/>
                        <p>Capture Stunning, details photos and videos</p>
                    </span>

                    <span className='bg-gray-900 flex space-x-4 rounded-md p-4'>
                        <FiCamera className='text-white'/>
                        <p>Capture Stunning, details photos and videos</p>
                    </span>

                    <span className='bg-gray-900 flex space-x-4 rounded-md p-4'>
                        <FiCamera className='text-white'/>
                        <p>Capture Stunning, details photos and videos</p>
                    </span>

                </div>
            </div>
        </>

    )
}

export  default App
