import React, { useState, useRef } from "react";
import { technologies } from "../constants";

const WeaponWheel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef(null);

  const sliceCount = technologies.length;
  const sliceAngle = 360 / sliceCount;
  const radius = 300; // bigger radius

  const handleMouseMove = (e) => {
    const rect = wheelRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    // angle in degrees
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

    // rotate wheel so mouse direction points upward (12 o’clock)
    setRotation(angle + 90);

    // determine active slice (normalize angle to 0–360)
    const normalized = (angle + 360 + 90) % 360;
    const index = Math.floor(normalized / sliceAngle);
    setSelectedIndex(index);
  };

  return (
    <div
      ref={wheelRef}
      onMouseMove={handleMouseMove}
      className="relative w-[700px] h-[700px] mx-auto"
    >
      {/* Rotating wheel */}
      <div
        className="absolute inset-0"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {technologies.map((tech, index) => {
          const angle = (index * sliceAngle * Math.PI) / 180;
          const x = 350 + (radius - 80) * Math.cos(angle);
          const y = 350 + (radius - 80) * Math.sin(angle);

          const isActive = index === selectedIndex;

          return (
            <div
              key={tech.name}
              className={`absolute w-20 h-20 flex items-center justify-center rounded-full transition-all duration-300 ${
                isActive ? "bg-cyan-400 scale-125 shadow-lg" : "bg-gray-700 opacity-70"
              }`}
              style={{
                left: `${x - 40}px`,
                top: `${y - 40}px`,
              }}
            >
              <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
            </div>
          );
        })}
      </div>

      {/* Center hub */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold text-white">
          {technologies[selectedIndex].name}
        </h2>
        <img
          src={technologies[selectedIndex].icon}
          alt={technologies[selectedIndex].name}
          className="w-24 h-24 mt-2"
        />
      </div>
    </div>
  );
};

export default WeaponWheel;