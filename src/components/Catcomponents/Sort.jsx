import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { catOpen } from "../../Features/CatogrySlice";
function Sort({onSortChange,className="",list}) {
const [isOpen, setIsOpen] = useState(false);

const [selected, setSelected] = useState("Newly Listed");
const check = (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#002f34"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
);
const options = [
   'Newly Listed', 'Relevent Items', 'Higher price', 'Lower Price'
];
const [active,setActive] = useState(null)
const [isRotated, setisRotated] = useState(false);
const dispatch = useDispatch()
const handleClick = (options) => {
    setSelected(options);
    setActive(options)
    setisRotated(!isRotated);
    setIsOpen(false);
    if(onSortChange){
     onSortChange(options)
    }
    
};
useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
    document.removeEventListener("click", closeDropdown);
    };
}, []);
const dropdown = useRef(null);
const closeDropdown = (event) => {
    const dropEl = document.getElementById("dropdown");
    if (dropdown.current && !dropdown.current.contains(event.target)) {
    setIsOpen(false);
    }
};

const arrow = (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    height="27px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="#5f6368"
    style={{
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", // Apply rotation based on state
        transition: "transform 0.3s ease", // Smooth transition
    }}
    >
    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
);

return (
    <div
    ref={dropdown}
    className='cursor-pointer'

    onClick={() => {
        setIsOpen(!isOpen);
        setisRotated(!isRotated);
    }}
    >
    <div className={` rounded pr-5   flex items-center justify-between drop ${className}`}>
        <span className="flex items-center  w-24 text-sm gap-3">
        {" "}
        {selected}{" "}
        </span>{" "}
        <span>{arrow}</span>
    </div>
    {isOpen && (
        <div id="dropdown" className="bg-white shadow-xl absolute zi right-9 ">
        {options.map((item) => {
            return (
            <div
                className="  border-gray-300  w-48 px-3 py-3 flex  justify-start items-center gap-3 hover:bg-green-200 rounded cursor-pointer duration-300 text-sm" 
                key={item}
                onClick={() => handleClick(item)}
            >
              <span className={` ${active === item ?'checked' : 'notchecked'}`} >{check}</span> {item}
            </div>
            );
        })}
        </div>
    )}
    </div>
);
}

export default Sort;
