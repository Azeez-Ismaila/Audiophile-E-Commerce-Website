import zx9Speaker from "../assets/home/mobile/image-speaker-zx9.png";
import ys1Earphone from "../assets/home/mobile/image-earphones-yx1.jpg";
const Products = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className=" w-4/5 bg-primary pb-10 ">
        <img src={zx9Speaker} alt="" className="transform scale-50" />
        <h1 className=" text-4xl font-bold relative -top-16 ">ZX9 SPEAKER</h1>
        <p className="relative -top-10">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button className="bg-black py-3 px-8">SEE PRODUCT</button>
      </div>
      <div className=" bg-zx7Speaker bg-right bg-contain bg-no-repeat mt-10 h-80 w-4/5 text-black">
        <div className=" float-left mt-28 ml-6">
          <h1 className="text-3xl font-bold">ZX7 SPEAKER</h1>
          <button className=" bg-transparent border-4 border-black py-3 px-6 mt-4 mr-10">
            SEE PRODUCT
          </button>
        </div>
      </div>
      <div className="text-black flex flex-col justify-center items-center mt-4">
        <div className="">
          <img src={ys1Earphone} alt="" className="w-4/5 m-auto rounded-xl" />
        </div>
        <div className="bg-offwhite w-4/5 mt-4 h-52 rounded-lg">
          <h1 className="text-3xl font-bold p-4">YS1 EARPHONES</h1>
          <button className=" bg-transparent border-4 border-black py-3 px-8 mt-4 mr-10">
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
