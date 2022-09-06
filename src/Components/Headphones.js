import XX99 from "../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import XX59 from "../assets/product-xx59-headphones/mobile/image-product.jpg";
import XX991 from "../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";

const Headphones = () => {
  return (
    <div className="pb-8">
      <div className="bg-black p-8 text-white text-3xl font-bold">
        <h1>HEADPHONES</h1>
      </div>
      {/* First Headphone */}
      <div className="flex flex-col justify-center items-center ">
        <div className="py-8">
          <img src={XX99} alt="" className="w-4/5 m-auto" />
        </div>
        <div>
          <h2 className="font-bold text-xl text-primary tracking-widest">
            NEW PRODUCT
          </h2>
          <h1 className="text-3xl px-2 font-bold">XX99 MARK II HEADPHONES</h1>
          <p className="p-6 text-gray-400">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <button className="bg-primary py-3 px-8">SEE PRODUCT</button>
        </div>
      </div>
      {/* First Headphone End*/}
      {/* Second Headphone */}
      <div className="flex flex-col justify-center items-center ">
        <div className="py-8">
          <img src={XX59} alt="" className="w-4/5 m-auto" />
        </div>
        <div>
          <h2 className="font-bold text-primary">NEW PRODUCT</h2>
          <h1 className="text-3xl px-2 font-bold">XX59 HEADPHONES</h1>
          <p className="p-6 text-gray-400">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <button className="bg-primary py-3 px-8">SEE PRODUCT</button>
        </div>
      </div>
      {/* Second Headphone End*/}
      {/* Third Headphones */}
      <div className="flex flex-col justify-center items-center ">
        <div className="py-8">
          <img src={XX991} alt="" className="w-4/5 m-auto" />
        </div>
        <div>
          <h2 className="font-bold text-primary">NEW PRODUCT</h2>
          <h1 className="text-3xl px-2 font-bold">XX99 MARK I HEADPHONES</h1>
          <p className="p-6 text-gray-400">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <button className="bg-primary py-3 px-8">SEE PRODUCT</button>
        </div>
      </div>
      {/* Third Headphones End */}
    </div>
  );
};

export default Headphones;
