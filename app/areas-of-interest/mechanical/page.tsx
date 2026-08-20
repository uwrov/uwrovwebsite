import type { Metadata } from "next";
import CadViewer from "@/components/CadViewer";

export const metadata: Metadata = {
  title: "Mechanical Area of Interest",
  description: "UWROV's Mechanical area of interest designs and manufactures the frame, pressure hull, manipulator, and other systems using CAD software and rapid prototyping.",
};

export default function MechanicalPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-6">
              Area of Interest
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
              Mechanical
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              The Mechanical area of interest designs and manufactures the frame, pressure hull,
              manipulator, and other systems using CAD software and rapid prototyping.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <CadViewer src="/models/conduit-optimized.glb" alt="UWROV ROV CAD model" />
            <CadViewer src="/models/nanofloat-2-0.glb" alt="NanoFloat 2.0 Assembly CAD model" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-[#4b2e83] pl-5">
              <h3 className="text-white font-bold text-lg mb-2">Design</h3>
              <p className="text-gray-400 leading-relaxed">
                We use CAD software to design every component of the ROV before manufacturing,
                ensuring everything fits together precisely and meets competition requirements.
              </p>
            </div>
            <div className="border-l-4 border-[#4b2e83] pl-5">
              <h3 className="text-white font-bold text-lg mb-2">Manufacturing</h3>
              <p className="text-gray-400 leading-relaxed">
                From 3D printing to machining, we fabricate the parts that make up our ROV
                using the tools and resources available at UW.
              </p>
            </div>
            <div className="border-l-4 border-[#4b2e83] pl-5">
              <h3 className="text-white font-bold text-lg mb-2">Pressure Systems</h3>
              <p className="text-gray-400 leading-relaxed">
                We design and test the pressure hull and sealing systems that keep sensitive
                electronics safe at depth.
              </p>
            </div>
            <div className="border-l-4 border-[#4b2e83] pl-5">
              <h3 className="text-white font-bold text-lg mb-2">Manipulators</h3>
              <p className="text-gray-400 leading-relaxed">
                We build the manipulators used to complete underwater tasks during
                competition missions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}