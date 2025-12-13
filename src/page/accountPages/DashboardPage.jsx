import React, { useEffect } from 'react'
import AccountMenuBar from '../../components/AccountMenuBar'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function DashboardPage() {
    const { user, logout, logoutLoading } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (user?.role !== 'owner' ) return navigate('/')
    }, [])
    return (
        <div className="w-full min-h-screen bg-white flex flex-col md:flex-row ">
            <AccountMenuBar />
            <div className=' w-full  md:w-[70%] min-h-[100vh] p-5 '>
                <div>
                    <h1 className='text-5xl font-extrabold mb-28  text-start  mt-14 tracking-tighter uppercase leading-9'>
                        Dashboard
                    </h1>
                </div>

            </div>

        </div>
    )
}

export default DashboardPage
