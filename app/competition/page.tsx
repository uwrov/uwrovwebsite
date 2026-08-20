import type { Metadata } from "next";
import Image from "next/image";
import CadViewer from "@/components/CadViewer";

export const metadata: Metadata = {
  title: "Mechanical Area of Interest",
  description: "UWROV's Mechanical area of interest designs and manufactures the frame, pressure hull, manipulator, and other systems using CAD software and rapid prototyping.",
};

type GalleryPhoto = { src?: string; caption: string };
const galleryPhotos: GalleryPhoto[] = [
  { src: "/gallery/mechanical1.jpg", caption: "Mechanical team at work" },
  { src: "/gallery/mechanical2.jpg", caption: "Mechanical team at work" },
  { src: "/gallery/mechanical3.jpg", caption: "Mechanical team at work" },
  { src: "/gallery/mechanical4.jpg", caption: "Mechanical team at work" },
  { src: "/gallery/mechanical5.jpg", caption: "Mechanical team at work" },
  { src: "/gallery/mechanical6.jpg", caption: "Mechanical team at work" },
  { src: "/gallery/mechanical7.jpg", caption: "Mechanical team at work" },
  { src: "/gallery/mechanical8.jpg", caption: "Mechanical team at work" },
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
                  We use CAD software to design every component of the ROV before manufacturing,
                  ensuring everything fits together precisely and meets competition requirements.
                </p>
              </div>
              <div className="border-l-4 border-[#4b2e83] pl-5">
                <h3 className="text-white font-bold text-lg mb-2">Fabrication</h3>
                <p className="text-gray-400 leading-relaxed">
                  From 3D printing to machining, we fabricate the parts that make up our ROV
                  using the tools and resources available at UW.
                </p>
              </div>
              <div className="border-l-4 border-[#4b2e83] pl-5">
                <h3 className="text-white font-bold text-lg mb-2">Documentation</h3>
                <p className="text-gray-400 leading-relaxed">
                  We maintain detailed technical documentation of our designs and manufacturing
                  processes to support competition requirements and knowledge transfer across the team.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <CadViewer src="/models/conduit-optimized.glb" alt="UWROV ROV CAD model" />
            <CadViewer src="/models/nanofloat-2-0.glb" alt="NanoFloat 2.0 Assembly CAD model" />
          </div>
        </div>
      </section>

      <section className="py-20 pb-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Gallery</h2>
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