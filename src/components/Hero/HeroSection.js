import Link from "next/link";
import React, { useState } from "react";
import Modal from "../UI/Modal";
import 'bootstrap/dist/css/bootstrap.css'

const HeroSection = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  // console.log("data is : ", data)

  // const URL = "https://drmoslehuddin.com" || `${origin}`;
  const URL = origin

  return (
    <>
      <div className="container">
        <div className="row" style={{alignContent:"center", justifyItems:'center'}}>
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            {/* <h1 className="dr-title"></h1> */}
            <h1 className="dr-title">
              {data?.Title} {data?.Name}
            </h1>
            {/* <h2 className="doctor-title">
            I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. I don't know, but the flag is a big
            plus.
          </h2> */}
            <div className="speciality">
              {data?.Specialities ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ color: "#FF9201" }}>
                    {data?.Specialities.map((s, i) => {
                      return `${i == 0 ? "" : ", "}${s}`;
                    })}
                  </div>

                  <i
                    class="fas fa-circle"
                    style={{
                      fontSize: ".4rem",
                      color: "#919399",
                      marginTop: "4px",
                    }}
                  ></i>

                  <div>
                    {data?.YearsOfExperience}
                    {data?.YearsOfExperience && "+ years of experience"}
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    // fontSize: ".9rem",
                    // fontWeight: "400",
                    // marginBottom: "0",
                    display: "flex",
                    alignItems: "center",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ color: "#FF9201" }}>{data?.Speciality}</div>

                  <i
                    class="fas fa-circle"
                    style={{
                      fontSize: ".4rem",
                      color: "#919399",
                      marginTop: "4px",
                    }}
                  ></i>

                  <div style={{ width: "max-content" }}>
                    {data?.YearsOfExperience}
                    {data?.YearsOfExperience && "+ years of experience"}
                  </div>
                </div>
              )}
              <div
                className="edu"
                style={{
                  fontSize: ".9rem",
                  display: "flex",
                  gap: ".5rem",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginTop: "1rem",
                }}
              >
                {Array.isArray(data?.Educations) &&
                  data?.Educations?.length > 0 &&
                  data?.Educations?.map((s, index) => (
                    <div
                      key={index}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      {/* {index !== 0 &&
                      <i
                        class="fas fa-circle"
                        style={{
                          marginRight: ".5rem",
                          fontSize: ".4rem",
                          color: "#919399",
                        }}
                      ></i>
                      } */}
                      <p style={{ margin: "0rem", width: "max-content", textTransform:"uppercase" }}>
                        {s}{" "}
                      </p>
                      {index ==
                      Number(
                        Array.isArray(data?.Educations) &&
                          data?.Educations?.length
                      ) -
                        1 ? (
                        ""
                      ) : (
                        <i
                          class="fas fa-circle"
                          style={{
                            marginLeft: ".5rem",
                            fontSize: ".4rem",
                            color: "#919399",
                          }}
                        ></i>
                      )}
                    </div>
                  ))}
              </div>
              {/* <div className="s-container">
              <div className="s-item">{data?.Speciality}</div>
            </div> */}
            </div>

            <div style={{ marginTop: "1rem" }}>
              <a
                style={{ textDecoration: "none" }}
                href={`tel:${data?.Mobile}`}
              >
                <div
                  style={{
                    display: "flex",
                    gap: ".5rem",
                    marginTop: ".8rem",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#F7F7F7",
                      padding: ".5rem",
                      borderRadius: "5px",
                      height: "35px",
                      width: "35px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i
                      style={{ color: "#0032B7" }}
                      class="fas fa-phone-alt"
                    ></i>
                  </div>
                  <div style={{}}>
                    <p
                      style={{
                        marginBottom: "-5px",
                        fontSize: ".8rem",
                        color: "#919399",
                      }}
                    >
                      Mobile
                    </p>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "1rem",
                        color: "#0032B7",
                      }}
                    >
                      {data?.Mobile}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div style={{ marginTop: "0rem" }}>
              <a
                style={{ textDecoration: "none" }}
                href={`mailto:${data?.Email}`}
              >
                <div
                  style={{
                    display: "flex",
                    gap: ".5rem",
                    marginTop: ".8rem",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#F7F7F7",
                      padding: ".5rem",
                      borderRadius: "5px",
                      height: "35px",
                      width: "35px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i style={{ color: "#0032B7" }} class="fas fa-envelope"></i>
                  </div>
                  <div style={{}}>
                    <p
                      style={{
                        marginBottom: "-5px",
                        fontSize: ".8rem",
                        color: "#919399",
                      }}
                    >
                      Email
                    </p>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "1rem",
                        color: "#0032B7",
                      }}
                    >
                      {data?.Email}
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="chamber">
              <p>Chamber</p>
              <div className="location-address">
                <h6 style={{ color: "#000000" }}>
                  {Array.isArray(data?.Chambers) && data?.Chambers[0]?.Name}
                </h6>
                {/* <h6>Islami Bank Hospital</h6> */}
                <span>
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                <span style={{ marginLeft: ".5rem" }}>
                  {/* Plot-31, Main Road-3, Block-D, Section-11, Mirpur, 1216 Dhaka,
                  Dhaka, Bangladesh */}
                  {Array.isArray(data?.Chambers) && data?.Chambers[0]?.Address}
                </span>
              </div>
            </div>
            {/* <div className="sub-speciality">
            <h3>Sub speciality</h3>
            <div className="s-container">
                {data?.SubSpeciality.map(item=>(
                    <div className="s-item">{item}</div>
                ))}
            </div>
          </div> */}
            <div className="hero-buttons">
              <button
                className="button1"
                type="button"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                onClick={() => setModalShow(true)}
              >
                Call for Appointment
              </button>
              <button className="button2" onClick={() => setModalShow(true)}>
                View Chamber
              </button>
            </div>

            {/* <div style={{ marginTop: "3rem" }} className="media_links">
              {Array.isArray(data?.MediaLinks) &&
                data?.MediaLinks?.length > 0 &&
                data?.MediaLinks?.map((item, index) => {
                  let url;
                  if (
                    item?.value.match(/^http?:\/\//i) ||
                    item?.value.match(/^https?:\/\//i)
                  ) {
                    url = item?.value;
                  } else {
                    url = "http://" + item?.value;
                  }
                  // if (!item?.value.match(/^http?:\/\//i) || !item?.value.match(/^https?:\/\//i)) {
                  //   url = "http://" + item?.value;
                  // }
                  return (
                    <div key={index} className="icon-box">
                      <a href={`${url}`}>
                        <i className={`fab fa-${item?.key?.toLowerCase()}`}></i>
                      </a>
                    </div>
                  );
                })}
            </div> */}
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <img
              src={data?.ProfileImage ? `/doctors_photo/${data?.ProfileImage}` : "/images/doctor.png"}
              // src="/images/doctor.png"
              className="img-fluid"
              alt=""
              style={{width:"100%", objectFit:"contain"}}
            />
          </div>
        </div>
      </div>

      <Modal show={modalShow} onHide={() => setModalShow(false)} data={data} />
    </>
  );
};

export default HeroSection;
