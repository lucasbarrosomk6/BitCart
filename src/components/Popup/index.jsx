import React from "react";
import "./popup.css";

const Popup = ({ children, open, toggleOpen }) => {
  if (!open) return null;
  return (
    <div className="popup-backdrop" onclick={() => toggleOpen(!open)}>
      <div className="popup-body">{children}</div>
    </div>
  );
};
export default Popup;
