import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import veh from "../assets/veh.png";
import mb from "../assets/mb-1.webp";
import heart from "../assets/heart.svg";
import mb2 from "../assets/mb-2.webp";
import mb3 from "../assets/mb-3.webp";
import mb4 from "../assets/mb-4.webp";
import arrow from '../assets/rightarrow.svg'
import { useNavigate, useParams } from "react-router-dom";
function BasicExample() {


 const mobs =[
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
const navigate = useNavigate()



const handleCLick = (mob) =>{
  navigate('details/' + mob.label , {state:{mobs,mob}})
}

  return (
    <div className="flex flex-wrap flex-col items-start gap-5  ">
      <div className="flex justify-between items-center pr-8 w-full">
        <h2 className="text-xl font-medium">Mobiles Phones</h2>
        <h2 className=" text-blue-600 text-lg flex items-center gap-2  font-semibold">View All <span><img src={arrow} alt="" /></span></h2>
      </div>
      <div className="wrapper ">
      <div className="flex flex-wrap slider gap-8">

{
  mobs.map((mob)=>{
    return  <Card key={mob.label}  onClick={()=>handleCLick(mob)}
    style={{ width: "18rem", height: "19rem" }}
    className=" border cursor-pointer cardt rounded  border-gray-200"
    >
    <Card.Img
      className="object-cover h-20  card p-0 rounded"
      variant="top"
      style={{ height: "10rem" }}
      src={mob.img}
    />
    <Card.Body className="px-3  pt-2 pb-0">
      <Card.Title className="flex justify-between">
        <h1 className="font-medium text-lg">{mob.price}</h1>
        <img src={heart} alt="" />
      </Card.Title>
      <Card.Text className="mt-4 gap-1 pb-6 flex justify-start">
        <div className="gap-3 flex flex-col">
          <p className="font-sm">{mob.label}</p>
          <div className="flex flex-col items-start ">
            <p className="text-sm text-gray-500">
             {mob.location}
            </p>
            <p className="text-sm text-gray-500">{mob.time}</p>
          </div>
        </div>
      </Card.Text>
    </Card.Body>
  </Card>
  })
}
</div>
      </div>
     
     
    </div>
  );
}

export default BasicExample;
