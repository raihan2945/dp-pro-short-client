import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import moment from "moment";

const ModalUI = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
        Modal heading
      </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        {Array.isArray(props?.data?.Chambers) &&
          props?.data?.Chambers?.length > 0 &&
          props?.data?.Chambers?.map((item, index) => {
            return (
              <div
                key={index}
                class="col-lg-12"
                style={{ marginBottom: "1rem" }}
              >
                <div
                  style={{
                    borderRadius: "5px",
                    height: "100%",
                    border: "1px solid #F0F0F2",
                  }}
                  className="rounded-lg md:mb-0 md:py-[1.4375rem] md:px-5"
                >
                  <div
                    className="icon_section"
                    style={{
                      display: "flex",
                      alignItems: "start",
                      padding: "1.2rem",
                      gap: "1.2rem",
                    }}
                  >
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[5px] bg-[#EAEEF9] sm:mr-5 sm:h-11 sm:w-11">
                      <span
                        style={{
                          background: "#EAEEF9",
                          padding: ".7rem .5rem",
                          borderRadius: "5px",
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4614 4.65112H12.7268C12.7651 4.83413 12.7837 5.0207 12.7824 5.20767C12.7824 5.9457 12.4892 6.6535 11.9674 7.17536C11.4455 7.69723 10.7377 7.99041 9.99968 7.99041C9.26165 7.99041 8.55385 7.69723 8.03199 7.17536C7.51012 6.6535 7.21694 5.9457 7.21694 5.20767C7.21564 5.0207 7.23429 4.83413 7.2726 4.65112H6.53796C6.11178 4.66851 5.70981 4.85388 5.41989 5.16674C5.12998 5.4796 4.97569 5.8945 4.99075 6.32077V16.8952C4.99075 17.0428 5.04939 17.1843 5.15376 17.2887C5.25814 17.3931 5.3997 17.4517 5.5473 17.4517H8.33004V13.5559C8.33004 13.2607 8.44731 12.9776 8.65606 12.7688C8.8648 12.5601 9.14792 12.4428 9.44314 12.4428H10.5562C10.8514 12.4428 11.1346 12.5601 11.3433 12.7688C11.5521 12.9776 11.6693 13.2607 11.6693 13.5559V17.4517H14.4521C14.5997 17.4517 14.7412 17.3931 14.8456 17.2887C14.95 17.1843 15.0086 17.0428 15.0086 16.8952V6.32077C15.0237 5.8945 14.8694 5.4796 14.5795 5.16674C14.2896 4.85388 13.8876 4.66851 13.4614 4.65112Z"
                            fill="#0032B7"
                          ></path>{" "}
                          <path
                            d="M4.4342 8.54712H3.87765C3.43483 8.54712 3.01015 8.72303 2.69704 9.03615C2.38392 9.34926 2.20801 9.77395 2.20801 10.2168V16.3388C2.20801 16.634 2.32528 16.9171 2.53403 17.1259C2.74277 17.3346 3.02589 17.4519 3.3211 17.4519H4.58447C4.48637 17.2828 4.43455 17.0908 4.4342 16.8953V8.54712Z"
                            fill="#0032B7"
                          ></path>{" "}
                          <path
                            d="M16.1219 8.54712H15.5653V16.8953C15.565 17.0908 15.5131 17.2828 15.415 17.4519H16.6784C16.9736 17.4519 17.2567 17.3346 17.4655 17.1259C17.6742 16.9171 17.7915 16.634 17.7915 16.3388V10.2168C17.7915 9.77395 17.6156 9.34926 17.3025 9.03615C16.9894 8.72303 16.5647 8.54712 16.1219 8.54712Z"
                            fill="#0032B7"
                          ></path>{" "}
                          <path
                            d="M9.99971 7.4339C10.5901 7.4339 11.1564 7.19936 11.5739 6.78187C11.9914 6.36438 12.2259 5.79814 12.2259 5.20771C12.2276 5.01975 12.2032 4.83246 12.1535 4.65117C12.029 4.17476 11.7501 3.75309 11.3604 3.45213C10.9706 3.15117 10.4921 2.98792 9.99971 2.98792C9.5073 2.98792 9.02879 3.15117 8.63906 3.45213C8.24934 3.75309 7.97039 4.17476 7.84587 4.65117C7.79619 4.83246 7.77184 5.01975 7.77352 5.20771C7.77352 5.79814 8.00806 6.36438 8.42555 6.78187C8.84305 7.19936 9.40929 7.4339 9.99971 7.4339ZM8.88661 4.65117H9.44316V4.09462C9.44316 3.94701 9.5018 3.80545 9.60617 3.70108C9.71054 3.59671 9.8521 3.53807 9.99971 3.53807C10.1473 3.53807 10.2889 3.59671 10.3932 3.70108C10.4976 3.80545 10.5563 3.94701 10.5563 4.09462V4.65117H11.1128C11.2604 4.65117 11.402 4.7098 11.5063 4.81418C11.6107 4.91855 11.6694 5.06011 11.6694 5.20771C11.6694 5.35532 11.6107 5.49688 11.5063 5.60125C11.402 5.70563 11.2604 5.76426 11.1128 5.76426H10.5563V6.32081C10.5563 6.46841 10.4976 6.60997 10.3932 6.71435C10.2889 6.81872 10.1473 6.87736 9.99971 6.87736C9.8521 6.87736 9.71054 6.81872 9.60617 6.71435C9.5018 6.60997 9.44316 6.46841 9.44316 6.32081V5.76426H8.88661C8.73901 5.76426 8.59745 5.70563 8.49308 5.60125C8.3887 5.49688 8.33007 5.35532 8.33007 5.20771C8.33007 5.06011 8.3887 4.91855 8.49308 4.81418C8.59745 4.7098 8.73901 4.65117 8.88661 4.65117Z"
                            fill="#0032B7"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h6 className="designation">{item?.Name}</h6>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: ".5rem",
                          padding: ".5rem 0rem",
                        }}
                      >
                        <i
                          style={{ color: "#919399" }}
                          class="fas fa-map-marker-alt"
                        ></i>
                        <p
                          className="address"
                          style={{ fontSize: ".8rem", margin: "0" }}
                        >
                          {item?.Address}
                        </p>
                      </div>
                      {item?.AvailableDays && (
                        <div>
                          <span style={{ color: "#A3A3AA", fontSize: ".8rem" }}>
                            Available days :
                          </span>{" "}
                          {item?.AvailableDays?.map((day, index) => {
                            return (
                              <span key={index} style={{ fontSize: ".8rem" }}>
                                {index == 0 ? "" : ", "}
                                {day}
                              </span>
                            );
                          })}
                        </div>
                      )}
                      {item?.AvailableTime && (
                        <div>
                          <span style={{ color: "#A3A3AA", fontSize: ".8rem" }}>
                            Available time :
                          </span>{" "}
                          <span style={{ fontSize: ".8rem" }}>
                            {moment(`${item?.AvailableTime?.split("-")[0]}}`, [
                              "HH:mm",
                            ]).format("hh:mm a")}
                          </span>
                          -
                          <span style={{ fontSize: ".8rem" }}>
                            {moment(`${item?.AvailableTime?.split("-")[1]}}`, [
                              "HH:mm",
                            ]).format("hh:mm a")}
                            {/* {item.AvailableTime.split("-")[1]} */}
                          </span>
                        </div>
                      )}
                      <div
                        className="chamber_phone_numbers"
                        style={{
                          display: "flex",
                          justifyContent: "",
                          gap: "2rem",
                        }}
                      >
                        {item?.AppointmentNumber && (
                          <a
                            style={{ textDecoration: "none" }}
                            href={`tel:${item?.AppointmentNumber}`}
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
                                <i class="fas fa-phone-alt"></i>
                              </div>
                              <div style={{}}>
                                <p
                                  style={{
                                    margin: "0",
                                    fontSize: ".8rem",
                                    color: "#919399",
                                  }}
                                >
                                  Chamber phone number
                                </p>
                                <p style={{ margin: "0", fontSize: ".8rem" }}>
                                  {item?.AppointmentNumber}
                                </p>
                              </div>
                            </div>
                          </a>
                        )}
                        {item?.AssistantNumber && (
                          <a
                            style={{ textDecoration: "none" }}
                            href={`tel:${item?.AssistantNumber}`}
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
                                <i class="fas fa-phone-alt"></i>
                              </div>
                              <div style={{}}>
                                <p
                                  style={{
                                    margin: "0",
                                    fontSize: ".8rem",
                                    color: "#919399",
                                  }}
                                >
                                  Assistant
                                </p>
                                <p style={{ margin: "0", fontSize: ".8rem" }}>
                                  {item?.AssistantNumber}
                                </p>
                              </div>
                            </div>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </Modal.Body>
      {/* <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer> */}
    </Modal>
  );
};

export default ModalUI;
