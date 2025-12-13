import { CircleX } from 'lucide-react'
import React, { useEffect } from 'react'

function ChangePasswordError({ setMsgError ,errorMsg, setErrorMsg}) {
    useEffect(() => {
        setTimeout(() => {
            setMsgError(false)
            setErrorMsg("")
        }, 40000)
    }, [])
    return (
        <div className=' w-full md:w-[40%] h-16  flex gap-2 justify-center items-center px-5 uppercase bg-red-500 text-white '>
            <CircleX size={15} />  <h1>{errorMsg}</h1>
        </div>
    )
}

export default ChangePasswordError
