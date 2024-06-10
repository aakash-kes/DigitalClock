import React, { useState, useEffect } from "react";
import SegmentDisplay from "./SegmentDisplay";
import "./Clock.css";

const segmentMap = {
  0: [true, true, true, true, true, true, false],
  1: [false, true, true, false, false, false, false],
  2: [true, true, false, true, true, false, true],
  3: [true, true, true, true, false, false, true],
  4: [false, true, true, false, false, true, true],
  5: [true, false, true, true, false, true, true],
  6: [true, false, true, true, true, true, true],
  7: [true, true, true, false, false, false, false],
  8: [true, true, true, true, true, true, true],
  9: [true, true, true, true, false, true, true],
};

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time
      .toString()
      .padStart(2, "0")
      .split("")
      .map((digit) => segmentMap[digit]);
  };

  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  return (
    <div className="clock">
      <SegmentDisplay segments={hours[0]} />
      <SegmentDisplay segments={hours[1]} />
      <div className="separator">:</div>
      <SegmentDisplay segments={minutes[0]} />
      <SegmentDisplay segments={minutes[1]} />
      <div className="separator">:</div>
      <SegmentDisplay segments={seconds[0]} />
      <SegmentDisplay segments={seconds[1]} />
    </div>
  );
};

export default Clock;
