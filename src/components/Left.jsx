import React, { useState } from "react";
import btnLogo from "../assets/btn.svg";
import plusLogo from "../assets/plus.svg";
import Signin from "./Signin";
import { useSelector, useDispatch } from "react-redux";
import { show } from "../Features/SignSlice";

function Left() {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.auth);

  const handleClick = () => {
    console.log(isOpen);
    dispatch(show());
  };
  return (
    <div className="flex items-center  w-40">
      <button onClick={handleClick} className="font-medium underline hover:no-underline">
        Login
      </button>
      <div className="flex items-center">
        <img className="relative left-5" src={btnLogo} alt="" />
        <button
          onClick={handleClick}
          className="flex name items-center font-medium"
        > <img src={plusLogo} alt="" /> Sell
        </button>
        {isOpen && <Signin />}
      </div>
    </div>
  );
}

export default Left;
