import React from "react";

const FloatingWhatsapp = () => {
  return (
    <a
      href="https://wa.me/923218811400"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "35px",
        zIndex: 9999,
        cursor: "pointer",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.3)",
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="whatsapp"
        style={{ width: "32px", height: "32px" }}
      />
    </a>
  );
};

export default FloatingWhatsapp;
