import React, { useState } from 'react'
import cross from '../assets/cross.svg'
import olxLogo from '../assets/OLX_green_logo.svg'
import gicon from '../assets/gicon.svg'
import fbicon from '../assets/fbicon.svg'
import { useSelector,useDispatch } from 'react-redux'
import { stor } from '../app/stor'
import { show,close } from '../Features/SignSlice'
function Signin() {
    const isVisible = useDispatch()
    const [click,setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
        isVisible(close())
        console.log('clickde')
        console.log(isVisible)
    }
  return (
    <>
    <div className='signcom fixed top-0 left-0 w-full h-full bg-black bg-opacity-70' >

    <div className=' absolute flex-col popup rounded-lg z-20 py-7 '>
        <div className='flex justify-end flex-row w-full px-4 py-1'>
            <button onClick={handleClick }>
                 <img src={cross} alt="" />  
            </button>
        </div>
        <div className='flex justify-center flex-col gap-5'>
            <img className='h-12' src={olxLogo} alt="" />
            <h1 className='text-2xl font-semibold typo'>Log into your OLX account  </h1>
        </div>
        <div className='flex flex-col gap-2 mt-4 capitalize '>
           <button className='border-2 flex items-center typo font-medium px-20 py-2 hover:ring-inset new'><img src={gicon} alt="" className='' />Sign in with google</button>
           <button className='border-2 flex items-center typo px-20 py-2 font-medium hover:ring-inset new'><img src={fbicon} alt="" />Sign in with facebook</button>
        </div>
        <h1 className='mt-4 uppercase font-medium'>or</h1>
        <div className='flex flex-col gap-3 mt-4 capitalize'>
            <button className='border-2 flex items-center typo px-20 py-2 font-medium hover:ring-inset new'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>Sign in with email</button>
            <button className='border-2 flex items-center typo px-16 py-2 font-medium  new'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>Sign in with mobile number
            </button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Signin