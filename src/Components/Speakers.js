import ZX9 from "../assets/product-zx9-speaker/mobile/image-product.jpg";
import ZX7 from "../assets/product-zx7-speaker/mobile/image-product.jpg";
const Speakers = () => {
  return (
    <div>
      <div className="pb-8">
        <div className="bg-black p-10 text-white text-3xl font-bold">
          <h1>SPEAKERS</h1>
        </div>
        {/* First Speaker */}
        <div className="flex flex-col justify-center items-center ">
          <div className="py-8">
            <img src={ZX9} alt="" className="w-4/5 m-auto" />
          </div>
          <div>
            <h2 className="font-bold text-xl text-primary tracking-widest">
              NEW PRODUCT
            </h2>
            <h1 className="text-3xl px-2 font-bold">ZX9 SPEAKER</h1>
            <p className="p-6 text-gray-400">
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <button className="bg-primary py-3 px-8">SEE PRODUCT</button>
          </div>
        </div>
        {/* First Speaker End*/}
        {/* Second Speaker */}
        <div className="flex flex-col justify-center items-center ">
          <div className="py-8">
            <img src={ZX7} alt="" className="w-4/5 m-auto" />
          </div>
          <div>
            <h2 className="font-bold text-primary text-xl tracking-widest">
              NEW PRODUCT
            </h2>
            <h1 className="text-3xl px-2 font-bold">ZX7 SPEAKER</h1>
            <p className="p-6 text-gray-400">
              Stream high quality sound wirelessly with minimal to no loss. The
              ZX7 speaker uses high-end audiophile components that represents
              the top of the line powered speakers for home or studio use.
            </p>
            <button className="bg-primary py-3 px-8">SEE PRODUCT</button>
          </div>
        </div>
        {/* Second Speaker End*/}
      </div>
    </div>
  );
};

export default Speakers;
