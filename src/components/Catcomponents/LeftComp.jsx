import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import ReactSlider from "react-slider";
import { useDispatch } from "react-redux";
import { addItem } from "../../Features/ProductSlice";

function LeftComp() {
  const [priceRange, setPriceRange] = useState([0,10000000]);
  const [leftValue, setLeftValue] = useState(0);
  const [rightValue, setRightValue] = useState(10000000);
  const[right,setRight] = useState(0)
  const[left,setLeft] = useState(0)
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (priceRange[0] >= 10000) {
      const inp = (priceRange[0] / 1000).toFixed(2)
      setLeft(inp)
      setLeftValue(`PKR ${inp} Thousand`);
    } else {
      setLeft(priceRange[0])
      setLeftValue(`PKR ${priceRange[0]}`);
    }

    if (priceRange[1] >= 10000) {
        const inp = (priceRange[1] / 1000).toFixed(2)
        setRight(inp)
      setRightValue(`PKR ${inp} Thousand`);
    } else {
      setRight(priceRange[1])
      setRightValue(`PKR ${priceRange[1]}`);
    }
    
    dispatch(addItem(priceRange));
  }, [priceRange,dispatch]);
  const handleChange = (e) => {
    const val = Number(e.target.value);
      // const realVal = Number("1" + "0".repeat(val.length-2))
     setPriceRange([val,priceRange[1]])
  }

  const handleChanges = (e) => {
    const val = Number(e.target.value);
      // const realVal = Number("1" + "0".repeat(val.length-2))
     setPriceRange([priceRange[0],val])
  };
  const handleChanged = (values) => {

    setPriceRange(values);
    console.log(values[0],values[1],leftValue,rightValue)
    
  };
  return (
    <>
      <div className="w-11/12 m-auto  ">
        <div className="flex items-center gap-2 py-3 pb-4 ">
          <h1 className="text-xl font-semibold typo">Mobile Phones</h1>
          <p className="p-1 custom typo rounded text-sm font-medium">
            10,000+ ads
          </p>
        </div>
        <div className="bg-gray-100  rounded py-1">
          <div className="px-3 py-2">
            <h4 className="capitalize font-medium ">catogries</h4>
            <ul className="mt-3 px-0">
              <li className="font-light text-sm text-gray-600">
                All catogries
                <ul className="  mt-2">
                  <li className="font-medium text-black">
                    Mobiles
                    <ul className="font-light text text-gray-500 capitalize">
                      <li className="mt-1 cursor-pointer hover:underline">
                        mobile phones(10000)
                      </li>
                      <li className="mt-1  cursor-pointer hover:underline">
                        accessories(10000)
                      </li>
                      <li className="mt-1  cursor-pointer hover:underline">
                        smartwatches(10000)
                      </li>
                      <li className="mt-1 cursor-pointer hover:underline">
                        tablets(10000)
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="location py-2 border mt-4 ">
          <h3 className="typo font-medium mb-2 px-3 py-1">Location</h3>
          <div className="flex justify-center w-full ">
            <Dropdown className="widthdrop" />
          </div>
          <div className="typo font-medium mb-2 px-3 pt-4">
            <h3>Pakistan</h3>
            <ul className="ml-1 font-light text text-gray-500 capitalize ">
              <li className="mt-1 cursor-pointer hover:underline">
                Punjab(123424)
              </li>
              <li className="mt-1  cursor-pointer hover:underline">
                Sindh(52424)
              </li>
              <li className="mt-1  cursor-pointer hover:underline">
                Islamabad Capital Territory(25523)
              </li>
              <li className="mt-1 cursor-pointer hover:underline">
                Khyber Pakhtun Khuwah(46746)
              </li>
              <li className="mt-1 cursor-pointer hover:underline">
                Balochistan(134334)
              </li>
              <li className="mt-1  cursor-pointer hover:underline">
                Azad Kashmir(2344)
              </li>
              <li className="mt-1  cursor-pointer hover:underline">
                Northern Areas(4643)
              </li>
            </ul>
          </div>
        </div>
        <div className="border mt-4 py-2 px-3">
          <h3 className="capitalize font-medium typo">Price</h3>
          <div className="inp flex items-center justify-center  pt-2 pb-0 gap-4">
            <div className="starting flex h-14 flex-col">
              <input
                value={left}
                type="text"
                onChange={(e) => handleChange(e)}
                className="first w-32 p-2 bg-gray-100 border-b focus:border-b focus:border-green-300 outline-0 transition ease-in border-black"
              />
              <p className="text-xs text-gray-700">{leftValue}</p>
            </div>
            <div className="ending flex flex-col h-14   items-center">
              <input
                value={right}
                type="text"
                onChange={(e) => handleChanges(e)}
                className="second w-32 p-2 bg-gray-100 border-b focus:border-b focus:border-green-300 outline-0 transition ease-in border-black"
              />
              <p className="text-xs text-gray-700">{rightValue}</p>
            </div>
          </div>
          <div className="mt-4 h-10 app-container">
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              defaultValue={[0, 10000000]}
              min={0}
              onChange={handleChanged}
              max={10000000}
              // ariaLabel={['Lower thumb', 'Upper thumb']}
              // ariaValuetext={state => `Thumb value ${state.valueNow}`}
              // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
              pearling
              minDistance={10}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftComp;
