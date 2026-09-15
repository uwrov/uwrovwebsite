import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Software Area of Interest",
  description: "UWROV's Software area of interest develops command and control software, pilot interfaces, autonomous systems, machine learning, and computer vision.",
};

type Demo = { title: string; description: string; gif: string };

const demos: Demo[] = [
  {
    title: "Float Firmware",
    description:
      "Embedded firmware controlling our autonomous float as it profiles the water column on its own.",
    gif: "/software/float firmware.gif",
  },
  {
    title: "ROV Simulator",
    description:
      "A physics-based simulator we built to test pilot controls and autonomous routines without needing pool time.",
    gif: "/software/SIM video.gif",
  },
  {
    title: "Computer Vision Detection Model",
    description:
      "Our computer vision model identifying and counting bass in real time. This system helped us take 1st place in the 2025 NOAA AI Challenge.",
    gif: "/software/uwrov_bass_annotations - Trim.gif",
  },
];

type GalleryPhoto = { src?: string; caption: string };
const galleryPhotos: GalleryPhoto[] = [
  { src: "/software/gallery/software1.jpg", caption: "Software team at work" },
  { src: "/software/gallery/software2.jpg", caption: "Software team at work" },
  { src: "/software/gallery/software3.jpg", caption: "Software team at work" },
];

export default function SoftwarePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-6">
            Area of Interest
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            Software
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            The Software area of interest develops command & control software including pilot
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

      {/* Demos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">See It In Action</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            A few of our software systems running live.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {demos.map((demo) => (
              <div key={demo.title}>
                <div className="aspect-video overflow-hidden bg-[#0a0a0a] border border-white/10 mb-4 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={demo.gif}
                    alt={demo.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{demo.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{demo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 pb-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Photo Gallery</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Moments from the Software team's work.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden bg-black border border-dashed border-white/15 flex items-center justify-center"
              >
                {photo.src ? (
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-gray-600 text-xs uppercase tracking-wider">
                    {photo.caption}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}