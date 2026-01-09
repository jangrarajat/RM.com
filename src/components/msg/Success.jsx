import React from 'react'

function Success(msg) {
    return (
        <>
            <div className='bg-green-400 flex my-2 flex-col justify-center items-center text-lg text-black  px-4 py-3 '    >
                <span className='flex items-center text-sm'><CircleCheck size={13} />   Successfull </span>
                <span className='text-xs flex text-center'>
                 {msg}
                </span>

            </div>
        </>
    )
}

export default Success
