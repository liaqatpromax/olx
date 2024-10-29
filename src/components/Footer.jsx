import React from "react";
import olxFooter from "../assets/footer.webp";
import app from "../assets/App.svg";
import play from "../assets/play.svg";
import huawei from "../assets/hua.svg";
import twitter from "../assets/twitter.svg"
import yt from "../assets/yt.svg"
import fb from "../assets/fb.svg"
import intsa from '../assets/insta.svg'
function Footer() {
  return (
    <>
      <div className="w-full fot px-5 mt-20  flex items-center">
        <div className="img basis-1/3">
          <img className="h-46" src={olxFooter} alt="" />
        </div>
        <div className="midd basis-1/3 flex flex-col justify-center gap-6  px-2">
          <h2 className="uppercase font-bold text-3xl">try the olx app</h2>
          <p className="capitalize text-lg">
            buy, sell and find just about anything using the app on your mobile
          </p>
        </div>
        <div className="border-r-2 h-36 border-gray-300"></div>
        <div className="capitalize gap-2 flex basis-1/3 flex-col justify-center pl-9  px-4 ">
          <h2 className="font-semibold hd">get your own app</h2>
          <div className="logo flex gap-2 ">
            <img src={app} alt="" />
            <img src={play} alt="" />
            <img src={huawei} alt="" />
          </div>
        </div>
      </div>
      <footer className="w-full flex flex-col border-t justify-between h-62 fr border-gray-300 p-0">
        <div className="top flex gap-16 items-center px-6 py-9">
          <div className="first flex flex-col gap-3 basis-1/5 uppercase ">
            <h1 className="font-semibold text-sm hd">Popular Catogries</h1>
            <div className=" text-gray-500 flex flex-col capitalize gap-2 font-xs font-light text-xs">
              <h3 className="text-xs">cars</h3>
              <h3  className="text-xs">flats for rent</h3>
              <h3  className="text-xs">Mobile phones</h3>
              <h3  className="text-xs">jobs</h3>
            </div>
          </div>
          <div className="first flex flex-col  gap-3 basis-1/5">
            <h1 className="font-semibold text-sm uppercase hd">
              trending searches
            </h1>
            <div className="flex text-gray-500 flex-col capitalize gap-2 font-light text-xs">
              <h3  className="text-xs">bikes</h3>
              <h3  className="text-xs">watches</h3>
              <h3  className="text-xs"> books</h3>
              <h3  className="text-xs">dog</h3>
            </div>
          </div>
          <div className="basis-1/5 first flex flex-col  gap-3">
            <h1 className="font-semibold text-sm uppercase hd">about us</h1>
            <div className="flex text-gray-500 flex-col capitalize gap-2 font-light text-xs">
              <h3  className="text-xs">about dubbizzle group</h3>
              <h3  className="text-xs">OLX blog</h3>
              <h3  className="text-xs">contact us</h3>
              <h3  className="text-xs">OLX for business</h3>
            </div>
          </div>
          <div className="basis-1/5 first flex flex-col  gap-3">
            <h1 className="font-semibold text-sm uppercase hd">olx</h1>
            <div className="flex text-gray-500 flex-col capitalize gap-2 font-light text-xs">
              <h3  className="text-xs">help</h3>
              <h3  className="text-xs">sitemap</h3>
              <h3  className="text-xs">terms of use</h3>
              <h3  className="text-xs">privacy policy</h3>
            </div>
          </div>
          <div className="basis-1/2 first gap-9 flex flex-col pl-6  ">
            <div className="flex flex-col ">
            <h1 className="font-semibold text-sm uppercase hd pl-1">Follow us </h1>
            <div className="flex mt-0 gap-1">
              <img src={twitter} alt="" />
              <img src={fb} alt="" />
              <img src={yt} alt="" />
              <img src={intsa} alt="" />
            </div>
            </div>
           
            <div className="flex text-gray-500  capitalize gap-2 font-light text-xs">
              <img src={app} alt="" />
            <img src={play} alt="" />
            <img src={huawei} alt="" />
            </div>
          </div>
        </div>
        <div className="bottom flex text-xs justify-end p-4 w-full text-white">
          <h6 className="capitalize font-semibold ">free classified ads in pakistan</h6>
          <p>. &copy;2006-2024 OLX</p>
        </div>
      </footer>
     
    </>
  );
}

export default Footer;
