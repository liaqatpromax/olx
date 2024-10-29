import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { stor } from "../../app/stor";
import heart from "../../assets/heart.svg";
import Dropdown from "../Dropdown";
import { useLocation, useNavigate } from "react-router-dom";
import Sort from "./Sort";

function RightComp() {
  const location = useLocation();
  const { list } = location.state || {};
  console.log(list)
  const [items, setItems] = useState([]);
  const [active, setActive] = useState("boxes");
  const [start, end] = useSelector((state) => state.product.items);
  const [product, setProducts] = useState([]);
  console.log(start, end);
  const handleClicke = (e) => {
    const attribute = e.currentTarget.getAttribute("values");
    if (attribute === "grid") {
      setActive("blocks");
    } else if (attribute === "box") {
      setActive("boxes");
    }
  };

  const handleSortChange = (options) => {
    let sortedItems = [...items]
    console.log(sortedItems)
    console.log(options)
    if (options === "Higher price") {
      console.log(options)
      sortedItems.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceB - priceA;
      })
    } else if (options === "Lower Price") {
      sortedItems.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
      })
    }
    console.log(sortedItems)
    setItems(sortedItems);
    console.log(items)
  }

  useEffect(() => {
    const filteredAndSortedItems = (list || [])
      .filter((item) => {
        const price = parseInt(item.price.replace(/[^0-9]/g, ""), 10);
        return price > start && price <= end;
      })
    setItems(filteredAndSortedItems);
  }, [list, start, end]);
  const mobs = list
  const navigate = useNavigate()
  const handleClick = (mob) =>{
    navigate('/details/' + mob.label , {state:{mobs,mob}})
  }

  
  return (
    <div className=" w-full  flex flex-col">
      <div className="topnav flex  border-b border-gray-300   pt-3 wid">
        <ul className="flex gap-3 items-center justify-end w-full border-r-2 py-1 px-3 uppercase">
          <li className="typo text-sm font-semibold curs">View</li>
          <li>
            <svg
              className={`${
                active === "blocks" ? "custom" : "cusm1"
              } ic rounded-full p-1 ease-in cursor-pointer`}
              onClick={handleClicke}
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 -960 960 960"
              width="32px"
              fill="#002f34"
              values="grid"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </li>
          <li>
            <svg
              onClick={handleClicke}
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              className={`${
                active === "boxes" ? "custom" : "custom1"
              } rounded-full ic p-1 ease-in cursor-pointer`}
              viewBox="0 -960 960 960"
              width="32px"
              fill="#002f34"
              values="box"
            >
              <path d="M666-440 440-666l226-226 226 226-226 226Zm-546-80v-320h320v320H120Zm400 400v-320h320v320H520Zm-400 0v-320h320v320H120Zm80-480h160v-160H200v160Zm467 48 113-113-113-113-113 113 113 113Zm-67 352h160v-160H600v160Zm-400 0h160v-160H200v160Zm160-400Zm194-65ZM360-360Zm240 0Z" />
            </svg>
          </li>
        </ul>
        <ul className="flex gap-3 items-center px-2  ">
          <li className="uppercase  typo text-sm font-semibold w-20">
            Sort by:
          </li>
          <Sort items={items} onSortChange={handleSortChange} />
        </ul>
      </div>
      <div className={`products ${active} transition-all wid `}>
        {items.map((mob) => {
          return (
            <Card
              key={mob.label}
              onClick={() => handleClick(mob)}
              className={`${
                active === "boxes"
                  ? "w-72 heig"
                  : "w-full mt-3 h-52  justify-between flex-row "
              }`}
            >
              <Card.Img
                className={`${
                  active === "boxes"
                    ? "h-52 object-cover"
                    : "w-72 object-cover object-center imgc"
                }`}
                variant="top"
                // style={{ height: "10rem" }}
                src={mob.img}
              />
              <Card.Body
                className={`${
                  active === "boxes" ? "p-1   " : "w-full flex-row"
                }`}
              >
                <Card.Title className="flex justify-between">
                  <h1 className="font-medium text-lg">{mob.price}</h1>
                  <img src={heart} alt="" />
                </Card.Title>
                <Card.Text
                  className={`${
                    active === "boxes" ? "mt-4 pb-3  bottom-5" : "w-full"
                  }`}
                >
                  <div className=" flex flex-col gap-2">
                    <p className="font-sm">{mob.label}</p>
                    <div className="flex flex-col items-start ">
                      <p className="text-sm text-gray-500">{mob.location}</p>
                      <p className="text-sm text-gray-500">{mob.time}</p>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default RightComp;
