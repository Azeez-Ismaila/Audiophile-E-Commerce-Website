import React from "react";

const Homepage = () => {
  return (
    <div>
      <div className="bg-image1 bg-no-repeat bg-cover bg-bottom flex flex-col justify-between items-center text-white  h-auto py-40 px-6">
        <h2 className=" text-lg">NEW PRODUCT</h2>
        <h1 className=" text-4xl font-bold py-4">XX99 MARK II HEADPHONES</h1>
        <p className=" mb-4">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast
        </p>
        <button className="bg-primary py-3 px-8">SEE PRODUCT</button>
      </div>
      {/* Mainpage ends here */}
      {/* Products Start Here */}
    </div>
  );
};

export default Homepage;
