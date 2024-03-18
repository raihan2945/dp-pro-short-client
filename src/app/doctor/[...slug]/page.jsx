"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import HeroSection from "../../../components/Hero/HeroSection";
import axios from "axios";



const DoctorProfile = () => {
  const params = useParams();

  const slug = params?.slug[0];

  const [allData, setAllData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0);

  const baseUrl = `http://152.42.185.153:5000`;

  const getAllData = async (slugName) => {
    setLoading(true);
    const url = `${baseUrl}/api/v1/doctors/${slugName}`;
    // console.log("Url is : ", url);
    const { data } = await axios.get(url);
    // console.log("data is : ", data);
    setAllData(data.data);

    setLoading(false);
  };

  useEffect(() => {
    if (slug) {
      getAllData(slug);
    }
  }, [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#F7F8FA" }}>
        {loading ? (
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ textAlign: "center", verticalAlign: "center" }}>
              loading
            </h1>
          </div>
        ) : (
          <main>
            {allData && (
              <section id="hero" className="d-flex align-items-center">
                <HeroSection data={allData} />
              </section>
            )}
          </main>
        )}
      </div>

      {/* <a
          href="#"
          class="back-to-top d-flex align-items-center justify-content-center"
        >
          <i class="fas fa-arrow-up"></i>
        </a> */}
      {/* 👇️ scroll to top on button click */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          visibility: isVisible ? "visible" : "hidden",
          position: "fixed",
          padding: ".3rem .7rem",
          fontSize: "22px",
          bottom: "40px",
          right: "40px",
          backgroundColor: "#0032B7",
          color: "#fff",
          textAlign: "center",
          border: "none",
          transition: "1s all",
        }}
      >
        <i class="fas fa-arrow-circle-up"></i>
      </button>
      {/* ---------------------------------------- */}
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------- */}
    </>
  );
};

export default DoctorProfile;
