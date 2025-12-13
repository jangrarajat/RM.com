import { CircleX } from 'lucide-react'
import React, { useEffect } from 'react'

function ChangePasswordError({ setMsgError ,errorMsg, setErrorMsg}) {
    useEffect(() => {
        setTimeout(() => {
            setMsgError(false)
            setErrorMsg("")
        }, 5000)
    }, [])
    return (
        <div className='text-xs font-light  w-full md:w-[40%] h-16  flex gap-2 justify-center items-center px-5 uppercase bg-red-600 text-white '>
           <h1 className=' flex flex-col text-center justify-center items-center'> <CircleX size={15} />  {errorMsg}</h1>
        </div>
    )
}

export default ChangePasswordError
