import React, { useState } from "react";
import ModalUI from "../UI/Modal";

const ContactUs = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);


  return (
    <>
      <div id="contact" className="container">
        <div className="contact-container">
          <div className="img-container">
            <img
              src="./images/bg_contact.svg"
              alt="Contact for consultation"
              className=""
            />
          </div>
          <div className="text-container">
            <h1 className="">
              <span className="">Contact for consultation</span>
            </h1>
            <p className="" style={{padding:"0rem 1rem"}}>
              {/* Electronic commerce draws on technologies such as mobile <br />
              Products on online services or over the Internet. */}

              To get medical advice or consultations, simply reach out to <span style={{fontWeight:700}}>{data?.Title} {data?.Name}</span> 
            </p>
            <div className="btn-container">
              <button style={{ border: "none", borderRadius: "7px" }} href="" onClick={() => setModalShow(true)} className="btn1">
                Call for appointment
              </button>
              <button style={{ border: "none", borderRadius: "7px" }} href="" onClick={() => setModalShow(true)} className="btn2">
                View chamber
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalUI show={modalShow} onHide={() => setModalShow(false)} data={data} />
    </>
  );
};

export default ContactUs;
