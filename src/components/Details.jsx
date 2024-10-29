import React from 'react'

function Details() {
  
  return (
    <>
    
    <div>
    <ul className='flex border-[t] gap-6 text-base cursor-pointer'>
            <li className='font-medium text-slate-900'>All Categories</li>
            <li className='hover:text-green-700'>Mobile Phones</li>
            <li className='hover:text-green-700'>Cars</li>
            <li className='hover:text-green-700'>Motorcycles</li>
            <li className='hover:text-green-700'>Houses</li>
            <li className='hover:text-green-700'>Tablets</li>
            <li className='hover:text-green-700'>Land & Plots</li>
        </ul>
    </div>
    </>
  )
}

export default Details