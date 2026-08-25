"use client";

import { useEffect, useState } from "react";

export default function ScrollImage() {
    const [showSecond, setShowSecond] = useState(false);

    useEffect(() => {const handleScroll = () => {setShowSecond(window.scrollY > 300);};

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full max-w-xs sm:max-w-md mx-auto">
      <img
        src="/float/nanofloat-ringassemblyannotated.png"
        alt="NanoFloat 2.0"
        className={`w-full h-auto transition-opacity duration-800 ${
          showSecond ? "opacity-0" : "opacity-100"
        }`}
      />

      <img
        src="/float/nanofloat-assemblyannotated.png"
        alt="NanoFloat 2.0"
        className={`absolute top-0 left-0 w-full h-auto transition-opacity duration-800 ${
          showSecond ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
