import React from "react";
import { SectionWrapper } from "../hoc";

const Feedbacks = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <video
        src={`${import.meta.env.BASE_URL}videos/demo.mp4`}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
