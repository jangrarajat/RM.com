import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import AccountMenuBar from '../../components/AccountMenuBar'
import ChangePasswordError from '../../components/msg/ChangePasswordError'

function ChangePassword() {
    const navigate = useNavigate()
    const { user, logout, logoutLoading } = useAuth()

    const [msgError, setMsgError] = useState(true)
    const [errorMsg, setErrorMsg] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")


    useEffect(() => {
        if (user === null) return navigate('/')
    }, [])




    const handleChangePassword = async () => {
        console.log("oldPassword", oldPassword,
            " newPassword", newPassword,
            "confirmNewPassword", confirmNewPassword
        )
        // if(newPassword !== confirmNewPassword) {

        // }
    }




    return (
        <div className="w-full min-h-screen bg-white flex flex-col md:flex-row ">
            <AccountMenuBar />
            <div className=' w-full  md:w-[70%] min-h-[100vh] p-5 '>
                <div>
                    <h1 className='text-5xl font-extrabold mb-28  text-start  mt-14 tracking-tighter uppercase leading-9'>
                        Change <br /> password
                    </h1>
                </div>
                <div className=''>
                    <div className='flex  flex-col gap-2'>
                        <label htmlFor="currentPassword">Current Password <span className='text-red-900'>*</span></label>
                        <input type="password" name="currentPassword" id='currentPassword' className=' border border-gray-400 w-full md:w-[40%] h-16 hover:border-gray-800 focus:outline-none px-5'
                            onChange={(e) => setOldPassword(e.target.value)}
                        />

                        <label htmlFor="newPassword">New password <span className='text-red-900'>*</span></label>
                        <input type="password" name="newPassword" id='newPassword' className=' border border-gray-400 w-full md:w-[40%] h-16 hover:border-gray-800 focus:outline-none px-5'
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <p className='w-full md:w-[40%] text-gray-400 mb-9'>
                            8-25 characters only 1 number 1 uppercase 1 lowercase No spaces
                        </p>

                        <label htmlFor="confirmNewPassword">Confirm new password <span className='text-red-900'>*</span></label>
                        <input type="password" name="confirmNewPassword" id='confirmNewPassword' className=' border border-gray-400 w-full md:w-[40%] h-16 hover:border-gray-800 focus:outline-none px-5'
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                        />

                        {msgError ? (<ChangePasswordError setMsgError={setMsgError} errorMsg={errorMsg} setErrorMsg={setErrorMsg} />) : null}

                        <button className=' border border-gray-400 w-full md:w-[40%] h-16 hover:border-gray-800 focus:outline-none px-5 uppercase bg-black text-white hover:bg-gray-900'
                            onClick={handleChangePassword}
                        >
                            Change password
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ChangePassword
