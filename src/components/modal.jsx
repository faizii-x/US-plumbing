import { useState } from "react";

function Modal({ handleClick }) {
  const [selectedFileName, setSelectedFileName] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFileName(e.target.files[0]);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [filelink, setFileLink] = useState("");
  const [Requirements, setRequirements] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [disableButton, setDisableButton] = useState(true);

  const Emailchangefunction = (e) => {
    setEmail(e.target.value);
    setDisableButton(!disableButton);
  };
  console.log(email);
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("Contact", Contact);
    formData.append("attachment", selectedFileName);
    formData.append("link", filelink);
    formData.append("Requirements", Requirements);

    try {
      const response = await fetch("https://api.quickbidestimating.com/", {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        alert("Email sent successfully");
        setEmail("");
        setName("");
        setContact("");
        setFileLink("");
        setRequirements("");
        setAttachment("");
        setSelectedFileName("");
      } else {
        alert("Email sending failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Email sending failed");
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 h-[1200px] z-[9999] pt-[200px]">
        <div className="absolute lg:w-[50%]  w-[90%]  h-full  ">
          <div className="z-50 border p-4 rounded-lg shadow-md relative">
            <button
              onClick={handleClick}
              className="absolute top-0 right-3 text-black font-bold px-3 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </button>
            <div className="bg-white rounded-md p-1 mt-3">
              <h2 className="text-lg font-bold mb-4 mt-3 text-customBlue-light text-center">Please Fill Your Details</h2>
              <form>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 container mx-auto">
                  <div className="col-span-1">
                    <div className="border-b border-gray-300">
                      <input
                        id="name"
                        type="text"
                        value={name}   
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full  bg-transparent text-white  outline-none"
                        placeholder="Name"
                      />
                    </div>
                    <div className="border-b border-gray-300">
                      <input
                        id="contact"
                        type="text"
                        value={Contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="block w-full  mt-[42px] bg-transparent text-white  outline-none"
                        placeholder="Contact number"
                      />
                    </div>
                    <div className="border-b border-gray-300">
                      <input
                        id="message"
                        type="text"
                        value={Requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        className="block w-full  mt-[48px] bg-transparent text-white  outline-none"
                        placeholder="Message"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="border-b border-gray-300 ">
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={Emailchangefunction}
                        className="block w-full bg-transparent text-white outline-none"
                        placeholder="Email"
                      />
                    </div>

                    <div className="border-b border-gray-300 bg-customBlue-light">
                      <input
                        id="file-upload"
                        type="file"
                        className="block w-full border-none border-gray-300 outline text-white bg-transparent mt-[43px] "
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="border-b border-gray-300">
                      <input
                        type="text"
                        className="block w-full bg-transparent mt-12 text-white outline-none"
                        placeholder="File link (optional)"
                      />
                    </div>
                  </div>
                </div>
                <div disabled={disableButton}
                    onClick={onFormSubmit}
                     className=" w-[130px] mb-4 h-[50px] text-[18px] cursor-pointer rounded-md font-bold mx-auto bg-customBlue-light hover:border-black border text-white flex justify-center items-center mt-6">
                  <button
                    
                    className=""
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
