import { Link } from "react-router-dom";

function Emergency() {
  return (
    <>
      <h4 className="text-[42px] font-Roboto font-normal container mx-auto leading-[50px] mb-4">
        Emergency Plumbing Services, Residential & Commercial Plumbing Services
      </h4>
      <section className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-6 container mx-auto">
        <div className="col-span-2">
          <p className="text-customBlue-para text-[18px] mb-8">
            A1 Plumbing Emergency Service offers 24/7 rapid response for urgent
            plumbing issues, providing quick, efficient repairs for both
            residential and commercial properties.The service emphasizes
            customer satisfaction, offering transparent pricing, and reliable
            solutions to meet immediate plumbing needs.
          </p>
          <Link
            to="/"
            className="bg-white border border-customBlue-light text-customBlue-light text-[20px] p-3 hover:bg-customBlue-light hover:text-white"
          >
            View Our Services
          </Link>

          <h5 className="text-[42px] font-Roboto font-normal  leading-[50px] mb-5 mt-8">
            Full Range of Plumbing Service
          </h5>
          <p className="text-customBlue-para text-[18px] mb-12">
            A full range of{" "}
            <span className="text-customBlue-light">A1 plumbing services</span>{" "}
            includes the installation, repair, and maintenance of all plumbing
            systems, from pipes and fixtures to water heaters and appliances. It
            covers essential tasks like drain cleaning, sewer line repair, and
            water treatment to ensure smooth water flow and clean, safe water.
            <br />
            Emergency plumbing services are available 24/7 for urgent issues,
            while specialized services like backflow prevention and gas line
            maintenance provide added safety and efficiency. These comprehensive
            offerings ensure the reliable operation of plumbing systems in both
            residential and commercial properties.
          </p>
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto mb-8">
          <div className="w-full h-auto bg-cover bg-center imagebgg1">
            <div className="p-6">
              <h5 className="text-[24px] mb-3 font-Roboto font-medium text-white text-center">
                Schedule your Servivce
              </h5>

              <input
                type="text"
                placeholder="Name"
                className="bg-white pl-2 w-full p-3 mb-3"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-white pl-2 w-full p-3 mb-3"
              />
              <input
                type="text"
                placeholder="Email"
                className="bg-white pl-2 w-full p-3 mb-3"
              />

              <textarea
                className="resize-none pl-2 mb-6 w-full pt-3"
                placeholder="Enter your message here.."
                rows="6"
                cols="50"
                maxLength="200"
                disabled={false}
                readOnly={false}
                autoFocus={false}
                name="message"
                wrap="soft"
              />

              <Link
                to="/"
                className="mb-4 bg-white border border-customBlue-light text-customBlue-light p-3 hover:bg-customBlue-light hover:text-white"
              >
                SUBMIT
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Emergency;
