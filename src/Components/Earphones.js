import YX1 from "../assets/product-yx1-earphones/mobile/image-product.jpg";
const Earphones = () => {
  return (
    <div>
      <div className="pb-14">
        <div className="bg-black p-8 text-white text-3xl font-bold">
          <h1>EARPHONES</h1>
        </div>
        {/* First Earphones */}
        <div className="flex flex-col justify-center items-center ">
          <div className="py-8">
            <img src={YX1} alt="" className="w-4/5 m-auto" />
          </div>
          <div>
            <h2 className="font-bold text-xl text-primary tracking-widest py-4">
              NEW PRODUCT
            </h2>
            <h1 className="text-3xl px-2 font-bold">YX1 WIRELESS EARPHONES</h1>
            <p className="p-6 text-gray-400">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <button className="bg-primary py-3 px-8">SEE PRODUCT</button>
          </div>
        </div>
        {/* First Earphones*/}
      </div>
    </div>
  );
};

export default Earphones;
