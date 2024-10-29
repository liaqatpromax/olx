import React from 'react'
import LeftComp from './Catcomponents/LeftComp'
import Details from './Details'
import RightComp from './Catcomponents/RightComp'

function CatDetails() {
  return (
    <>
    <div className='px-9 py-2'>

    <Details/>
    <div className='flex '>

      <div className='left basis-1/4   py-3 '><LeftComp/></div>
      <div className='right basis-3/4 '><RightComp/></div>
    </div>
    </div>
    </>
  )
}

export default CatDetails