    import React, { useEffect, useRef, useState } from "react";

    function Dropdown({className=""}) {
    const [isOpen, setIsOpen] = useState(false);

    const [selected, setSelected] = useState("Pakistan");
    const loc = (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
        >
        <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
        </svg>
    );
    const options = [
        {
        label: "Use Your Current Location",
        svg: (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5277ff"
            >
            <path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80Z" />
            </svg>
        ),
        },
        { label: "Karachi", svg: loc },
        { label: "Lahore", svg: loc },
        { label: "Islamabad", svg: loc },
        { label: "Quetta", svg: loc },
    ];
    const [isRotated, setisRotated] = useState(false);
    const handleClick = (options) => {
        setSelected(options.label);
        setisRotated(!isRotated);
        setIsOpen(false);
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
        // className={className}
        onClick={() => {
            setIsOpen(!isOpen);
            setisRotated(!isRotated);
        }}
        >
        <div className={` rounded px-3 flex items-center justify-between drop ${className}`}>
            <span className="flex items-center gap-3">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
            >
                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>{" "}
            {selected}{" "}
            </span>{" "}
            <span>{arrow}</span>
        </div>
        {isOpen && (
            <div id="dropdown" className="bg-white shadow-xl absolute">
            {options.map((item) => {
                return (
                <div
                    className="  border-gray-300  w-72 px-3 py-3 flex justify-start items-center gap-3 hover:bg-green-200 rounded cursor-pointer duration-300"
                    key={item.value}
                    onClick={() => handleClick(item)}
                >
                    {item.svg && item.svg}
                    {item.label}
                </div>
                );
            })}
            </div>
        )}
        </div>
    );
    }

    export default Dropdown;
