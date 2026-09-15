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
            <div className="space-y-12">
                <h3 className="text-2xl font-bold text-white mb-4">
                Overall Dimensions
                </h3>

                <p className="text-lg font-light text-gray-300 leading-relaxed">
                        NanoFloat 2.0 is 1.54kgs. The length of NanoFloat 2.0 from antenna to fully extended piston is
                        280.35 mm, while its length with a fully retracted piston is 230.44 mm. The estimated volume of
                        NanoFloat 2.0 with the piston’s maximum extension is 689.47 mL and at minimum extension is 653.56 mL.
                        The endcap size for the float is approximately 126.5 mm wide, and its acrylic hull is 105 mm wide.
                </p>


                <h3 className="text-2xl font-bold text-white mb-2">
                Universal Mounting Plate
                </h3>

                <p className="text-lg font-light text-gray-300 leading-relaxed">
                    NanoFloat 2.0 contains a universal mounting plate that holds all
                    components, including a Printed Circuit Board (PCB), battery, motor,
                    and piston mount. Revolving clips for wire strain
                    relief are mounted using M3 and M4 screws of various lengths.
                    The plate effectively protects internal components from piston
                    movement.
                </p>

                <figure className="flex flex-col items-center">
                    <img
                        src="/float/universal_mount.gif"
                        alt="NanoFloat 2.0 universal mounting plate"
                        className="w-full max-w-sm border border-[#4b2e83]"
                    />

                    <figcaption className="text-sm text-gray-400 text-center mt-3">
                        Universal mounting plate and component layout
                    </figcaption>
                </figure>

                <h3 className="text-2xl font-bold text-white mb-4">
                    Piston-Driven Buoyancy Engine
                </h3>

                <p className="text-lg font-light text-gray-300 leading-relaxed">
                    NanoFloat 2.0’s buoyancy engine consists of a machined 6061-T6
                    aluminum piston that extends and retracts using a brushless N20 DC
                    motor. It uses this to complete vertical profiles by changing the internal
                    volume with a displacement-volume ratio of 0.027:1.
                </p>

                <figure className="flex flex-col items-center">
                    <img
                        src="/float/nanofloatpiston-movement.gif"
                        alt="NanoFloat 2.0 piston-driven buoyancy engine"
                        className="w-full max-w-sm border border-[#4b2e83]"
                    />

                    <figcaption className="text-sm text-gray-400 text-center mt-3">
                        Piston-driven buoyancy engine
                    </figcaption>
                </figure>

            </div>
        )}


        {section === "Electrical" && (
            <div>

                <h3 className="text-2xl font-bold text-white mb-2">
                    Printed Circuit Board (PCB)
                </h3>
                <figure className="flex flex-col items-center">
                    <img
                        src="/float/float_pcb.png"
                        alt="NanoFloat 2.0 PCB"
                        className="w-full max-w-3xl border border-[#4b2e83]"
                    />
                    <figcaption className="text-sm text-gray-400 text-center mt-3">
                        NanoFloat 2.0 soldered PCB 
                    </figcaption>
                </figure>
                
                <p className="text-lg font-bold text-gray-300 leading-relaxed">
                    * We use an brushless N20 DC motor.
                </p>

                <p className="text-lg font-bold text-gray-300 leading-relaxed">
                    ** We use the Blue Robotics Bar30 sensor.
                </p>
                
            </div>
        )}

        {section === "Firmware" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                <div className="lg:col-span-2">

                <h3 className="text-2xl font-bold text-white mt-5">
                    Mission Sequencing
                </h3>

                <p className="text-lg font-light text-gray-300 leading-relaxed py-2">
                    NanoFloat 2.0 is controlled by its custom C++ firmware, nanOS.
                    A mission begins when a “start” radio command is received,
                    triggering a state reset and pre-descent radio transmission.
                    NanoFloat 2.0 then cycles through four target depths. At each depth, 
                    it holds for 30 seconds while logging readings every 5 seconds. Once all
                    four depths are complete, the piston stops, and the mission is marked complete.
                    Logged data is transmitted over LoRa radio upon request from the surface station.
                </p>

                <h3 className="text-2xl font-bold text-white mt-5">
                    Depth Control
                </h3>

                <p className="text-lg font-light text-gray-300 leading-relaxed py-2">
                    nanOS controls the depth of NanoFloat 2.0 by adjusting its
                    buoyancy-control piston’s position. A Proportional-Integral (PI)
                    controller command outputs a motor drive signal to move the piston
                    to a different position. Based on the distance and direction to the target 
                    depth, it selects one of four behaviors: hold the current command; slam the
                    piston to brake; bang-bang drive to a full extreme; or run the PI
                    controller on velocity error to smoothly approach the target around
                    a neutral buoyancy point.
                </p>

                <h3 className="text-2xl font-bold text-white mt-5">
                    Data Logging
                </h3>

                <p className="text-lg font-light text-gray-300 leading-relaxed py-2">
                    nanOS saves oceanographic data to the ESP32-C6’s onboard flash
                    memory using LittleFS, a lightweight file system for microcontrollers.
                    Each .csv entry contains an identifier, timestamp (UTC), depth
                    (meters), pressure (kilopascals), and temperature (Celsius). 
                    
                    After NanoFloat 2.0 surfaces, each data entry is converted to a char array
                    and packed into an RH_RF95 radio packet. The RadioHead open-source
                    library’s functions, rf95.send() and rf95.waitPacketSent(), block
                    transmission until each packet is confirmed sent before moving to
                    the next line, ensuring complete transmission without dropping data.
                </p>

                </div>

                <figure className="flex flex-col items-center lg:top-6">
                    <img
                        src="/float/mission-sequencing.png"
                        alt="NanoFloat 2.0 firmware flowchart"
                        className="w-full max-w-[260px] border border-[#4b2e83]"
                    />

                    <figcaption className="text-sm text-gray-400 text-center mt-3">
                        nanOS firmware architecture and mission flow
                    </figcaption>
                </figure>

            </div>
        )}

        </h3>
    </div>

    </div>
    </section>
  );
}

