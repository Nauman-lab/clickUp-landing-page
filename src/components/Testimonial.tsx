import React from "react";

const Testimonial = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
      {/* Top Section with Title and Description */}
      <div className="container max-w-[600px] mx-auto mt-[40px] lg:mt[200px] mb-[40px] lg:mb[200px]">
        <h1 className="text-[32px] sm:text-[36px] md:text-[41px] font-black text-center leading-tight sm:leading-normal">
          Perfect fit for every team
        </h1>
        <p className="text-center text-customGray font-medium text-[16px] sm:text-[18px] md:text-[19px] max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mt-2 sm:mt-3">
          <strong> Get started fast with out-of-the-box solutions.</strong><br/>
          Easily customize ClickUp as team needs grow!
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
