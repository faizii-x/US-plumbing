import Third from "../../public/png/third.png";


function TextAbout() {
  return (
    <>
      <section className="container mx-auto">
        <h3 className="text-[36px] font-Roboto font-semibold">
          OUR <span className="text-customBlue-light">SKILLED STAFF</span> ARE
          AT YOUR SERVICE
        </h3>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-6">
          <div className="col-span-2">
            <p className="text-[#545454] font-Roboto text-[16px] mb-2">
              A plumbing team works quickly by starting with clear communication
              and thorough planning. They assess the problem or project to
              understand the layout and potential challenges, then plan the
              necessary steps, gathering all materials and tools in advance to
              prevent delays. Effective teamwork plays a crucial role, with
              tasks divided among team members based on their expertise and
              coordinated to ensure different tasks are completed simultaneously
              when possible.
            </p>
            <h4 className="text-black font-Roboto text-[28px] mb-2">THE BEST IN LEAK DETECTION TECHNOLOGY</h4>
            <p className="text-[#545454] font-Roboto text-[16px]">
              Our team uses top leak detection technology, including acoustic
              detectors to listen for leaks, thermal imaging cameras to spot
              hidden water seepage, pipe inspection cameras for real-time
              visuals inside pipes, electronic sensors to detect moisture, and
              tracer gas detection for precise leak location. These advanced
              tools allow us to quickly and accurately identify leaks, ensuring
              efficient and effective repairs.{" "}
            </p>
          </div>
          <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto self-center">
            <img src={Third} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default TextAbout;
