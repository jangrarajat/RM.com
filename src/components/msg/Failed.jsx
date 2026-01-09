import React from 'react'

function Failed(msg) {
    
    return (
        <div className='bg-red-500 my-2 flex flex-col justify-center items-center text-lg text-black  px-4 py-1 '  >
            <span className=' flex justify-center items-center text-sm'> <CircleX size={13} />  Failed</span>
            <span>{msg}</span>
        </div>
    )
}

export default Failed
