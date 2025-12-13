import React, { useEffect } from 'react'
import { useNavigate ,Link} from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import AccountMenuBar from '../../components/AccountMenuBar'
function AccountSettingsPage() {
    const { user, logout, logoutLoading } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (user === null) return navigate('/')
    }, [])


    return (
        <div className="w-full min-h-screen bg-white flex flex-col md:flex-row ">
            <AccountMenuBar />
            <div className=' w-full  md:w-[70%] min-h-[100vh] p-5 '>
                <div>
                    <h1 className='text-5xl font-extrabold mb-28  text-start  mt-14 tracking-tighter uppercase leading-9'>
                        Settings
                    </h1>
                </div>

                <div className='h-[1px] w-[100%] mb-10 md:w-[50%] bg-gray-400'></div>

                <div >
                    <h1>{user?.username}</h1>
                    <h1>{user?.email}</h1>
                </div>

                <div className='h-[1px] w-[100%] my-10 md:w-[50%] bg-gray-400'></div>

                <div>
                    <Link to="/account/changepassword" className=' uppercase underline cursor-pointer'>
                        Change password
                    </Link>
                </div>

                <div className='h-[1px] w-[100%] my-10 md:w-[50%] bg-gray-400'></div>

                <div>
                    <button className=' underline flex flex-row '
                        onClick={logout}
                    >
                        SIGN OUT {logoutLoading ? (<><ButtonLoader /></>) : null}
                    </button>
                </div>

            </div>

        </div>
    )
}

export default AccountSettingsPage
