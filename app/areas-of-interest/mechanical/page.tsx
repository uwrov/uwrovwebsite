import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CadViewer from "@/components/CadViewer";

export const metadata: Metadata = {
  title: "Mechanical Area of Interest",
  description: "UWROV's Mechanical area of interest designs and manufactures the frame, pressure hull, manipulator, and other systems using CAD software and rapid prototyping.",
};

type GalleryPhoto = { src?: string; caption: string };

const SHOW_CAD_VIEWERS = true;

const galleryPhotos: GalleryPhoto[] = [
  { src: "/gallery/mechanical1.jpg", caption: "Luke operating the lathe." },
  { src: "/gallery/mechanical2.jpg", caption: "Suzu, Oz, and Dorah assembling Conduit's core." },
  { src: "/gallery/mechanical3.jpg", caption: "Emmett, Marcus, and Rohan presenting Gantry poster at Undergrad Research Symposium." },
  { src: "/gallery/mechanical8.JPG", caption: "Abi quickly disassembling float during run." },
  { src: "/gallery/mechanical5.jpg", caption: "Marcus operating drill press." },
  { src: "/gallery/mechanical6.JPG", caption: "Emmett installing pool noodle on Conduit." },
  { src: "/gallery/mechanical7.jpg", caption: "Marcus deploying NanoFloat 2.0." },
  { src: "/gallery/mechanical4.jpg", caption: "Imants deploying Conduit." },
];

export default function MechanicalPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-6">
              Area of Interest
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
              Mechanical
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-12">
              The Mechanical area of interest designs and manufactures the frame, pressure hull,
              manipulator, and other systems using CAD software and rapid prototyping.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">What We Do</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#4b2e83] pl-5">
                <h3 className="text-white font-bold text-lg mb-2">Design</h3>
                <p className="text-gray-400 leading-relaxed">
                  UWROV uses Onshape to collaborate and design every component of the ROV before
                  manufacturing, ensuring every part fits together precisely while meeting competition
                  requirements. Simulations are done through SolidWorks, allowing UWROV to confidently
                  produce working parts of the ROV and float.
                </p>
              </div>
              <div className="border-l-4 border-[#4b2e83] pl-5">
                <h3 className="text-white font-bold text-lg mb-2">Fabrication</h3>
                <p className="text-gray-400 leading-relaxed">
                  Tools and resources available in the UWROV shop space and across campus are used to
                  fabricate the components that make up the ROV. 3D printers, power tools, and shop
                  machinery allow for the production of parts from a wide range of materials almost
                  entirely in-house. Members are machine-certified through safety and operating procedures
                  compiled by UWROV.
                </p>
              </div>
              <div className="border-l-4 border-[#4b2e83] pl-5">
                <h3 className="text-white font-bold text-lg mb-2">Documentation</h3>
                <p className="text-gray-400 leading-relaxed">
                  UWROV maintains detailed technical documentation of all design, development, and
                  manufacturing processes to support competition requirements while creating resources
                  for knowledge transfer across the team. Documentation is compiled into a comprehensive
                  25-page report following competition rubrics, which is open sourced each year. 
                </p>
              </div>
            </div>
          </div>

          {SHOW_CAD_VIEWERS && (
            <div className="flex flex-col gap-6">
              <div>
                <CadViewer
                  src="/models/conduit-optimized.glb"
                  alt="UWROV ROV Conduit 3D CAD model."
                  orientation="90deg 270deg 270deg"
                />
                <p className="text-center mt-3">
                  <Link href="/rovs" className="text-white font-semibold hover:text-[#a78bca] transition-colors">
                    ROV Conduit
                  </Link>{" "}
                </p>
              </div>
              <div>
                <CadViewer
                  src="/models/nanofloat-2-0.glb"
                  alt="NanoFloat 2.0 3D CAD model."
                  orientation="90deg 270deg 90deg"
                />
                <p className="text-center mt-3">
                  <Link href="/floats" className="text-white font-semibold hover:text-[#a78bca] transition-colors">
                    NanoFloat 2.0
                  </Link>{" "}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 pb-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Photo Gallery</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Moments from the Mechanical team's design and build process.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden bg-black border border-dashed border-white/15 flex items-center justify-center"
              >
                {photo.src ? (
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    width={400}
                    height={400}
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