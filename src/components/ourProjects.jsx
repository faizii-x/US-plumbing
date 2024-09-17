import { useState } from "react";
import customTabs from "../data";

function OurProjects() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log(selectedIndex);

  return (
    <>
      <h2 className="text-[48px] font-Roboto font-semibold text-black text-center">
        Our Projects
      </h2>

      {customTabs.map((x, index) => (
        <>  
          <button
            onClick={() => setSelectedIndex(index)}
            className="text-[20px] font-Roboto font-semibold text-center p-8"
          >
            {x.heading}
          </button>
        </>
      ))}

      <div className="grid grid-cols-3 container mx-auto">
        {customTabs.map((a) => (
          <>
            <img src={a.img} alt="" />
          </>
        ))}
      </div>
    </>
  );
}

export default OurProjects;
