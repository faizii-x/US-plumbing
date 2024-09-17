import Imgg from "../../public/png/click.png";
import Tabs from "./tabs";

function SecondAbout() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto mt-8 mb-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto">
          <img src={Imgg} alt="" className=""/>
        </div>
        <div className="col-span-2">
          <p className="text-[22px] font-medium font-Roboto">
          WE BRING TOGETHER A1 PLUMBING PROFESSIONALS FOR TOP-QUALITY WORK.
          </p>

          <h3 className="text-[28px] font-poppins font-bold">
            A STRONG BACKGROUND IN{" "}
            <span className="text-customBlue-light">
              A1 PLUMBING SERVICES
            </span>
          </h3>

          <Tabs />
        </div>
      </section>
    </>
  );
}

export default SecondAbout;
