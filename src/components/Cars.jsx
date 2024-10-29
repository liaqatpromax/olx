import React from 'react'
import meter from '../assets/meter.svg'
import Button from "react-bootstrap/Button";
import heart from "../assets/heart.svg";
import Card from "react-bootstrap/Card";
import arrow from '../assets/rightarrow.svg'
import { useNavigate } from 'react-router-dom';
function Cars({mobs,title}) {

  const navigate = useNavigate()



const handleCLick = (mob) =>{
  navigate('details/' + mob.label , {state:{mobs,mob}})
}

  return (
    <div className="flex flex-wrap mt-4 flex-col items-start gap-5  ">
      <div className="flex justify-between items-center pr-8 w-full">
        <h2 className="text-xl font-medium">{title}</h2>
        <h2 className=" text-blue-600 text-lg flex items-center gap-2  font-semibold">View All <span><img src={arrow} alt="" /></span></h2>
      </div>
      <div className="wrapper ">
      <div className="flex flex-wrap slider gap-8">

{
  mobs.map((mob)=>{
    return  <Card key={mob.label} onClick={() => handleCLick(mob)}
    style={{ width: "18rem", height: "19rem" }}
    className=" cursor-pointer border cardt rounded  border-gray-200"
    >
    <Card.Img
      className="object-cover h-20  card p-0 rounded"
      variant="top"
      style={{ height: "10rem" }}
      src={mob.img}
    />
    <Card.Body className="p-3">
      <Card.Title className="flex justify-between">
        <h1 className="font-medium text-lg">{mob.price}</h1>
        <img src={heart} alt="" />
      </Card.Title>
      <Card.Text className="mt-4 gap-3 flex justify-start">
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

export default Cars