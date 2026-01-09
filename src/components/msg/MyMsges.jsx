import React from 'react'

function MyMsges({ myShowMsg, myShowRed }) {
    return (
        <div>
            <h1 className={`text-center text-sm ${myShowRed ? "text-green-500" : "text-red-500"}`}>{myShowMsg}</h1>
        </div>
    )
}

export default MyMsges
