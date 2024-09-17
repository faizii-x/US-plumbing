function ContactBody() {
  return (
    <>
      <h2 className="text-[32px] font-Roboto font-medium container mx-auto mt-16 mb-4">
        Contact Information
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 container mx-auto">
        <div className="col-span-2">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 mb-12">
            <div className="">
              <h3 className="text-[22px] font-Roboto font-semibold text-[#8C8C8C] mb-2">
                Office hours
              </h3>
              <p className="text-[20px] font-Roboto font-normal text-[#8C8C8C] mb-3">
                Monday to Saturday
              </p>
              <p className="text-[20px] font-Roboto font-normal text-[#8C8C8C]">
                8:30am to 5pm
              </p>
            </div>
            <div className="">
              <h3 className="text-[22px] font-Roboto font-semibold text-[#8C8C8C] mb-2">
                Plumbing
              </h3>
              <p className="text-[18px] font-Roboto font-normal text-[#8C8C8C]">
                50 West End Avenue Suite7A New York, NY 50025, USA.
              </p>
            </div>
            <div className="">
              <h3 className="text-[22px] font-Roboto font-semibold text-[#8C8C8C] mb-2">
                Contact Number
              </h3>
              <p className="text-[20px] font-Roboto font-normal text-[#8C8C8C]">
                +1 646-552-4444
              </p>
            </div>
          </div>
          {/* ................................ */}
          <div className="flex justify-start gap-3 mb-5">
            <input
              type="text"
              placeholder="Name*"
              className="pl-2 p-3 border border-[#929090] bg-[#D8D8D8] w-[100%] "
            />
            <input
              type="text"
              placeholder="Email*"
              className="pl-2 p-3 border border-[#929090] bg-[#D8D8D8] w-[100%]"
            />
          </div>
          <div className="flex justify-start gap-3 mb-5">
            <input
              type="text"
              placeholder="Mobile Number*"
              className="pl-2 p-3 border border-[#929090] bg-[#D8D8D8] w-[100%]"
            />
            <input
              type="text"
              placeholder="Phone*"
              className="pl-2 p-3 border border-[#929090] bg-[#D8D8D8] w-[100%]"
            />
          </div>
          <div className="flex justify-start gap-3 mb-5">
            <input
              type="text"
              placeholder="Address*"
              className="pl-2 p-3 border border-[#929090] bg-[#D8D8D8] w-[100%]"
            />
            <input
              type="text"
              placeholder="City, State, Zip*"
              className="pl-2 p-3 border border-[#929090] bg-[#D8D8D8] w-[100%]"
            />
          </div>
          <textarea
            id="comments"
            className="border border-[#929090] bg-[#D8D8D8] w-[100%] resize-none pl-2 pt-2 mb-5"
            name="comments"
            rows="8"
            cols="50"
            placeholder="Enter your comments here"
          ></textarea>
          <button className="text-customBlue-light border border-customBlue-light w-[135px] h-[50px] hover:rounded-sm hover:text-white hover:bg-customBlue-light mb-8">Submit</button>
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto">
          <iframe
          className="mb-3"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7801037831123!2d74.46691217469433!3d31.47523464937236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391909eccd4c0165%3A0xe6a8099ad0ebc618!2sFairways%20Commercial%20-%20Defence%20Raya%20Golf%20and%20Country%20Club!5e0!3m2!1sen!2s!4v1726483537612!5m2!1sen!2s"
            width="300"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ContactBody;
