import React from 'react'
import img from '../assets/pic.jpeg'
import veh from '../assets/veh.png'
import mbl from '../assets/mobile.png'
import prp from '../assets/property.png'
import rent from '../assets/fro rent.png'
import elec from '../assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png'
import bikes from '../assets/bikes.png'
import trac from '../assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png'
import service from '../assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png'
import jobs from '../assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png'
import animal from '../assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png'
import furniture from '../assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png'
import fashion from '../assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png'
import books from '../assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png'
import kids from '../assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png'
import Mobiles from './Mobiles'
import Cars from './Cars.jsx'
import car1 from '../assets/car-1.webp'
import car2 from '../assets/car-2.webp'
import car3 from '../assets/car-3.webp'
import car4 from '../assets/car-4.webp'
import mb2 from "../assets/mb-2.webp";
import mb from "../assets/mb-1.webp";
import mb3 from "../assets/mb-3.webp";
import mb4 from "../assets/mb-4.webp";
import mobs from './Mobiles.jsx'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { catOpen } from '../Features/CatogrySlice.js'


function CatogriesSm() {
  const mobs =  [
    {img:car1,
      label:'Honda City',
      location:'Chowrangi town, Karachi',
      price:'Rs. 23,00,000',
      time:'1 month ago'
    }
    , {img:car2,
      label:'WaganR',
      location:'Chobarji town, Hyderabad',
      price:'Rs. 23,69,000',
      time:'3 weeks ago'
    },
    {
      img:car3,
      label:'Toyota Prius',
      location:'Gulberg, Karachi',
      price:'89,00,000',
      time:'1 day ago'
    },
    {
      img:car4,
      label:'Honda Civic',
      location:'IBA, Sukhurabad',
      price:'Rs. 63,00,000',
      time:'1 hour ago'
      
    }
  ]
  const mobiles =[
    {
      label:'Samsung galaxy s21 ',
      img:mb,
      price:'Rs 95,000',
      location:'Sarfaraz Colony, Karachi',
      time:'1 week ago'
    },
    {
      label:'Vivo s1 pro',
      img:mb2,
      price:'Rs 32,000',
      location:'Layari, Karachi',
      time:'3 week ago'
    },
    {
      label:'google pixel 7pro',
      img:mb3,
      price:'Rs 68,000',
      location:'Machar Colony, Karachi',
      time:'3 days ago'
    },
    {
      label:'Oneplus 10 pro',
      img:mb4,
      price:'Rs 92,000',
      location:'chorangi town, Karachi',
      time:'2 week ago'
    },
  ]
  const mobile = mobs
  const catogries = [
    {img:mbl,
      label:'Mobile Phones',
      list:mobiles
      
    }
    , {img:veh,
      label:'Motors',
      list:mobile
    }
    , {img:prp,
      label:'Properties'
    }
    , {img:rent,
      label:'Rent'
    }
    , {img:elec,
      label:'Electronics'
    }
    ,{
      img:bikes,
      label:'Bikes'
    },
    {
      img:trac,
      label:'Tractors'},
      {
        img:service,
        label:'Services'
      },
      {
        img:jobs,
        label:'Jobs'
      },
      {
        img:animal,
        label:'Animals'
      },
      {
        img:furniture,
        label:'Furniture'
      },
      {
        img:fashion,
        label:'Fashion'
      },
      {
        img:books,
        label:'Books'
      },
      {
        img:kids,
        label:'Kids'
      }
    ]
   
   const title = 'Motors'
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const handleClick = (item) => { 
    const list = item.list
    if(list){
      console.log(list)
      navigate('list', {state:{list}})

    }
   } 
  return (
    <div className='' >
        <ul className='flex border-[t] gap-6 text-base cursor-pointer'>
            <li className='font-medium text-slate-900'>All Categories</li>
            <li className='hover:text-green-700'>Mobile Phones</li>
            <li className='hover:text-green-700'>Cars</li>
            <li className='hover:text-green-700'>Motorcycles</li>
            <li className='hover:text-green-700'>Houses</li>
            <li className='hover:text-green-700'>Tablets</li>
            <li className='hover:text-green-700'>Land & Plots</li>
        </ul>
        <div className=' w-full pics py-6'>
            <img src={img} alt="" />
        </div>
        <div className='flex flex-col items-start gap-3 flex-wrap mt-2'>
          <h1 className='font-semibold text-2xl text-darkslategray pb-0'>All Catogries</h1>
          <div className='flex items-center flex-wrap w-full gap-12 pt-0'>
            {catogries.map((item) => {
              
              return <div key={item.label} onClick={() => handleClick(item)} className='flex flex-col items-center cursor-pointer '>
                <img className='w-24' src={item.img} alt="" />
                <h5 className='font-medium'>{item.label}</h5>
              </div>
            })}
          
          </div>
        </div>
        <div className='mt-14 '>
          <Mobiles/>
          <Cars mobs={mobs} title={'Cars'} />
        </div>
    </div>
    
  )
}


export default CatogriesSm