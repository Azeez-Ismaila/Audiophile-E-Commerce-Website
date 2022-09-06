import React from "react";
import headphone from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { IoIosArrowForward } from "react-icons/io";
const ProductShop = () => {
  return (
    <div>
      <div className=" flex flex-col items-center py-20">
        <div className=" w-72 h-44 bg-offwhite rounded-lg">
          <div className=" w-48 h-3/6 m-auto transform -translate-y-1/2 scale-75 ">
            <img src={headphone} alt="" />
          </div>
          <div className="">
            <h1>Headphones</h1>
            <span className="flex items-center justify-center text-sm mt-2">
              SHOP{" "}
              <IoIosArrowForward className="mx-1 text-amber-700 text-bold" />
            </span>
          </div>
        </div>
        <div className=" w-72 h-44 bg-offwhite mt-10 rounded-lg">
          <div className=" w-48 h-3/6 m-auto transform -translate-y-1/2 scale-75 ">
            <img src={speaker} alt="" />
          </div>
          <div className="">
            <h1>Speaker</h1>
            <span className="flex items-center justify-center text-sm mt-2">
              SHOP
              <IoIosArrowForward className="mx-1 text-amber-700 text-bold" />{" "}
            </span>
          </div>
        </div>
        <div className=" w-72 h-44 bg-offwhite mt-10 rounded-lg">
          <div className=" w-48 h-3/6 m-auto transform -translate-y-1/2 scale-75 ">
            <img src={earphone} alt="" />
          </div>
          <div className="">
            <h1>Earphones</h1>
            <span className="flex items-center justify-center text-sm mt-2">
              SHOP{" "}
              <IoIosArrowForward className="mx-1 text-amber-700 text-bold" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShop;
