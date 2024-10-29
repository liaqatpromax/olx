import React from 'react'
import searchLogo from '../assets/search.svg'

function SearchBar() {
  return (
    <div className='flex items-center search p-0'>
        <input placeholder=' Find Cars, Mobile Phones and more...' type="text"  className='focus:border-blue-200 border rounded   search border-gray-200  px-3 outline-none'/>
        <button className='bg-darkslategray border-black  '><img src={searchLogo} alt="" /></button>
    </div>
  )
}

export default SearchBar