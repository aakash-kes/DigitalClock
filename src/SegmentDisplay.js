import React from "react";
import "./SegmentDisplay.css";

const SegmentDisplay = ({ segments }) => (
  <div className="digit">
    <div className={`segment a ${segments[0] ? "" : "off"}`}></div>
    <div className={`segment b ${segments[1] ? "" : "off"}`}></div>
    <div className={`segment c ${segments[2] ? "" : "off"}`}></div>
    <div className={`segment d ${segments[3] ? "" : "off"}`}></div>
    <div className={`segment e ${segments[4] ? "" : "off"}`}></div>
    <div className={`segment f ${segments[5] ? "" : "off"}`}></div>
    <div className={`segment g ${segments[6] ? "" : "off"}`}></div>
  </div>
);

export default SegmentDisplay;
