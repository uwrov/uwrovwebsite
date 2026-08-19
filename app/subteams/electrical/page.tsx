import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Subteam",
  description: "UWROV's Electrical subteam designs and supports electronic systems including internal circuitry, sensors, and thrusters using ECAD tools.",
};

export default function ElectricalPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-6">
            Subteam
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            Electrical
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            The Electrical subteam designs and supports electronic systems including
            internal circuitry, sensors, and thrusters. We use ECAD to design custom
            circuit boards.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-[#4b2e83] pl-5">
              <h3 className="text-white font-bold text-lg mb-2">Circuit Design</h3>
              <p className="text-gray-400 leading-relaxed">
                We design custom PCBs using ECAD software, handling power distribution,
                signal routing, and component selection for the ROV's electronics.
              </p>
            </div>
            <div className="border-l-4 border-[#4b2e83] pl-5">
              <h3 className="text-white font-bold text-lg mb-2">Sensors</h3>
              <p className="text-gray-400 leading-relaxed">
                We integrate sensors for depth, orientation, temperature, and other
                measurements critical to ROV operation and mission tasks.
              </p>
            </div>
            <div className="border-l-4 border-[#4b2e83] pl-5">
              <h3 className="text-white font-bold text-lg mb-2">Thrusters</h3>
              <p className="text-gray-400 leading-relaxed">
                We wire and configure the thruster systems that give the ROV its
                maneuverability underwater.
              </p>
            </div>
            <div className="border-l-4 border-[#4b2e83] pl-5">
              <h3 className="text-white font-bold text-lg mb-2">Power Systems</h3>
              <p className="text-gray-400 leading-relaxed">
                We manage the power architecture that keeps all onboard systems running
                reliably during dives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}