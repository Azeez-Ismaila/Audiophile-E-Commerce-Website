import XX99 from "../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import image1 from "../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg";
import image2 from "../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import image3 from "../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";
import tinyImage1 from "../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import tinyImage2 from "../assets/shared/mobile/image-xx59-headphones.jpg";
import tinyImage3 from "../assets/shared/mobile/image-zx9-speaker.jpg";

const MarkTwoHeadphone = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-left w-10/12 m-auto ">
        <div className="py-8">
          <img src={XX99} alt="" className="w-full m-auto rounded-md" />
        </div>
        <div>
          <h2 className="font-bold text-xl text-primary tracking-widest py-3">
            NEW PRODUCT
          </h2>
          <h1 className="text-3xl  font-bold">XX99 MARK II HEADPHONES</h1>
          <p className=" text-gray-400 py-4">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <span className="font-bold">$ 2,999</span>
          <div className="flex justify-start gap-3 py-4">
            <div className="bg-offwhite w-28 flex justify-around items-center">
              <button className="">-</button>
              <span>1</span>
              <button className="">+</button>
            </div>
            <button className="bg-primary py-3 px-6 ">ADD TO CART</button>
          </div>
        </div>
        {/* Features in the box section */}
        <div className="pt-14">
          <div>
            <h1 className="font-bold text-2xl">FEATURES</h1>
            <p className=" text-gray-400 py-4">
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you’re taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you’ll never miss a beat.
            </p>
            <p className=" text-gray-400 py-4">
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
            </p>
          </div>
          <div className="my-16">
            <h1 className="font-bold text-2xl pb-6">IN THE BOX</h1>
            <ul className=" text-sm">
              <li>
                <span className="text-primary">1x</span>{" "}
                <span className=" px-5 text-gray-400">Headphone Unit</span>
              </li>
              <li>
                <span className="text-primary">2x</span>{" "}
                <span className="px-5 text-gray-400">Replacement Earcups</span>
              </li>
              <li>
                <span className="text-primary">1x</span>{" "}
                <span className="px-5 text-gray-400">User Manual</span>
              </li>
              <li>
                <span className="text-primary">1x</span>{" "}
                <span className="px-5 text-gray-400">3.5mm 5m Audio Cable</span>
              </li>
              <li>
                <span className="text-primary">1x</span>{" "}
                <span className="px-5 text-gray-400">Travel Bag</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Features in the box ends */}
      </div>
      {/* images grid starts here */}
      <div className="w-10/12 flex flex-col justify-center items-center m-auto ">
        <div>
          <img src={image1} alt="" className="rounded-md my-5" />
          <img src={image2} alt="" className="rounded-md" />
        </div>
        <div>
          <img src={image3} alt="" className=" rounded-md my-5" />
        </div>
      </div>
      {/* images grid ends here */}
      <div className="w-10/12 flex flex-col justify-center items-center m-auto mt-24 ">
        <h1 className="font-bold text-3xl">YOU MAY ALSO LIKE</h1>
        <div>
          <div className="py-10 mb-3">
            <img src={tinyImage1} alt="" className="rounded-md" />
            <h1 className="py-6 font-bold text-3xl">XX99 MARK I</h1>
            <button className="bg-primary py-4 px-8">SEE PRODUCT</button>
          </div>
          <div className="py-10  mb-3">
            <img src={tinyImage2} alt="" className="rounded-md" />
            <h1 className="py-6 font-bold text-3xl">XX59</h1>
            <button className="bg-primary py-3 px-8">SEE PRODUCT</button>
          </div>
          <div className="py-10 mb-3">
            <img src={tinyImage1} alt="" className="rounded-md" />
            <h1 className="py-6 font-bold text-3xl">ZX9 SPEAKER</h1>
            <button className="bg-primary py-3 px-8">SEE PRODUCT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkTwoHeadphone;
