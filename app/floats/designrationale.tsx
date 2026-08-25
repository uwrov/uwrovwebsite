"use client";

import { useState } from "react";

export default function DesignRationale() {
  const [section, setSection] = useState("Mechanical");

  function buttonStyle(name: string) {
    if (section === name) {
        return "bg-[#4b2e83] text-white px-5 py-3 font-semibold";
    }
    return "bg-[#1a1a1a] text-gray-400 px-5 py-3 font-semibold hover:text-white";
    }   

  return ( 
    <section className="py-4 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-white mb-6">
          Design Rationale
        </h2>

        <div className="flex flex-wrap gap-2 mb-6">

        <button
            onClick={() => setSection("Mechanical")}
            className={buttonStyle("Mechanical")}
        >
            Mechanical
        </button>

        <button
            onClick={() => setSection("Electrical")}
            className={buttonStyle("Electrical")}
        >
            Electrical
        </button>

        <button
            onClick={() => setSection("Firmware")}
            className={buttonStyle("Firmware")}
        >
            Firmware
        </button>
    </div>

    <div className="border border-[#4b2e83] p-6 text-gray-300">
        <h3 className="text-xl font-bold text-white mb-3">
        {section === "Mechanical" && (
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Mechanical
              </h3>

              <p>
                
              </p>
            </div>
          )}
          {section === "Electrical" && (
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Electrical
              </h3>

              <p>
                
              </p>
            </div>
          )}
          {section === "Firmware" && (
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Firmware
              </h3>

              <p>
                
              </p>
            </div>
          )}
        </h3>
    </div>

    </div>
    </section>
  );
}

