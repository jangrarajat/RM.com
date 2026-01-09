import React from 'react'
import ButtonLoader from './ButtonLoader'

function OtpLoader({msg = "Loading"}) {
    return (
        <div
            className=' w-full h-fit px-5  flex flex-row justify-center   items-center text-black my-5  uppercase' >

            <span
                className='flex flex-col gap-5'
            >
                <ButtonLoader />
                {msg} ...
            </span>
        </div>
    )
}

export default OtpLoader
