import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
    const navigate = useNavigate();
    const backToHome = ()=>{
        navigate('/')
    }
    return (
        <div className='flex justify-center items-center p-4 h-screen'>
            <div className='flex justify-center items-center flex-col gap-2'>
                <h1 className='text-center font-semibold text-lg text-secondary'>404 No result found</h1>
                <div><img src={require("../asset/images/icons/dissatisfied.png")} className='object-contain mx-auto' /></div>
                <button className='bg-secondary text-white px-2 py-1.5 rounded-xs text-xs' onClick={backToHome}>Back to home</button>
            </div>
        </div>
    )
}

export default PageNotFound
