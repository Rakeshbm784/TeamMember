// FixedIcon.js
import React from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const FixedIcon = () => {
  return (
    <>
      <Overlay target={document.body} placement="left">
        {(props) => (
          <Tooltip id="fixed-icon-tooltip" {...props}>
            Settings
          </Tooltip>
        )}
      </Overlay>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon
          icon={faCirclePlus}
          style={{ color: "#74C0FC" }}
          size="2xl"
        />
      </div>
    </>
  );
};

export default FixedIcon;
