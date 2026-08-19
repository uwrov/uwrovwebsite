import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Subteam",
  description: "UWROV's Software subteam develops command and control software, pilot interfaces, autonomous systems, machine learning, and computer vision.",
};

export default function SoftwarePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-6">
            Subteam
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            Software
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            The Software subteam develops command & control software including pilot
            interfaces, autonomous systems, machine learning, and computer vision.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-[#4b2e83] pl-5">
              <h3 className="text-white font-bold text-lg mb-2">Pilot Interface</h3>
              <p className="text-gray-400 leading-relaxed">
                We build the control software that pilots use to operate the ROV in real
                time, including game controller input and camera feeds.
              </p>
            </div>
            <div className="border-l-4 border-[#4b2e83] pl-5">
              <h3 className="text-white font-bold text-lg mb-2">Autonomous Systems</h3>
              <p className="text-gray-400 leading-relaxed">
                We develop autonomous behaviors that allow systems such as our float
                to complete tasks and collect data. 
              </p>
            </div>
            <div className="border-l-4 border-[#4b2e83] pl-5">
              <h3 className="text-white font-bold text-lg mb-2">Machine Learning</h3>
              <p className="text-gray-400 leading-relaxed">
                We train and deploy ML models for object detection and classification,
                which earned us 1st place in the MATE ML Challenge in 2025.
              </p>
            </div>
            <div className="border-l-4 border-[#4b2e83] pl-5">
              <h3 className="text-white font-bold text-lg mb-2">Computer Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                We use computer vision to help the ROV identify and interact with
                objects during competition missions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}