import React, { useState } from "react";
import searchLogo from "../assets/search.svg";
import mb from "../assets/mb-1.webp";
import heart from "../assets/heart.svg";
import mb2 from "../assets/mb-2.webp";
import mb3 from "../assets/mb-3.webp";
import mb4 from "../assets/mb-4.webp";
import car1 from "../assets/car-1.webp";
import car2 from "../assets/car-2.webp";
import car3 from "../assets/car-3.webp";
import car4 from "../assets/car-4.webp";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  const data = [
    {
      img: car1,
      label: "Honda City",
      location: "Chowrangi town, Karachi",
      price: "Rs. 23,00,000",
      time: "1 month ago",
    },
    {
      img: car2,
      label: "WaganR",
      location: "Chobarji town, Hyderabad",
      price: "Rs. 23,69,000",
      time: "3 weeks ago",
    },
    {
      img: car3,
      label: "Toyota Prius",
      location: "Gulberg, Karachi",
      price: "89,00,000",
      time: "1 day ago",
    },
    {
      img: car4,
      label: "Honda Civic",
      location: "IBA, Sukhurabad",
      price: "Rs. 63,00,000",
      time: "1 hour ago",
    },
    {
      label: "Samsung galaxy s21 ",
      img: mb,
      price: "Rs 95,000",
      location: "Sarfaraz Colony, Karachi",
      time: "1 week ago",
    },
    {
      label: "Vivo s1 pro",
      img: mb2,
      price: "Rs 32,000",
      location: "Layari, Karachi",
      time: "3 week ago",
    },
    {
      label: "google pixel 7pro",
      img: mb3,
      price: "Rs 68,000",
      location: "Machar Colony, Karachi",
      time: "3 days ago",
    },
    {
      label: "Oneplus 10 pro",
      img: mb4,
      price: "Rs 92,000",
      location: "chorangi town, Karachi",
      time: "2 week ago",
    },
  ];
  const [searches, setSearches] = useState([]);
  const [query, setQuery] = useState('')
  const handleChange = (e) => {
    setQuery (e.target.value.toLowerCase());
    console.log(query);
    
    const searchLabel = [...data];
    console.log(searchLabel);
    const searched = searchLabel.filter((item) =>
      item.label.toLowerCase().includes(query)
    );
    setSearches(searched);
    console.log(searches);
  };
  const navigate = useNavigate()
  const mobs = data
  const handleCLick = (mob) =>{
    setQuery('')
    
    navigate('/details/' + mob.label , {state:{mobs,mob}})
    setSearches([])
  }
  return (
    <div className="flex items-center search p-0">
      <input
        placeholder=" Find Cars, Mobile Phones and more..."
        type="text"
        value={query}
        onChange={handleChange}
        className="focus:border-blue-200 border rounded   search border-gray-200  px-3 outline-none"
      />
      {query && (
        <div className="bg-white rounded-lg shadow-xl  absolute w-2/6 p-2  searchsuggestion">
          {searches.map((item) => {
            return (
              <div className="flex border-b gap-2 mb-2 h-16 hv " onClick={()=>handleCLick(item)}>
                <div className="right flex gap-1 flex-1">

                <div className="h-12 w-14">
                  <img src={item.img} alt="" className="h-16 rounded-sm spic" />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-medium">{item.label}</h1>
                  <h6>{item.price}</h6>
                </div>
                </div>
                <div className="flex justify-end  items-end pb-2  locs ">
                    <h6 className="text-sm font-light">{item.location}</h6>
                  </div>
              </div>
            );
          })}
        </div>
      )}
      <button className="bg-darkslategray border-black  ">
        <img src={searchLogo} alt="" />
      </button>
    </div>
  );
}

export default SearchBar;
