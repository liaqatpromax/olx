import React, { useEffect, useState } from "react";
import Details from "./Details";
import mb1 from "../assets/mb-1.webp";
import user from "../assets/user.webp";
import heart from "../assets/heart.svg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { stor } from "../app/stor";
import Signin from "./Signin";
function Product() {
  const isOpen = useSelector((state) => state.auth)
  window.scrollTo(0,0)
  const navigate = useNavigate()
  const location = useLocation();
  // const { label } = useParams();
  const { mobs, mob } = location.state || {}
  const [history,setHistory] = useState([mob])
  const [clicked,setClicked] = useState(false)
  const handleClicked = () => {
    setClicked(!clicked)
  }
  const [select,setSelect] = useState(mob)
  const [relate,setRelate] = useState(mobs)
  useEffect(() => {
    setSelect(mob)
    setHistory((prev) => [...prev, mob]);
    console.log(history)
    setRelate(mobs.filter(mo => mo.label !== mob.label)); 
  }, [mob, mobs, ])

//   useEffect(() => {
    
//     const handleBack = () =>{
//       if(history.length > 1){
//         console.log('in function')
//         const previous = history[history.length-2]
//         if(previous){
//         console.log(previous.label)
//         setSelect(previous)
//         setHistory((prev) => prev.slice(0,-1))
//         navigate(-1);
// }      }else{
//         navigate('/')
//       }
//     }
//     window.onpopstate = handleBack
    
//   }, [navigate, setSelect,history])
  
  const handle = (cur) => {
    setSelect(cur)
    navigate(`/details/${cur.label}`, { state: { mobs, mob: cur }, replace: false });
  }
  
  return (
    
    <div className="px-9 mt-3">
      <Details />
      <div className="mt-4">
        <div className="flex w-full   items-start">
          <div className="left flex justify-center bg-black pic w-3/5 ">
            <img className="" src={select.img} alt="" />
          </div>
          <div className="px-5 py-0 mt-0 flex flex-col gap-3  right w-2/5">
            <div className="r1 border rounded-md  p-4 py-5 flex flex-col items-start   gap-2">
            <h3 className="font-medium typo capitalize">listed by private user</h3>
                <div className="flex items-center gap-2 ">

              <div className="w-20 block">
                <img src={user} alt="" />
              </div>
              <div className=" capitalize flex flex-col justify-center">
                <p className="font-medium typo">Shandar Mobile</p>
                <p className="text-sm font-light ">member since not remeberd</p>

                <p className="typo font-medium text-sm">see profile</p>
              </div>
                </div>
              <div className="btns mt-4  w-full flex flex-col gap-3  items-center">
                <button onClick={handleClicked} className=" gap-3 bts px-16 py-3  rounded-sm font-medium text-white flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#fff"
                  >
                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                  </svg>
                  Show mobile number
                  {clicked && <Signin/> }
                </button>
                
                <button onClick={handleClicked} className=" gap-1  py-2 rounded-sm font-medium bt flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#002f34"><path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
                Chat
                </button>
              </div>
            </div>
            <div className="r2">
            <div className="border flex flex-col gap-4 justify-start p-2 px-4 items-start rounded-md ">
              <h2 className="text-2xl font-semibold  typo">Location</h2>
              <p className="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#002f34"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>Nazimabad, karahi</p>
            </div>
            <div className="flex items-center justify-between mt-3 typo ">
              <p className="uppercase">Add Id 31213801984</p>
              <p className="flex gap-1 items-center font-medium text-sm"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#002f34"><path d="M200-80v-760h640l-80 200 80 200H280v360h-80Zm80-440h442l-48-120 48-120H280v240Zm0 0v-240 240Z"/></svg>Report this add</p>
            </div>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="bot w-full  flex flex-col mt-4 ">
      <div className="  bot1 border w-3/5 rounded-md py-5 px-3">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold typo text-3xl">{select.price}</h1>
        <p className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#002f34"><path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#002f34"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></p>
      </div>
      <div className="flex flex-col mt-5">
        <h1 className="typo font-medium">{select.label}</h1>
        <div className="flex justify-between items-center  text-sm  mt-3">

        <p className="typo font-light flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#002f34"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>Nazimabad, karachi</p>
        <p className="typo font-light items-center">{select.time}</p>
        </div>
      </div>
      </div>
      <div className="bot1 border w-3/5 rounded-md py-5 px-3 mt-3">
        <h1 className="typo font-semibold text-2xl">Details</h1>
        <div>
          <div className="first">
            <div className="first-t ">
              <div className="flex justify-evenly gap-7 mt-2 ">
                <div className="flex whitesmoke flex-1 py-1 justify-between "><span className=" px-2 flex-1 capitalize text-gray-500"><p>condition</p></span><span className="justify-start flex flex-1 font-medium typo text-md"><p>Used</p></span></div>
                <div className="flex whitesmoke flex-1 py-1 justify-between "><span className=" px-2 flex-1 capitalize text-gray-500"><p>brand</p></span><span className="justify-start flex flex-1 font-medium typo text-md"><p>Famouse</p></span></div>
              </div>
            </div>
            
          </div>
          <div className="first">
            <div className="first-t ">
              <div className="flex justify-evenly gap-7 mt-3 ">
                <div className="flex  flex-1 py-1 justify-between "><span className=" px-2 flex-1 capitalize text-gray-500"><p>Model</p></span><span className="justify-start flex flex-1 font-medium typo text-md"><p>Samsung</p></span></div>
                <div className="flex  flex-1 py-1 justify-between "><span className=" px-2 flex-1 capitalize text-gray-500"><p>oS</p></span><span className="justify-start flex flex-1 font-medium typo text-md"><p>Android</p></span></div>
              </div>
            </div>
            
          </div>
        </div>
      
      </div>
      <div className="description border w-3/5 rounded-md py-5 px-3 mt-3">
          <h1 className="typo font-semibold text-2xl">Description</h1>
          <div>
           <p className="text-gray-600 text-sm">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita, modi neque aliquam amet error sunt accusamus minima pariatur perspiciatis. Doloribus ipsam dolores dolorem maiores ipsum, pariatur illum. Quisquam, asperiores. Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam provident itaque hic? Deleniti sint culpa distinctio, sequi repellendus, nihil facilis quos numquam consectetur cum quibusdam a, explicabo officiis iure velit?
            </p> 
          </div>
        </div>
        <div className="border-t w-3/5 mt-3 py-5 px-3">
          <h1 className="typo font-semibold text-2xl">Related Ads</h1>
          <div className="related flex gap-1 flex-wrap ">
        { relate.map(cur => ( 
        <Card key={cur.label} onClick={() => handle(cur)}
        style={{ width: "15rem", height: "19rem" }}
        className=" border cursor-pointer cardt rounded  border-gray-200"
        >
        <Card.Img
          className="object-cover h-20  card p-0 rounded"
          variant="top"
          style={{ height: "10rem" }}
          src={cur.img}
        />
        <Card.Body className="p-3">
          <Card.Title className="flex justify-between">
            <h1 className="font-medium text-lg">{cur.price}</h1>
            <img src={heart} alt="" />
          </Card.Title>
          <Card.Text className="mt-2 gap-3 flex justify-start">
            <div className="gap-3 flex flex-col">
              <p className="font-sm">{cur.label}</p>
              <div className="flex flex-col items-start ">
                <p className="text-sm text-gray-500">
                {cur.location}
                </p>
                <p className="text-sm text-gray-500">{cur.time}</p>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>

        ))
      }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
