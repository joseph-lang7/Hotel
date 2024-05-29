import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={5}
      colors="#B89146"
      size={50}
      strokeWidth={5}
      onComplete={() => {
        return { shouldRepeat: true, delay: 0 };
      }}
    />
  );
};

export default Timer;
