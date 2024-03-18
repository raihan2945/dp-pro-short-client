import React from "react";

const Doctor = () => {
  return (
    <div>
      {" "}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ textTransform: "uppercase", fontWeight: "800" }}>
            Digipathy <span style={{ color: "#3F66DA" }}>Pro</span>
          </h1>
          <h1 style={{ textTransform: "uppercase", fontWeight: "800" }}>
            Doctor
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
