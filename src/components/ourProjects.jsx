import { useState } from "react";
import customTabs from "../data";

function OurProjects() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log(selectedIndex);

  return (
    <>
      <h2 className="text-[48px] font-Roboto font-semibold text-black text-center mb-6">
        Our Projects
      </h2>
      <div className="flex justify-center sm:gap-16 gap-8 mb-8">
        {customTabs.map((x, index) => (
          <>
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`text-[20px] font-Roboto font-normal text-center ${
                selectedIndex === index ? "text-customBlue-light" : "text-black"
              }`}
            >
              {x.heading}
            </button>
          </>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 container mx-auto mb-[71px]">
        {customTabs[selectedIndex]?.img?.map((imgSrc, i) => (
          <>
            <img key={i} src={imgSrc} alt="" className="w-full" />
          </>
        ))}
      </div>
    </>
  );
}

export default OurProjects;
