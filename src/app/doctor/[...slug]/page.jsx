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

  const baseUrl = `http://localhost:5000`;
  // const baseUrl = `https://pro.digipathy.com`;
  // const baseUrl = `http://152.42.185.153:5000`;

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
      <Head>
        <title>{allData?.Name}</title>
      </Head>
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
