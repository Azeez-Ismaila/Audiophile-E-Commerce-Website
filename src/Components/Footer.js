import guyWithHeadset from "../assets/shared/mobile/image-best-gear.jpg";
import logo from "../assets/shared/desktop/logo.svg";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import { MdFacebook } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* First Div Start */}
      <div className="pt-12">
        <div className="py-10 overflow-hidden">
          <img
            src={guyWithHeadset}
            alt=""
            className="w-4/5 m-auto rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            BRINGING YOU THE <br />
            <span className="text-primary">BEST</span> AUDIO GEAR
          </h1>
          <p className="p-12">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
      {/* First Div End */}
      {/* Second Div Start */}
      <div className="bg-black flex flex-col text-white border-t-primary border-t-4">
        <div>
          <img src={logo} alt="" className="m-auto py-10" />
          <ul className="">
            <li className="py-1">HOME</li>
            <li className="py-1">HEADPHONES</li>
            <li className="py-1">SPEAKERS</li>
            <li className="py-1">EARPHONES</li>
          </ul>
        </div>
        <div>
          <p className="p-12">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div>
          {" "}
          {/* Real Footer */}
          <div className="pb-4">Copyright 2021. All Rights Reserved</div>
          <div className="flex items-center justify-center gap-4 py-10">
            <MdFacebook size={30} />
            <FiTwitter size={30} />
            <AiOutlineInstagram size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
