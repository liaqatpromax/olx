import React from "react";
import olxLogo from "../assets/OLX_green_logo.svg";
import carLogo from "../assets/car.svg";
import buildlogo from "../assets/build.svg";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import Left from "./Left";
import { useNavigate } from "react-router-dom";




function Navbar() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('')
  }
  return (
    <nav className="   p-0  relative z-10   border-gray-300   nav  ">
      <div className=" pl-9 fixed navl bg-white w-full top-0  z-0 " >
        <div className="logo items-center h-16 p-0  mt-0  flex gap-10 toplog">
          <img
            className="fill-current lg hover:fill-slate-400  w-12"
            onClick={handleClick}
            src={olxLogo}
            alt=""
          />

          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="black"
              className="lgo"
            >
              <path d="M240-200v40q0 17-11.5 28.5T200-120h-40q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h440q19 0 34.5 11t21.5 29l84 240v320q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40H240Zm-8-360h496l-42-120H274l-42 120Zm-32 80v200-200Zm100 160q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Zm-460 40h560v-200H200v200Z" />
            </svg>

            <h6 className="font-medium text-black hv">Motors</h6>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="black"
              className="lgo"
            >
              <path d="M680-600h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160v-80h160v-560H480v56l-80-58v-78h520v720H680Zm-640 0v-400l280-200 280 200v400H360v-200h-80v200H40Zm80-80h80v-200h240v200h80v-280L320-622 120-480v280Zm560-360ZM440-200v-200H200v200-200h240v200Z" />
            </svg>
            <h6
              className=" hv
                        font-medium text-black "
            >
              Properties
            </h6>
          </div>
        </div>
        <div >
         <div className="flex pb-6 p-0 flex-wrap gap-4 navb">
            <Dropdown className="defaultwidthdrop" />
            <SearchBar />
            <Left/>
         </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
